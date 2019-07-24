import React, { Component } from 'react';
import cx from 'classnames';

import isMobile from 'utils/isMobile';
import facebook from 'assets/facebook.svg';
import twitter from 'assets/twitter.svg';
import instagram from 'assets/instagram.svg';
import hamburger from 'assets/hamburger.svg';
import closeIcon from 'assets/close.svg';
import carrot from 'assets/carrot.svg';
import { Image, Button } from 'components/base';
import { Locale } from 'types/Locale';
import { Section } from 'types/Section';
import { getLocale, Polyglot } from 'constants/Locales';
import { freezeScroll, unfreezeScroll } from 'utils/manageScrollingElement';
import SubNav from 'components/SubNav';

interface Props {
  donateUrl: string;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  setLocale(locale: Locale): void;
  showFullHeader(): void;
  showMobileMenu(): void;
  hideMobileMenu(): void;
  mobileMenuIsShown: boolean;
  shopUrl: string;
  radioUrl: string;
  joinUsUrl: string;
  volunteerUrl: string;
  hostHousePartyUrl: string;
  fullHeaderIsShown: boolean;
  sections: Section[] | null;
  showMobileSubNav: () => void;
  hideMobileSubNav: () => void;
  mobileSubnavIsShown: boolean;
}

interface State {
  menuIsActive: boolean;
  deviceIsMobile: boolean;
}

class TopNav extends Component<Props, State> {
  state: State = {
    menuIsActive: false,
    deviceIsMobile: isMobile()
  };

  checkIfDeviceIsMobile = () => {
    if (this.state.deviceIsMobile !== isMobile()) {
      this.setState({ deviceIsMobile: isMobile() });
    }
  };

  componentDidUpdate(prevProps: Props) {
    if (!this.state.deviceIsMobile) return;

    if (!prevProps.mobileMenuIsShown && this.props.mobileMenuIsShown) {
      freezeScroll();
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkIfDeviceIsMobile);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkIfDeviceIsMobile);
  }

  showMenu = () => {
    this.setState({ menuIsActive: true });
  };

  hideMenu = () => {
    this.setState({ menuIsActive: false });
  };

  render() {
    const {
      setLocale,
      showFullHeader,
      showMobileMenu,
      hideMobileMenu,
      mobileMenuIsShown,
      shopUrl,
      radioUrl,
      joinUsUrl,
      volunteerUrl,
      hostHousePartyUrl,
      fullHeaderIsShown,
      sections,
      hideMobileSubNav,
      showMobileSubNav,
      mobileSubnavIsShown
    } = this.props;
    const Language = getLocale() as Polyglot;

    if (!mobileMenuIsShown && this.state.deviceIsMobile) {
      return (
        <div className="flex flex-col col-12">
          <div className="TopNav__mobile-bar flex col-12 bg-color-white">
            <div className="TopNav__mobile-dropdown-container flex flex-row col-10">
              <div className="flex justify-start items-center col-12 pl1 pt1 pb1 h100">
                <Button
                  className={cx('TopNav__language-button m0 p0 pointer', {
                    'TopNav__language-button--selected':
                      Language.locale() === 'en-US'
                  })}
                  ariaLabel={Language.t('topNav.siteToEnglish')}
                  onClick={() => setLocale('en-US')}
                >
                  <span className="text-sm franklin-gothic flex justify-center items-center circle p_25">
                    EN
                  </span>
                </Button>
                <span className="m_25">/</span>
                <Button
                  className={cx('TopNav__language-button m0 p0 pointer', {
                    'TopNav__language-button--selected':
                      Language.locale() === 'fr'
                  })}
                  ariaLabel={Language.t('topNav.siteToHaitian')}
                  onClick={() => setLocale('fr')}
                >
                  <span className="text-sm franklin-gothic">HAI</span>
                </Button>
              </div>

              <div
                className={cx('flex justify-center items-center mr_5', {
                  'TopNav__icon-for-subnav--is-active': mobileSubnavIsShown
                })}
              >
                <Button
                  onClick={
                    mobileSubnavIsShown ? hideMobileSubNav : showMobileSubNav
                  }
                  ariaLabel={Language.t('topNav.openSubnav')}
                >
                  <Image
                    className="TopNav__icon pointer"
                    src={carrot}
                    alt={
                      mobileSubnavIsShown
                        ? Language.t('topNav.upArrow')
                        : Language.t('topNav.downArrow')
                    }
                  />
                </Button>
              </div>
            </div>

            <div className="TopNav__hamburger-container flex justify-center items-center pl1 pr1 pointer h100 col-2">
              <div>
                <Button
                  onClick={showMobileMenu}
                  ariaLabel={Language.t('topNav.openMenu')}
                >
                  <Image
                    className="TopNav__icon pointer"
                    src={hamburger}
                    alt={Language.t('topNav.altTextForMenuIcon')}
                  />
                </Button>
              </div>
            </div>
          </div>
          {mobileSubnavIsShown && (
            <div className="TopNav__menu-subnav fixed flex justify-start col-10 mt3 bg-color-white">
              <SubNav
                shopUrl={shopUrl}
                radioUrl={radioUrl}
                joinUsUrl={joinUsUrl}
                volunteerUrl={volunteerUrl}
                hostHousePartyUrl={hostHousePartyUrl}
                fullHeaderIsShown={fullHeaderIsShown}
                sections={sections}
                hideMobileSubNav={hideMobileSubNav}
                mobileSubnavIsShown={mobileSubnavIsShown}
              />
            </div>
          )}
        </div>
      );
    }

    return (
      <div
        className={cx(
          'TopNav flex flex-col items-center md:flex-row bg-color-white',
          {
            'transition-slide-up-in': !mobileMenuIsShown,
            'fixed t0 l0 r0 b0': mobileMenuIsShown
          }
        )}
      >
        {this.state.deviceIsMobile && (
          <div className="flex justify-end items-center col-12 md:col-4 p1">
            <Button
              className="TopNav__language-button m0 p0 pointer"
              onClick={() => {
                unfreezeScroll();
                hideMobileMenu();
              }}
              ariaLabel={Language.t('topNav.closesTheMenu')}
            >
              <img
                className="TopNav__icon pointer"
                src={closeIcon}
                alt={Language.t('topNav.altTextForCloseIcon')}
              />
            </Button>
          </div>
        )}
        <div className="TopNav__nav-item flex justify-center items-center h100 col-12 md:col-4">
          <Button
            className={cx('TopNav__language-button m0 p0 mr_25 pointer', {
              'TopNav__language-button--selected':
                Language.locale() === 'en-US' && !this.state.deviceIsMobile
            })}
            ariaLabel={Language.t('topNav.siteToEnglish')}
            onClick={() => setLocale('en-US')}
          >
            <span className="text-md franklin-gothic flex justify-center items-center p_25">
              EN
            </span>
          </Button>
          <span className="text-md franklin-gothic mr_25">/</span>
          <Button
            className={cx('TopNav__language-button m0 p0 mr_25 pointer', {
              'TopNav__language-button--selected':
                Language.locale() === 'fr' && !this.state.deviceIsMobile
            })}
            ariaLabel={Language.t('topNav.siteToHaitian')}
            onClick={() => setLocale('fr')}
          >
            <span className="text-md franklin-gothic">HAI</span>
          </Button>
        </div>

        <div className="TopNav__nav-item-action flex justify-center items-center h100 col-12 md:col-4">
          <Button
            className="text-md franklin-gothicflex flex-1 justify-center items-center pointer h100 TopNav__nav-item-text"
            onClick={() => {
              hideMobileMenu();
              showFullHeader();
            }}
            ariaLabel={Language.t('topNav.showSignupForm')}
            label={Language.t('topNav.signUp')}
          ></Button>
        </div>
        <div className="TopNav__nav-item-action flex justify-center items-center h100 col-12 md:col-4">
          <a
            className="text-md franklin-gothic flex flex-1 justify-center items-center pointer h100 TopNav__nav-item-text"
            href={this.props.donateUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {Language.t('topNav.donate')}
          </a>
        </div>
        <div className="TopNav__social-media flex justify-center items-center h100 md:m1">
          <a
            className="TopNav__social-media-icon flex justify-center pointer p1 md:p0"
            href={this.props.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="mr_5 ml_5 pointer"
              src={facebook}
              alt={Language.t('topNav.altTextForFacebookIcon')}
            />
          </a>
          <a
            className="TopNav__social-media-icon flex justify-center pointer p1 md:p0"
            href={this.props.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="mr_5 ml_5 pointer"
              src={twitter}
              alt={Language.t('topNav.altTextForTwitterIcon')}
            />
          </a>
          <a
            className="TopNav__social-media-icon flex justify-center pointer p1 md:p0"
            href={this.props.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="mr_5 ml_5 pointer"
              src={instagram}
              alt={Language.t('topNav.altTextForInstagramIcon')}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default TopNav;
