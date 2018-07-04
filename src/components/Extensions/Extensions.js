import { h, Component } from 'preact';

import Search from '%/components/Search';
import Row from '%/components/Row';

import list, { search } from '%/utils/extensions';

import Extension from './Extension';

class Extensions extends Component {
  state = { term: '' };

  extensions = list;

  onChange = term => this.setState({ term });

  componentWillUpdate(nextProps, nextState) {
    if (nextState.term !== this.state.term) {
      this.extensions = search(nextState.term);
    }
  }

  render({}, { term }) {
    return (
      <div>
        <Search placeholder="Search extension" value={term} onChange={this.onChange} />
        <Row column>{this.extensions.map(extension => <Extension extension={extension} />)}</Row>
      </div>
    );
  }
}

export default Extensions;
