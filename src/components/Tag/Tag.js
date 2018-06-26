import { h } from 'preact';
import styled from 'preact-emotion';

import getValue from '%/utils/getValue';
import { getColor } from '%/utils/colors';

const Wrapper = styled.div(
  {
    border: 'none',
    borderRadius: '1em',
    margin: '3px 5px',
    fontWeight: 600,
    whiteSpace: 'nowrap'
  },
  ({ active, color, noOutline }) => ({
    backgroundColor: active ? getColor(color) : undefined,
    boxShadow: active || noOutline ? undefined : `0 0 0 2px ${getColor(color)}`,
    padding: noOutline ? 0 : '.25em .5em',
    color: active ? 'white' : getColor(color)
  })
);

const Checkbox = styled.input({
  display: 'none'
});

let counter = 0;

const isString = string => typeof string === 'string' || string instanceof String;

const childrenIsString = children =>
  isString(children) || (Array.isArray(children) && children.length === 1 && isString(children[0]));

const Tag = ({ active, onToggle, color, ...props }) => {
  const id = `tag__${counter++}`;

  const name = props.name || (childrenIsString(props.children) && props.children + '');
  const children = props.children || [props.name];

  const clickable = onToggle !== undefined;

  return (
    <Wrapper active={active} noOutline={!clickable} color={color}>
      <Checkbox id={id} type="checkbox" checked={active} value={name} onChange={getValue(onToggle || (() => {}))} />
      <label htmlFor={id} clickable={clickable}>
        {children}
      </label>
    </Wrapper>
  );
};

Tag.defaultProps = {
  color: 'primary',
  active: false,
  onToggle: undefined,
  name: '',
  children: null
};

export default Tag;
