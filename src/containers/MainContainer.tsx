import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';

import { fetchMainContent } from 'state/actions/contentActions';
import ContainerBase from 'lib/ContainerBase';
import MainView from 'views/MainView';

interface DispatchProps {
  actions: {
    fetchMainContent(): void;
  };
}

type Props = DispatchProps & RouteComponentProps;

class MainContainer extends ContainerBase<Props, MainView> {
  view = import('views/MainView');

  beforeModel = this.props.actions.fetchMainContent;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators({ fetchMainContent }, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(MainContainer);
