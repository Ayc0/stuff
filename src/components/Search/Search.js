import { h, Component } from 'preact';
import styled from 'preact-emotion';

import getValue from '%/utils/getValue';
import { getColor } from '%/utils/colors';

import MagnifyingGlass from './MagnifyingGlass';

const Wrapper = styled.div({
  position: 'relative',
  fontSize: '1.2em',
  height: '1.6em'
});

const MGWrapper = styled.div({
  position: 'absolute',
  left: '0.4em',
  top: '0.15em'
});

const Input = styled.input({
  backgroundColor: 'inherit',
  width: 'calc(100% - 1.5em)',
  borderRadius: '2em',
  paddingLeft: '1.5em',
  height: '100%',
  border: 'none',
  fontSize: '1em',
  outline: 'none',
  boxShadow: `0 0 0 1px ${getColor('text')}`,
  ':focus': {
    boxShadow: `0 0 0 1px ${getColor('primary')}`,
    color: getColor('primary-d1'),
    '::placeholder': {
      color: getColor('primary-d3')
    }
  }
});

class Search extends Component {
  state = { focus: false };

  blur = () => this.setState({ focus: false });
  focus = () => this.setState({ focus: true });

  ref = ref => {
    this.input = ref;
  };

  setFocus = () => this.input.focus();

  input = null;

  render({ onChange, style, ...props }) {
    const wrapperStyle = style.wrapper || {};
    const inputStyle = style.input || {};
    return (
      <Wrapper style={wrapperStyle}>
        <MGWrapper onClick={this.setFocus}>
          <MagnifyingGlass color={this.state.focus ? getColor('primary-d1') : getColor('text')} size="1.2em" />
        </MGWrapper>
        <Input
          {...props}
          style={inputStyle}
          innerRef={this.ref}
          type="text"
          onInput={getValue(onChange)}
          onBlur={this.blur}
          onFocus={this.focus}
        />
      </Wrapper>
    );
  }
}

Search.defaultProps = {
  className: '',
  value: '',
  style: {},
  placeholder: '',
  onChange: () => {}
};

export default Search;
