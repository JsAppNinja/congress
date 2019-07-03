import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch, bindActionCreators } from 'redux';
import Routes from 'routes';

import isContentfulPreview from 'utils/isContentfulPreview';
import get from 'utils/get';
import { initializeApplication } from 'state/actions/applicationActions';
import { showSignup, hideSignup } from 'state/actions/signupActions';

import { RootReducer } from 'types/RootReducer';
import { Status } from 'types/Status';

import Signup from 'components/Signup';
import DonorCTA from 'components/DonorCTA';
import TopNav from 'components/TopNav';

import 'what-input';
import 'styles/App.scss';

interface StoreProps {
  initializeApplicationStatus: Status;
  signupIsShown: boolean;
  donateUrl: string;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
}

interface DispatchProps {
  actions: {
    initializeApplication: (isPreview: boolean) => void;
    showSignup: () => void;
    hideSignup: () => void;
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
    const { initializeApplicationStatus, location } = this.props;
    if (initializeApplicationStatus === Status.FULFILLED) {
      return (
        <main className="App" role="main">
          <Signup
            hideSignup={this.props.actions.hideSignup}
            show={this.props.signupIsShown}
            header="Sign Up For Our Email List"
          />
          <DonorCTA url="" />
          <TopNav
            donateUrl={this.props.donateUrl}
            facebookUrl={this.props.facebookUrl}
            twitterUrl={this.props.twitterUrl}
            instagramUrl={this.props.instagramUrl}
          />
          <Routes location={location} />
        </main>
      );
    }

    if (initializeApplicationStatus === Status.REJECTED) {
      return (
        <main className="App">
          <div className="py2 flex items-center justify-center vh100 bg-color-light-grey">
            <p>error message component goes here</p>
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
  instagramUrl: get(state, 'content.global.instagramUrl', '')
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  actions: bindActionCreators(
    {
      initializeApplication,
      showSignup,
      hideSignup
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
