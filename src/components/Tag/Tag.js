import { h } from 'preact';
import styled from 'preact-emotion';

import getValue from '%/utils/getValue';
import { getColor } from '%/utils/colors';

const Wrapper = styled.div(
  {
    border: 'none',
    borderRadius: '1em',
    margin: '3px',
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

const Tag = ({ active, children, onToggle, color, ...props }) => {
  const id = `tag__${counter++}`;
  return (
    <Wrapper active={active} color={color}>
      <Checkbox id={id} type="checkbox" checked={active} onChange={getValue(onToggle)} />
      <Label htmlFor={id}>{children}</Label>
    </Wrapper>
  );
};

Tag.defaultProps = {
  color: 'primary',
  active: false,
  onToggle: () => {},
  children: null
};

export default Tag;
