import { h } from 'preact';
import styled from 'preact-emotion';

import getValue from '%/utils/getValue';
import { getColor } from '%/utils/colors';

const Wrapper = styled.div(
  {
    border: 'none',
    borderRadius: '1em',
    margin: '3px 5px',
    padding: '.25em .5em',
    fontWeight: 600
  },
  ({ active, color }) => ({
    backgroundColor: active ? getColor(color) : undefined,
    boxShadow: active ? undefined : `0 0 0 2px ${getColor(color)}`,
    color: active ? 'white' : getColor(color)
  })
);

const Checkbox = styled.input({
  display: 'none'
});

const Label = styled.label({
  cursor: 'pointer'
});

let counter = 0;

const isString = string => typeof string === 'string' || string instanceof String;

const childrenIsString = children =>
  isString(children) || (Array.isArray(children) && children.length === 1 && isString(children[0]));

const Tag = ({ active, onToggle, color, ...props }) => {
  const id = `tag__${counter++}`;

  const name = props.name || (childrenIsString(props.children) && props.children + '');
  const children = props.children || [props.name];

  return (
    <Wrapper active={active} color={color}>
      <Checkbox id={id} type="checkbox" checked={active} value={name} onChange={getValue(onToggle)} />
      <Label htmlFor={id}>{children}</Label>
    </Wrapper>
  );
};

Tag.defaultProps = {
  color: 'primary',
  active: false,
  onToggle: () => {},
  name: '',
  children: null
};

export default Tag;
