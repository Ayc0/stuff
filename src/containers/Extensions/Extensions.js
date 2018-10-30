import { h, Component } from 'preact';
import lazyScan from '@libshin/lazy-image';

import Search from '%/components/Search';
import Row from '%/components/Row';

import list, { search } from '%/utils/extensions';

import Extension from './Extension';

class Extensions extends Component {
  state = { term: '' };

  extensions = list;
  mounted = false;

  onChange = term => this.setState({ term });

  componentDidMount() {
    this.mounted = true;
    lazyScan(false, { top: 250, bottom: 250, now: true });
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.term !== this.state.term) {
      this.extensions = search(nextState.term);
    }
  }

  render({}, { term }) {
    return (
      <div>
        <Search placeholder="Search extension" value={term} onChange={this.onChange} />
        <Row column>{this.extensions.map(extension => <Extension extension={extension} lazy={!this.mounted} />)}</Row>
      </div>
    );
  }
}

export default Extensions;
