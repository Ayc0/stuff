import styled from 'preact-emotion';

// source https://codepen.io/artemdemo/pen/HzDLn

const MagnifyingGlass = styled.div`
  font-size: ${props => props.size};
  display: inline-block;
  width: 0.4em;
  height: 0.4em;
  border: 0.1em solid ${props => props.color};
  position: relative;
  border-radius: 0.35em;
  &::before {
    content: '';
    background: ${props => props.color};
    display: inline-block;
    position: absolute;
    right: -0.25em;
    bottom: -0.1em;
    border-width: 0;
    width: 0.35em;
    height: 0.1em;
    transform: rotate(45deg);
  }
`;

MagnifyingGlass.defaultProps = {
  size: '1em',
  color: 'black'
};

export default MagnifyingGlass;
