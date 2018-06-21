import { h, Component } from 'preact';
import groupBy from 'lodash/groupBy';
import flatten from 'lodash/flatten';
import uniq from 'lodash/uniq';

import Search from '%/components/Search';
import Tag from '%/components/Tag';
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
    const keywords = uniq(flatten(this.projects.map(project => project.keywords))).sort();
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Search placeholder="Search library" value={term} onChange={this.onChange} />
          <div style={{ display: 'flex', width: '40%', flexWrap: 'wrap', maxHeight: '6.2em', overflow: 'auto' }}>
            {keywords.map(keyword => <Tag>{keyword}</Tag>)}
          </div>
        </div>
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
      </div>
    );
  }
}

export default FavoriteProjects;
