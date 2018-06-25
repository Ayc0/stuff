import { h, Component } from 'preact';
import styled from 'preact-emotion';
import groupBy from 'lodash/groupBy';
import flatten from 'lodash/flatten';
import uniq from 'lodash/uniq';

import Search from '%/components/Search';
import Row from '%/components/Row';
import Tag from '%/components/Tag';
import projects, { search } from '%/utils/projects';

import Category from './Category';

const TagList = styled(Row)({ padding: '.6em 0 .3em 0', marginBottom: '2em', maxHeight: '3.2em', overflow: 'auto' });

const getKeywordsFromProjects = projects => uniq(flatten(projects.map(project => project.keywords))).sort();

class FavoriteProjects extends Component {
  state = { term: '', selectedTags: [] };
  _projects = projects;
  projects = projects;
  keywords = getKeywordsFromProjects(projects);

  onChange = term => this.setState({ term });

  onToggle = keyword =>
    this.setState(({ selectedTags }) => {
      if (!selectedTags.includes(keyword)) {
        return { selectedTags: [...selectedTags, keyword] };
      }
      return { selectedTags: selectedTags.filter(tag => tag !== keyword) };
    });

  componentWillUpdate(nextProps, nextState) {
    const termHasChanged = this.state.term !== nextState.term;
    const selectedTagsHaveChanged = this.state.selectedTags.length !== nextState.selectedTags.length;

    if (termHasChanged) {
      this._projects = search(nextState.term);
    }

    if (termHasChanged || selectedTagsHaveChanged) {
      if (nextState.selectedTags.length) {
        this.projects = this._projects.filter(project =>
          nextState.selectedTags.every(tag => project.keywords.includes(tag))
        );
      }
      else {
        this.projects = this._projects;
      }
      this.keywords = getKeywordsFromProjects(this.projects);
      nextState.selectedTags = nextState.selectedTags.filter(tag => this.keywords.includes(tag));
    }
  }

  render({}, { term, selectedTags }) {
    const categories = groupBy(this.projects, 'language');
    return (
      <div>
        <Search
          placeholder="Search library"
          value={term}
          onChange={this.onChange}
          style={{ wrapper: { maxWidth: '15em' } }}
        />
        <TagList>
          {this.keywords.map(keyword => (
            <Tag onToggle={this.onToggle} active={selectedTags.includes(keyword)}>
              {keyword}
            </Tag>
          ))}
        </TagList>
        <Row column>
          {Object.entries(categories).map(([categoryName, categoryProjects]) => (
            <Category name={categoryName} projects={categoryProjects} />
          ))}
        </Row>
      </div>
    );
  }
}

export default FavoriteProjects;
