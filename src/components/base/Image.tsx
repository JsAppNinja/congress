import React, { Component } from 'react';

import cx from 'classnames';

interface Props {
  alt: string;
  isBg: boolean;
  src: string;
  className: string;
  children: React.ReactNode;
  styleName: string;
  style: React.CSSProperties;
  onMount: () => any;
  onImgLoad: () => any;
}

interface State {
  loaded: boolean;
  classes: string;
  styles: string;
}

const defaultProps = {
  isBg: false,
  className: 'w100',
  children: null,
  styleName: '',
  style: {},
  onMount: () => {},
  onImgLoad: () => {}
};

class Image extends Component<Props, State> {
  static defaultProps = defaultProps;

  constructor(props: Props) {
    super(props);

    this.props.onMount();
    const { src } = this.props;
    const loader = new (window as any).Image();
    loader.src = '';
    loader.onload = () => this.didLoad();
    loader.onerror = () => console.error('Error loading ' + src);
    loader.src = src;

    this.state = {
      loaded: false,
      classes: cx('Image preload', props.className),
      styles: cx('Image', props.styleName)
    };
  }

  didLoad() {
    const classes = this.props.className;
    const loaded = true;
    this.props.onImgLoad();
    this.setState({ classes, loaded });
  }

  render() {
    const { src, alt, style, isBg, children } = this.props;
    const { classes } = this.state;
    const bgStyle = {
      backgroundColor: 'white',
      backgroundImage: `url(${src})`,
      ...style
    };

    const styleNames = cx('Image transition', {
      'opacity-0': !this.state.loaded
    });

    if (isBg) {
      return (
        <div className={cx(styleNames, classes)} style={bgStyle}>
          {children}
        </div>
      );
    }

    return (
      <img
        className={cx(styleNames, classes)}
        style={style}
        src={src}
        alt={alt}
      />
    );
  }
}

export default Image;
