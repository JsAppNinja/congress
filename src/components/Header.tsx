import React, { Component } from 'react';
import cx from 'classnames';

import Signup from 'components/Signup';
import DonorCTA from 'components/DonorCTA';
import TopNav from 'components/TopNav';
import { Locale } from 'types/Locale';
import isMobile from 'utils/isMobile';
import { freezeScroll, unfreezeScroll } from 'utils/manageScrollingElement';

interface Props {
  mobileMenuIsShown: boolean;
  signupHeader: string;
  fullHeaderIsShown: boolean;
  hideSignup: () => void;
  backgroundColor: 'green' | 'yellow';
  showSignupCloseIcon: boolean;
  donateUrl: string;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  setLocale(locale: Locale): void;
  showFullHeaderAction(): void;
  showSignupAction(): void;
  showMobileMenu(): void;
  hideMobileMenu(): void;
}

interface State {
  deviceIsMobile: boolean;
}

class Header extends Component<Props, State> {
  state: State = {
    deviceIsMobile: isMobile()
  };

  checkIfDeviceIsMobile = () => {
    if (this.state.deviceIsMobile !== isMobile()) {
      this.setState({ deviceIsMobile: isMobile() });
    }
  };

  componentDidUpdate(prevProps: Props) {
    if (!this.state.deviceIsMobile) return null;

    if (!prevProps.fullHeaderIsShown && this.props.fullHeaderIsShown) {
      freezeScroll();
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkIfDeviceIsMobile);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkIfDeviceIsMobile);
  }

  render() {
    return (
      <div
        className={cx('Header w100 fixed z3', {
          'vh100 overflow-auto':
            this.state.deviceIsMobile && this.props.fullHeaderIsShown,
          'Header__signup-active': this.props.fullHeaderIsShown
        })}
      >
        <Signup
          hideSignup={this.props.hideSignup}
          header={this.props.signupHeader}
          backgroundColor={this.props.backgroundColor}
          showCloseIcon={this.props.showSignupCloseIcon}
        />
        <DonorCTA url={this.props.donateUrl} />
        <TopNav
          donateUrl={this.props.donateUrl}
          facebookUrl={this.props.facebookUrl}
          twitterUrl={this.props.twitterUrl}
          instagramUrl={this.props.instagramUrl}
          setLocale={this.props.setLocale}
          showFullHeader={this.props.showFullHeaderAction}
          showMobileMenu={this.props.showMobileMenu}
          hideMobileMenu={this.props.hideMobileMenu}
          mobileMenuIsShown={this.props.mobileMenuIsShown}
        />
      </div>
    );
  }
}

export default Header;
