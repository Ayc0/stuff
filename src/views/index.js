import { h } from 'preact';
import Router from 'preact-router';

import FavoriteProjects from './FavoriteProjects';

const Routes = () => (
  <Router>
    <FavoriteProjects default />
  </Router>
);

export default Routes;
