import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import ContainerBase from 'lib/ContainerBase';
import MainView from 'views/MainView';

type Props = RouteComponentProps;

class MainContainer extends ContainerBase<Props, MainView> {
  view = import('views/MainView');
}

export default connect(
  null,
  null
)(MainContainer);
