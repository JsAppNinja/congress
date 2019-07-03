import React, { Component, MouseEvent, RefObject } from 'react';
import { Link } from 'react-router-dom';

import cx from 'classnames';
import linkIsExternal from 'utils/linkIsExternal';

import { Color, BgColor } from 'types/Button';

interface Props {
  className: string;
  style: React.CSSProperties;
  color?: Color;
  bgColor?: BgColor;
  variant?: 'primary' | 'primary-small' | 'secondary' | 'secondary-small';
  type?: 'button' | 'submit' | 'reset';
  label?: string;
  ariaLabel: string;
  children?: React.ReactNode;
  to: string;
  isAnchor: boolean;
  disabled: boolean;
  disabledVariant: 'dark' | 'light';
  openInCurrentTab: boolean;
  openInNewTab: boolean;
  onClick(e: MouseEvent<HTMLElement>): void;
  onMouseEnter(e: MouseEvent<HTMLElement>): void;
  onMouseLeave(e: MouseEvent<HTMLElement>): void;
  elemRef?: RefObject<HTMLAnchorElement | Link | HTMLButtonElement>;
}

const defaultProps = {
  className: '',
  style: {},
  to: '',
  isAnchor: false,
  disabled: false,
  disabledVariant: 'light',
  openInCurrentTab: false,
  openInNewTab: false,
  onClick: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {}
};

class Button extends Component<Props> {
  static defaultProps = defaultProps;

  render() {
    const {
      className,
      style,
      color,
      bgColor,
      variant,
      type,
      label,
      ariaLabel,
      children,
      to,
      isAnchor,
      disabled,
      disabledVariant,
      openInCurrentTab,
      openInNewTab,
      onClick,
      onMouseLeave,
      onMouseEnter,
      elemRef
    } = this.props;

    const classes = cx('pointer', 'Button', className, {
      [`Button--style-${variant}`]: !!variant,
      [`Button--color-${color}`]: !!color,
      [`Button--bg-color-${bgColor}`]: !!bgColor,
      'events-none': disabled,
      [`Button--disabled-${disabledVariant}`]: disabled && disabledVariant
    });

    const linkIsMailOrTel = to.includes('mailto:') || to.includes('tel:');

    const linkedComponent =
      linkIsMailOrTel || linkIsExternal(to) || openInNewTab || isAnchor ? (
        <a
          className={cx('Button text-decoration-none', {
            'events-none': disabled
          })}
          target={openInCurrentTab || linkIsMailOrTel ? '_self' : '_blank'}
          href={to}
          rel="noopener"
          onClick={onClick}
          aria-label={ariaLabel}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          ref={elemRef as RefObject<HTMLAnchorElement>}
        >
          <div className={classes}>
            {!!children && !label ? (
              children
            ) : (
              <span className="h100 flex justify-center items-center">
                {label}
              </span>
            )}
          </div>
        </a>
      ) : (
        <Link
          className={cx('Button text-decoration-none', {
            'events-none': disabled
          })}
          aria-label={ariaLabel}
          to={to}
          onClick={onClick}
          style={style}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          ref={elemRef as RefObject<Link>}
        >
          <div className={classes}>
            {!!children && !label ? (
              children
            ) : (
              <span className="h100 flex justify-center items-center">
                {label}
              </span>
            )}
          </div>
        </Link>
      );

    const button = !!to ? (
      linkedComponent
    ) : (
      <button
        aria-label={ariaLabel}
        aria-disabled={disabled}
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={cx('h100 inline-flex justify-center items-center', classes)}
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={elemRef as RefObject<HTMLButtonElement>}
      >
        {!!children && !label ? children : label}
      </button>
    );

    return button;
  }
}

export default Button;
