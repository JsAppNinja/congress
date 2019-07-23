import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch, bindActionCreators } from 'redux';
import Routes from 'routes';
import cx from 'classnames';

import isContentfulPreview from 'utils/isContentfulPreview';
import isMobile from 'utils/isMobile';
import { initializeApplication } from 'state/actions/applicationActions';
import { showFullHeader, hideFullHeader } from 'state/actions/headerActions';
import { showMobileMenu, hideMobileMenu } from 'state/actions/menuActions';
import {
  showMobileSubNav,
  hideMobileSubNav
} from 'state/actions/subnavActions';
import { setLocale } from 'state/actions/localeActions';

import { RootReducer } from 'types/RootReducer';
import { Status } from 'types/Status';
import { ContentfulPhoto } from 'types/ContentfulPhoto';
import { Locale } from 'types/Locale';
import { Section } from 'types/Section';
import { Address } from 'types/Address';

import Signup from 'components/Signup';
import Header from 'components/Header';
import Hero from 'components/Hero';
import SubNav from 'components/SubNav';
import ContentfulSection from 'components/ContentfulSection';
import Footer from 'components/Footer';
import SiteTitle from 'components/SiteTitle';
import TopNav from 'components/TopNav';

import { getLocale, Polyglot } from 'constants/Locales';

import 'what-input';
import 'styles/App.scss';

interface StoreProps {
  initializeApplicationStatus: Status;
  fullHeaderIsShown: boolean;
  donorCTA: string;
  donateUrl: string;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  radioUrl: string;
  shopUrl: string;
  mediumUrl: string;
  mainHeader: string;
  mainSubheader: string;
  mainParagraph: string;
  mainPhoto: ContentfulPhoto | null;
  mainSlogan: string[] | null;
  currentLocale: Locale;
  sections: Section[] | null;
  aboutTheSite: string;
  address: Address | null;
  designKitURL: string;
  contactEmailAddress: string;
  pressEmailAddress: string;
  mobileMenuIsShown: boolean;
  joinUsUrl: string;
  volunteerUrl: string;
  hostHousePartyUrl: string;
  mobileSubnavIsShown: boolean;
}

interface DispatchProps {
  actions: {
    initializeApplication: (isPreview: boolean) => void;
    hideFullHeader: () => void;
    setLocale: (locale: Locale) => void;
    showFullHeader: () => void;
    showMobileMenu: () => void;
    hideMobileMenu: () => void;
    showMobileSubNav: () => void;
    hideMobileSubNav: () => void;
  };
}

type Props = StoreProps & DispatchProps & RouteComponentProps;

interface State {
  deviceIsMobile: boolean;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const { initializeApplicationStatus, actions } = props;

    if (initializeApplicationStatus === Status.IDLE) {
      const isPreview = isContentfulPreview();
      actions.initializeApplication(isPreview);
    }

    this.state = {
      deviceIsMobile: isMobile()
    };
  }

  componentDidUpdate(prevProps: Props) {
    const pathname = this.props.location.pathname;
    if (pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

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
    const { initializeApplicationStatus, location, actions } = this.props;

    const Language = getLocale() as Polyglot;

    if (initializeApplicationStatus === Status.FULFILLED) {
      return (
        <main className="App" role="main">
          <div
            className={cx({
              vh100: this.props.fullHeaderIsShown && this.state.deviceIsMobile
            })}
          >
            <Header
              showMobileMenu={this.props.actions.showMobileMenu}
              hideMobileMenu={this.props.actions.hideMobileMenu}
              mobileMenuIsShown={this.props.mobileMenuIsShown}
              hideSignup={this.props.actions.hideFullHeader}
              signupHeader={Language.t('signupForm.signup')}
              backgroundColor="green"
              showSignupCloseIcon={true}
              donorCTA={this.props.donorCTA}
              donateUrl={this.props.donateUrl}
              facebookUrl={this.props.facebookUrl}
              twitterUrl={this.props.twitterUrl}
              instagramUrl={this.props.instagramUrl}
              setLocale={actions.setLocale}
              showSignupAction={actions.showFullHeader}
              fullHeaderIsShown={this.props.fullHeaderIsShown}
              showFullHeaderAction={actions.showFullHeader}
              shopUrl={this.props.shopUrl}
              radioUrl={this.props.radioUrl}
              joinUsUrl={this.props.joinUsUrl}
              volunteerUrl={this.props.volunteerUrl}
              hostHousePartyUrl={this.props.hostHousePartyUrl}
              sections={this.props.sections}
              showMobileSubNav={actions.showMobileSubNav}
              hideMobileSubNav={actions.hideMobileSubNav}
              mobileSubnavIsShown={this.props.mobileSubnavIsShown}
            />
          </div>
          {this.props.mobileMenuIsShown && (
            <div
              className={cx('TopNav__mobile-container z3 col-12', {
                hidden: !this.props.mobileMenuIsShown
              })}
            >
              <TopNav
                donateUrl={this.props.donateUrl}
                facebookUrl={this.props.facebookUrl}
                twitterUrl={this.props.twitterUrl}
                instagramUrl={this.props.instagramUrl}
                setLocale={actions.setLocale}
                showFullHeader={actions.showFullHeader}
                showMobileMenu={actions.showMobileMenu}
                hideMobileMenu={actions.hideMobileMenu}
                mobileMenuIsShown={this.props.mobileMenuIsShown}
                shopUrl={this.props.shopUrl}
                radioUrl={this.props.radioUrl}
                joinUsUrl={this.props.joinUsUrl}
                volunteerUrl={this.props.volunteerUrl}
                hostHousePartyUrl={this.props.hostHousePartyUrl}
                fullHeaderIsShown={this.props.fullHeaderIsShown}
                sections={this.props.sections}
                hideMobileSubNav={actions.hideMobileSubNav}
                showMobileSubNav={actions.showMobileSubNav}
                mobileSubnavIsShown={this.props.mobileSubnavIsShown}
              />
            </div>
          )}
          <div>
            {this.state.deviceIsMobile && (
              <SiteTitle fullHeaderIsShown={this.props.fullHeaderIsShown} />
            )}
            <Hero
              header={this.props.mainHeader}
              subHeader={this.props.mainSubheader}
              body={this.props.mainParagraph}
              slogan={this.props.mainSlogan}
              photo={this.props.mainPhoto}
            />
            {!this.state.deviceIsMobile && (
              <SiteTitle fullHeaderIsShown={this.props.fullHeaderIsShown} />
            )}
            {!this.state.deviceIsMobile && (
              <SubNav
                shopUrl={this.props.shopUrl}
                radioUrl={this.props.radioUrl}
                joinUsUrl={this.props.joinUsUrl}
                volunteerUrl={this.props.volunteerUrl}
                hostHousePartyUrl={this.props.hostHousePartyUrl}
                fullHeaderIsShown={this.props.fullHeaderIsShown}
                sections={this.props.sections}
                hideMobileSubNav={actions.hideMobileSubNav}
                mobileSubnavIsShown={this.props.mobileSubnavIsShown}
              />
            )}
            {this.props.sections && (
              <div className="flex flex-col items-end justify-end mt2 md:mt0">
                {this.props.sections.map((section: Section) => {
                  return (
                    <ContentfulSection key={section.title} section={section} />
                  );
                })}
              </div>
            )}
          </div>
          <Footer
            sections={this.props.sections}
            aboutTheSite={this.props.aboutTheSite}
            address={this.props.address}
            contactEmailAddress={this.props.contactEmailAddress}
            pressEmailAddress={this.props.pressEmailAddress}
            designKitURL={this.props.designKitURL}
            donateUrl={this.props.donateUrl}
            facebookUrl={this.props.facebookUrl}
            twitterUrl={this.props.twitterUrl}
            instagramUrl={this.props.instagramUrl}
            mediumUrl={this.props.mediumUrl}
            radioUrl={this.props.radioUrl}
            shopUrl={this.props.shopUrl}
          />
          <Signup
            hideSignup={this.props.actions.hideFullHeader}
            header={Language.t('signupForm.joinOurTeam')}
            backgroundColor="yellow"
            showCloseIcon={false}
          />
          <Routes location={location} />
        </main>
      );
    }

    if (initializeApplicationStatus === Status.REJECTED) {
      return (
        <main className="App">
          <div className="py2 flex items-center justify-center vh100 bg-color-light-grey">
            <p>{Language.t('generalError')}</p>
          </div>
        </main>
      );
    }

    return null;
  }
}

const mapStateToProps = (state: RootReducer): StoreProps => ({
  initializeApplicationStatus: state.status.initializeApplication,
  fullHeaderIsShown: state.header.fullHeaderIsShown,
  currentLocale: state.locale.currentLocale,
  donorCTA: state.content.global.donorCTA,
  donateUrl: state.content.global.donateUrl,
  facebookUrl: state.content.global.facebookUrl,
  twitterUrl: state.content.global.twitterUrl,
  mediumUrl: state.content.global.mediumUrl,
  instagramUrl: state.content.global.instagramUrl,
  radioUrl: state.content.global.radioUrl,
  shopUrl: state.content.global.shopUrl,
  mainHeader: state.content.global.mainHeader,
  mainSubheader: state.content.global.mainSubheader,
  mainParagraph: state.content.global.mainParagraph,
  mainPhoto: state.content.global.mainPhoto,
  mainSlogan: state.content.global.mainSlogan,
  sections: state.content.global.sections,
  aboutTheSite: state.content.global.aboutTheSite,
  address: state.content.global.address,
  designKitURL: state.content.global.designKitURL,
  contactEmailAddress: state.content.global.contactEmailAddress,
  pressEmailAddress: state.content.global.pressEmailAddress,
  mobileMenuIsShown: state.menu.mobileMenuIsShown,
  joinUsUrl: state.content.global.joinUsUrl,
  volunteerUrl: state.content.global.volunteerUrl,
  hostHousePartyUrl: state.content.global.hostHousePartyUrl,
  mobileSubnavIsShown: state.subnav.mobileSubnavIsShown
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  actions: bindActionCreators(
    {
      initializeApplication,
      setLocale,
      showFullHeader,
      hideFullHeader,
      showMobileMenu,
      hideMobileMenu,
      showMobileSubNav,
      hideMobileSubNav
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
