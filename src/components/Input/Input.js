import { h } from 'preact';

const getValue = fn => event => fn(event.target.value, event);

const Input = ({ onChange, type, ...props }) => <input type={type} onInput={getValue(onChange)} {...props} />;

Input.defaultProps = {
  type: 'text',
  className: '',
  value: '',
  style: {},
  onChange: () => {}
};

export default Input;
