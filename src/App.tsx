import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch, bindActionCreators } from 'redux';
import Routes from 'routes';

import isContentfulPreview from 'utils/isContentfulPreview';
import get from 'utils/get';
import { initializeApplication } from 'state/actions/applicationActions';
import { showSignup, hideSignup } from 'state/actions/signupActions';
import { setLocale } from 'state/actions/localeActions';

import { RootReducer } from 'types/RootReducer';
import { Status } from 'types/Status';
import { Locale } from 'types/Locale';

import Signup from 'components/Signup';
import DonorCTA from 'components/DonorCTA';
import TopNav from 'components/TopNav';

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
  donateUrl: get(state, 'content.global.donateUrl', ''),
  facebookUrl: get(state, 'content.global.facebookUrl', ''),
  twitterUrl: get(state, 'content.global.twitterUrl', ''),
  instagramUrl: get(state, 'content.global.instagramUrl', ''),
  currentLocale: get(state, 'locale.currentLocale')
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
