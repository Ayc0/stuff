import styled from 'preact-emotion';

const Caret = styled.div`
  font-size: ${props => props.size};
  width: 0;
  height: 0;
  border-top: 1em solid transparent;
  border-bottom: 1em solid transparent;
  border-left: 1em solid ${props => props.color};
  transition: transform 0.1s linear;
  transform-origin: 0.3em center;
  transform: rotate(${props => (props.open ? '90deg' : '0')});
`;

Caret.defaultProps = {
  size: '1em',
  color: 'inherit',
  open: false
};

export default Caret;
