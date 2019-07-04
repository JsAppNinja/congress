import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch, bindActionCreators } from 'redux';
import Routes from 'routes';

import isContentfulPreview from 'utils/isContentfulPreview';
import { initializeApplication } from 'state/actions/applicationActions';
import { showSignup, hideSignup } from 'state/actions/signupActions';
import { setLocale } from 'state/actions/localeActions';

import { RootReducer } from 'types/RootReducer';
import { Status } from 'types/Status';
import { ContentfulPhoto } from 'types/ContentfulPhoto';
import { Locale } from 'types/Locale';

import Signup from 'components/Signup';
import DonorCTA from 'components/DonorCTA';
import TopNav from 'components/TopNav';
import Hero from 'components/Hero';

import { getLocale, Polyglot } from 'constants/Locales';

import 'what-input';
import 'styles/App.scss';

interface StoreProps {
  initializeApplicationStatus: Status;
  signupIsShown: boolean;
  donateUrl: string;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  mainHeader: string;
  mainSubheader: string;
  mainParagraph: string;
  mainPhoto: ContentfulPhoto | null;
  mainSlogan: string[] | null;
  currentLocale: Locale;
}

interface DispatchProps {
  actions: {
    initializeApplication: (isPreview: boolean) => void;
    showSignup: () => void;
    hideSignup: () => void;
    setLocale: (locale: Locale) => void;
  };
}

type Props = StoreProps & DispatchProps & RouteComponentProps;

class App extends Component<Props> {
  constructor(props: Props) {
    super(props);

    const { initializeApplicationStatus, actions } = props;

    if (initializeApplicationStatus === Status.IDLE) {
      const isPreview = isContentfulPreview();
      actions.initializeApplication(isPreview);
    }
  }

  componentDidUpdate(prevProps: Props) {
    const pathname = this.props.location.pathname;
    if (pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { initializeApplicationStatus, location, actions } = this.props;

    const Language = getLocale() as Polyglot;

    if (initializeApplicationStatus === Status.FULFILLED) {
      return (
        <main className="App" role="main">
          <Signup
            hideSignup={this.props.actions.hideSignup}
            show={this.props.signupIsShown}
            header={Language.t('signupForm.signup')}
          />
          <DonorCTA url="" />
          <TopNav
            donateUrl={this.props.donateUrl}
            facebookUrl={this.props.facebookUrl}
            twitterUrl={this.props.twitterUrl}
            instagramUrl={this.props.instagramUrl}
            setLocale={actions.setLocale}
          />
          <Hero
            header={this.props.mainHeader}
            subHeader={this.props.mainSubheader}
            body={this.props.mainParagraph}
            slogan={this.props.mainSlogan}
            photo={this.props.mainPhoto}
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
  signupIsShown: state.signup.signupIsShown,
  currentLocale: state.locale.currentLocale,
  donateUrl: state.content.global.donateUrl,
  facebookUrl: state.content.global.facebookUrl,
  twitterUrl: state.content.global.twitterUrl,
  instagramUrl: state.content.global.instagramUrl,
  mainHeader: state.content.global.mainHeader,
  mainSubheader: state.content.global.mainSubheader,
  mainParagraph: state.content.global.mainParagraph,
  mainPhoto: state.content.global.mainPhoto,
  mainSlogan: state.content.global.mainSlogan
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  actions: bindActionCreators(
    {
      initializeApplication,
      showSignup,
      hideSignup,
      setLocale
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
