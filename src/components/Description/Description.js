import { h, Component } from 'preact';

import Collapse from '%/components/Collapse';

class Description extends Component {
  state = { open: false };

  toggleOpen = () => this.setState(({ open }) => ({ open: !open }));

  render({ children, style }, { open }) {
    return (
      <Collapse
        open={open}
        onClick={this.toggleOpen}
        minHeight="1.2em"
        clickable
        style={{ textOverflow: 'ellipsis', whiteSpace: open ? '' : 'nowrap', ...style }}
      >
        {children}
      </Collapse>
    );
  }
}

Description.defaultProps = {
  style: { maxWidth: '30em' }
};

export default Description;
