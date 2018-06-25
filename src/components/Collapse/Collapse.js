import { h, Component } from 'preact';
import styled from 'preact-emotion';

const timing = 300;

const Wrapper = styled.div({
  overflow: 'hidden',
  transition: `max-height ${timing}ms`
});

class Collapse extends Component {
  div = null;
  timeoutID = null;

  bindRef = ref => {
    this.div = ref;
  };

  height = () => `${this.div.scrollHeight + 20}px`;

  open = () => {
    this.div.style.transitionTimingFunction = 'ease-in';
    this.div.style.maxHeight = '0px';
    setTimeout(() => {
      this.div.style.maxHeight = this.height();
      this.timeoutID = setTimeout(() => {
        this.div.style.maxHeight = '';
        this.timeoutID = null;
      }, timing);
    }, 0);
  };

  close = () => {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
      this.timeoutID = null;
    }
    this.div.style.transitionTimingFunction = 'ease-out';
    this.div.style.maxHeight = this.height();
    setTimeout(() => {
      this.div.style.maxHeight = '0px';
    }, 0);
  };

  componentDidMount = () => {
    this.div.style.maxHeight = this.props.open ? this.height() : '0';
  };

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        this.open();
      }
      if (!this.props.open) {
        this.close();
      }
    }
  }

  render({ children }) {
    return <Wrapper innerRef={this.bindRef}>{children}</Wrapper>;
  }
}

export default Collapse;
