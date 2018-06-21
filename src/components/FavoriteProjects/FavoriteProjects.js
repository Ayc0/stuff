import { h, Component } from 'preact';
import groupBy from 'lodash/groupBy';
import flatten from 'lodash/flatten';
import uniq from 'lodash/uniq';

import Search from '%/components/Search';
import Row from '%/components/Row';
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
        <Search
          placeholder="Search library"
          value={term}
          onChange={this.onChange}
          style={{ wrapper: { maxWidth: '15em' } }}
        />
        <Row style={{ padding: '.6em 0 .3em 0', marginBottom: '2em', maxHeight: '3.2em', overflow: 'auto' }}>
          {keywords.map(keyword => <Tag>{keyword}</Tag>)}
        </Row>
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
