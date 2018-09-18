import { h, Component } from 'preact';
import styled from 'preact-emotion';

const Div = ({ className, style, clickable, tabIndex, fluid, children, onClick, onKeyPress, $ref, ...props }) => (
  <div ref={$ref} {...{ className, style, clickable, tabIndex, fluid, children, onClick, onKeyPress }} />
);

const Wrapper = styled(Div)(({ timing }) => ({
  overflow: 'hidden',
  transition: `max-height ${timing}ms`
}));

class Collapse extends Component {
  div = null;
  timeoutID = null;

  bindRef = ref => {
    this.div = ref;
  };

  height = () => `${this.div.scrollHeight}px`;

  open = () => {
    this.div.style.transitionTimingFunction = 'ease-in';
    this.div.style.maxHeight = this.props.minHeight;
    setTimeout(() => {
      this.div.style.maxHeight = this.height();
      this.timeoutID = setTimeout(() => {
        this.div.style.maxHeight = 'none';
        this.timeoutID = null;

        // force update because of weird issue
        this.div.style.display = 'none';
        this.div.offsetHeight;
        this.div.style.display = 'block';
      }, this.props.timing);
    }, 10);
  };

  close = () => {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
      this.timeoutID = null;
    }
    this.div.style.transitionTimingFunction = 'ease-out';
    this.div.style.maxHeight = this.height();
    setTimeout(() => {
      this.div.style.maxHeight = this.props.minHeight;
    }, 10);
  };

  componentDidMount = () => {
    if (!this.props.open) {
      this.div.style.maxHeight = this.props.minHeight;
    }
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

  render({ children, timing, open, ...props }) {
    return (
      <Wrapper {...props} timing={timing} $ref={this.bindRef}>
        {children}
      </Wrapper>
    );
  }
}

Collapse.defaultProps = {
  timing: 100,
  minHeight: '0px'
};

export default Collapse;
