import { h, Component } from 'preact';
import groupBy from 'lodash/groupBy';

import Input from '%/components/Input';
import projects, { search } from '%/utils/projects';

class FavoriteProjects extends Component {
  state = { term: '' };
  projects = projects;

  onChange = term => this.setState({ term });

  componentWillUpdate(nextProps, nextState) {
    if (this.state.term !== nextState.term) {
      this.projects = search(nextState.term);
    }
  }

  render({}, { term }) {
    const categories = groupBy(this.projects, 'language');
    return (
      <f>
        <Input value={term} onChange={this.onChange} />
        <table>
          {Object.entries(categories).map(([categoryName, categoryProjects]) => [
            <thead key={`head_${categoryName}`}>
              <th>{categoryName}</th>
            </thead>,
            <tbody key={`body_${categoryName}`}>
              {categoryProjects.map(project => (
                <tr key={project.name}>
                  <td>{project.name}</td>
                  <td>{project.description}</td>
                </tr>
              ))}
            </tbody>
          ])}
        </table>
      </f>
    );
  }
}

export default FavoriteProjects;
