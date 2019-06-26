import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch, bindActionCreators } from 'redux';
import Routes from 'routes';

import isContentfulPreview from 'utils/isContentfulPreview';
import { initializeApplication } from 'state/actions/applicationActions';

import { RootReducer } from 'types/RootReducer';
import { Status } from 'types/Status';

import 'what-input';
import 'styles/App.scss';

interface StoreProps {
  initializeApplicationStatus: Status;
}

interface DispatchProps {
  actions: {
    initializeApplication: (isPreview: boolean) => void;
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
        <div className="App">
          <Routes location={location} />
        </div>
      );
    }

    if (initializeApplicationStatus === Status.REJECTED) {
      return (
        <div className="App">
          <div className="py2 flex items-center justify-center vh100 bg-color-light-grey">
            <p>error message component goes here</p>
          </div>
        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = (state: RootReducer): StoreProps => ({
  initializeApplicationStatus: state.status.initializeApplication
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  actions: bindActionCreators(
    {
      initializeApplication
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
