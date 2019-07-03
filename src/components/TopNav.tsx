import React, { Component } from 'react';
import isMobile from 'utils/isMobile';
import facebook from 'assets/facebook.svg';
import twitter from 'assets/twitter.svg';
import instagram from 'assets/instagram.svg';
import hamburger from 'assets/hamburger.svg';
import closeIcon from 'assets/close.svg';
import { Image, Button } from 'components/base';

interface Props {
  donateUrl: string;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
}

interface State {
  menuIsActive: boolean;
}

class TopNav extends Component<Props, State> {
  state: State = {
    menuIsActive: !isMobile()
  };

  showMenu = () => {
    this.setState({ menuIsActive: true });
  };

  hideMenu = () => {
    this.setState({ menuIsActive: false });
  };

  render() {
    const deviceIsMobile = isMobile();

    if (!this.state.menuIsActive && deviceIsMobile) {
      return (
        <div className="TopNav__container flex TopNav__mobile-bar">
          <div className="flex justify-start items-center col-12 ml1 pt1 pb1">
            <Button
              className="TopNav__language-button m0 p0 pointer"
              ariaLabel="changes site language to English"
            >
              <span className="TopNav__language-selected flex justify-center items-center circle p_25">
                EN
              </span>
            </Button>
            <span className="m_25">/</span>
            <Button
              className="TopNav__language-button m0 p0 pointer"
              ariaLabel="changes site language to Haitian"
            >
              <span>HAI</span>
            </Button>
          </div>
          <div className="TopNav__hamburger-container flex justify-center items-center pl1 pr1 pointer h100">
            <Button onClick={this.showMenu} ariaLabel="opens the menu">
              <Image className="pointer" src={hamburger} alt="menu icon" />
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="TopNav TopNav__container flex flex-col items-center md:flex-row">
        {deviceIsMobile && (
          <div className="flex justify-end items-center col-12 md:col-4 p1">
            <Button
              className="TopNav__language-button m0 p0 mr_25 pointer"
              onClick={this.hideMenu}
              ariaLabel="closes the menu"
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
            className="TopNav__language-button m0 p0 mr_25 pointer"
            ariaLabel="changes site language to English"
          >
            <span className="TopNav__language-selected text-md franklin-gothic flex justify-center items-center circle p_25">
              EN
            </span>
          </Button>
          <span className="text-md franklin-gothic mr_25">/</span>
          <Button
            className="TopNav__language-button m0 p0 mr_25 pointer"
            ariaLabel="changes site language to Haitian"
          >
            <span className="text-md franklin-gothic">HAI</span>
          </Button>
        </div>

        <div className="TopNav__nav-item flex justify-center items-center h100 col-12 md:col-4">
          <Button
            className="flex flex-1 justify-center pointer"
            onClick={f => f}
            ariaLabel="shows the sign up form"
          >
            <span className="text-md franklin-gothic">SIGN UP</span>
          </Button>
        </div>
        <div className="TopNav__nav-item flex justify-center items-center h100 col-12 md:col-4">
          <a
            className="text-md franklin-gothic flex flex-1 justify-center pointer"
            href={this.props.donateUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            DONATE
          </a>
        </div>
        <div className="TopNav__social-media flex justify-center items-center h100 md:m1">
          <a
            className="flex justify-center pointer p1 md:p0"
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
            className="flex justify-center pointer p1 md:p0"
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
            className="flex justify-center pointer p1 md:p0"
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
