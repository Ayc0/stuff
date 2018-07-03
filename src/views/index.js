import { h } from 'preact';
import Router from 'preact-router';
import { Link } from 'preact-router/match';
import { css } from 'emotion';

import Row from '%/components/Row';
import { getColor } from '%/utils/colors';

import FavoriteProjects from './FavoriteProjects';

const cssRow = css({
  background: `linear-gradient(180deg, ${getColor('background-d3')}, rgba(0,0,0,0))`,
  width: '100%',
  position: 'fixed',
  zIndex: 1,
  top: 0,
  left: 0
});
const cssA = css({
  fontSize: '1.2em',
  padding: '1.2em 1em',
  ':hover': {
    backgroundColor: getColor('background-d1')
  }
});

const A = props => (
  <Link className="link" css={cssA} activeClassName="active" href={props.href}>
    {props.children}
  </Link>
);

export const Header = () => (
  <Row middle css={cssRow}>
    <Row right style={{ maxWidth: '900px', width: '100%' }}>
      <A href="/projects">Favorite Projects</A>
    </Row>
  </Row>
);

const Routes = () => (
  <Router>
    <FavoriteProjects default />
  </Router>
);

export default Routes;
