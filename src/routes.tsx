import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Location } from 'history';

import SiteRoutes from 'constants/Routes';

interface RoutesProps {
  location: Location;
}

const Routes: React.FC<RoutesProps> = ({ location }) => {
  return <Switch location={location}></Switch>;
};

export default Routes;
