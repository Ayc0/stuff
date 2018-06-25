import { h, Component } from 'preact';

import { getColor } from '%/utils/colors';
import Row from '%/components/Row';
import Collapse from '%/components/Collapse';

import Caret from './Caret';

const Project = ({ project }) => (
  <Row key={project.name}>
    <div>{project.name}</div>
    <div>{project.description}</div>
  </Row>
);

class Category extends Component {
  state = { open: true };

  toggleOpen = () => this.setState(({ open }) => ({ open: !open }));

  render({ name, projects }, { open }) {
    return (
      <div>
        <Row clickable as="th" onClick={this.toggleOpen}>
          <Caret size=".4em" color={getColor('text')} style={{ marginRight: '1em' }} open={open} /> {name}
        </Row>
        <Collapse open={open}>{projects.map(project => <Project project={project} />)}</Collapse>
      </div>
    );
  }
}

export default Category;
