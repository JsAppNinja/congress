import React, { Component } from 'react';
import { getLocale, Polyglot } from 'constants/Locales';
import cx from 'classnames';
import { Image } from 'components/base';
import AdemForCongressSiteTitleDesktop from 'assets/adem-bunkeddeko-for-congress-black-desktop.svg';
import AdemForCongressSiteTitleMobile from 'assets/adem-bunkeddeko-for-congress-black-mobile.svg';
import isMobile from 'utils/isMobile';

interface Props {
  fullHeaderIsShown?: boolean;
}

interface State {
  deviceIsMobile: boolean;
}

class SiteTitle extends Component<Props, State> {
  state: State = {
    deviceIsMobile: isMobile()
  };

  checkIfDeviceIsMobile = () => {
    if (this.state.deviceIsMobile !== isMobile()) {
      this.setState({ deviceIsMobile: isMobile() });
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.checkIfDeviceIsMobile);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkIfDeviceIsMobile);
  }

  render() {
    const Language = getLocale() as Polyglot;

    return (
      <div
        className={cx('SiteTitle pl1 transition-slide-right-in', {
          hidden: this.props.fullHeaderIsShown,
          'SiteTitle__full-header-is-shown': this.props.fullHeaderIsShown,
          'SiteTitle__is-mobile relative': this.state.deviceIsMobile
        })}
      >
        <Image
          src={
            this.state.deviceIsMobile
              ? AdemForCongressSiteTitleMobile
              : AdemForCongressSiteTitleDesktop
          }
          alt={Language.t('global.AdemForCongress')}
        />
      </div>
    );
  }
}

export default SiteTitle;
