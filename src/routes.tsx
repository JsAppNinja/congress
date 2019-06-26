import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Location } from 'history';

import SiteRoutes from 'constants/Routes';
import MainContainer from 'containers/MainContainer';

interface RoutesProps {
  location: Location;
}

const Routes: React.FC<RoutesProps> = ({ location }) => {
  return (
    <Switch location={location}>
      <Route path={SiteRoutes.MAIN} exact={true} component={MainContainer} />
    </Switch>
  );
};

export default Routes;
