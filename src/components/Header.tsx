import React, { Component } from 'react';
import cx from 'classnames';

import Signup from 'components/Signup';
import DonorCTA from 'components/DonorCTA';
import TopNav from 'components/TopNav';
import { Locale } from 'types/Locale';
import { Section } from 'types/Section';
import { freezeScroll } from 'utils/manageScrollingElement';

interface Props {
  mobileMenuIsShown: boolean;
  signupHeader: string;
  fullHeaderIsShown: boolean;
  hideSignup: () => void;
  backgroundColor: 'green' | 'yellow';
  showSignupCloseIcon: boolean;
  donorCTA: string;
  donateUrl: string;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  setLocale(locale: Locale): void;
  showFullHeaderAction(): void;
  showSignupAction(): void;
  showMobileMenu(): void;
  hideMobileMenu(): void;
  shopUrl: string;
  radioUrl: string;
  joinUsUrl: string;
  volunteerUrl: string;
  hostHousePartyUrl: string;
  sections: Section[] | null;
  showMobileSubNav: () => void;
  hideMobileSubNav: () => void;
  mobileSubnavIsShown: boolean;
}

class Header extends Component<Props> {
  componentDidUpdate(prevProps: Props) {
    if (!prevProps.fullHeaderIsShown && this.props.fullHeaderIsShown) {
      freezeScroll();
    }
  }

  render() {
    return (
      <div
        className={cx('Header w100 fixed z3', {
          'Header__signup-active': this.props.fullHeaderIsShown
        })}
      >
        <Signup
          hideSignup={this.props.hideSignup}
          header={this.props.signupHeader}
          backgroundColor={this.props.backgroundColor}
          showCloseIcon={this.props.showSignupCloseIcon}
          showCampaignSlogan={true}
        />
        <DonorCTA
          fullHeaderIsShown={this.props.fullHeaderIsShown}
          donorCTA={this.props.donorCTA}
          url={this.props.donateUrl}
        />
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
          shopUrl={this.props.shopUrl}
          radioUrl={this.props.radioUrl}
          joinUsUrl={this.props.joinUsUrl}
          volunteerUrl={this.props.volunteerUrl}
          hostHousePartyUrl={this.props.hostHousePartyUrl}
          fullHeaderIsShown={this.props.fullHeaderIsShown}
          sections={this.props.sections}
          showMobileSubNav={this.props.showMobileSubNav}
          hideMobileSubNav={this.props.hideMobileSubNav}
          mobileSubnavIsShown={this.props.mobileSubnavIsShown}
        />
      </div>
    );
  }
}

export default Header;
