import { h, Component } from 'preact';

import { getColor } from '%/utils/colors';
import { onClick } from '%/utils/clickable';
import Row from '%/components/Row';
import Collapse from '%/components/Collapse';

import Caret from './Caret';

import Project from './Project';

class Category extends Component {
  state = { open: true };

  toggleOpen = () => this.setState(({ open }) => ({ open: !open }));

  render({ name, projects }, { open }) {
    return (
      <div fluid>
        <Row tabIndex="0" {...onClick(this.toggleOpen)}>
          <Caret size=".5em" color={getColor('text')} style={{ marginRight: '1em' }} open={open} /> <h2>{name}</h2>
        </Row>
        <Collapse open={open}>
          {projects.map(project => (
            <Project key={project.name} project={project} />
          ))}
        </Collapse>
      </div>
    );
  }
}

export default Category;
