import React, { Component } from 'react';
import cx from 'classnames';

import isMobile from 'utils/isMobile';
import facebook from 'assets/facebook.svg';
import twitter from 'assets/twitter.svg';
import instagram from 'assets/instagram.svg';
import hamburger from 'assets/hamburger.svg';
import closeIcon from 'assets/close.svg';
import { Image, Button } from 'components/base';
import { Locale } from 'types/Locale';
import { getLocale, Polyglot } from 'constants/Locales';

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
      mobileMenuIsShown
    } = this.props;
    const Language = getLocale() as Polyglot;

    if (!mobileMenuIsShown && this.state.deviceIsMobile) {
      return (
        <div className="TopNav flex TopNav__mobile-bar bg-color-white">
          <div className="flex justify-start items-center col-12 ml1 pt1 pb1">
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
                'TopNav__language-button--selected': Language.locale() === 'fr'
              })}
              ariaLabel={Language.t('topNav.siteToHaitian')}
              onClick={() => setLocale('fr')}
            >
              <span className="text-sm franklin-gothic">HAI</span>
            </Button>
          </div>
          <div className="TopNav__hamburger-container flex justify-center items-center pl1 pr1 pointer h100">
            <Button
              onClick={showMobileMenu}
              ariaLabel={Language.t('topNav.openMenu')}
            >
              <Image className="pointer" src={hamburger} alt="menu icon" />
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div
        className={cx(
          'TopNav flex flex-col items-center md:flex-row bg-color-white transition-slide-up-in',
          {
            'fixed t0 l0 r0 b0': mobileMenuIsShown
          }
        )}
      >
        {this.state.deviceIsMobile && (
          <div className="flex justify-end items-center col-12 md:col-4 p1">
            <Button
              className="TopNav__language-button m0 p0 mr_25 pointer"
              onClick={hideMobileMenu}
              ariaLabel={Language.t('topNav.closesTheMenu')}
            >
              <img
                className="mr_5 ml_5 pointer"
                src={closeIcon}
                alt="close icon"
              />
            </Button>
          </div>
        )}
        <div className="TopNav__nav-item flex justify-center items-center h100 col-12 md:col-4">
          <Button
            className={cx('TopNav__language-button m0 p0 mr_25 pointer', {
              'TopNav__language-button--selected': Language.locale() === 'en-US'
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
              'TopNav__language-button--selected': Language.locale() === 'fr'
            })}
            ariaLabel={Language.t('topNav.siteToHaitian')}
            onClick={() => setLocale('fr')}
          >
            <span className="text-md franklin-gothic">HAI</span>
          </Button>
        </div>

        <div className="TopNav__nav-item-action flex justify-center items-center h100 col-12 md:col-4">
          <Button
            className="flex flex-1 justify-center pointer text-md franklin-gothic TopNav__nav-item-text"
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
              alt="open up Adem's Facebook page"
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
              alt="open up Adem's Twitter page"
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
              alt="open up Adem's Instagram page"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default TopNav;
