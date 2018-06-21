import styled from 'preact-emotion';

const Row = styled.div(props => {
  let justifyContent;
  let alignItems;

  if (props.right) {
    justifyContent = 'flex-end';
  }
  else if (props.middle) {
    justifyContent = 'center';
  }
  else {
    justifyContent = 'flex-start';
  }

  if (props.top) {
    alignItems = 'flex-start';
  }
  else if (props.bottom) {
    alignItems = 'flex-end';
  }
  else {
    alignItems = 'center';
  }

  if (props.column) {
    [justifyContent, alignItems] = [alignItems, justifyContent];
  }

  if (props.spaceBetween) {
    justifyContent = 'space-between';
  }

  return {
    display: 'flex',
    flexDirection: props.column ? 'column' : 'row',
    flexWrap: props.wrap && 'wrap',
    justifyContent,
    alignItems,
    ...props.style
  };
});

Row.defaultProps = {
  column: false,
  left: true,
  center: undefined,
  right: undefined,
  spaceBetween: undefined,
  top: undefined,
  bottom: undefined,
  middle: undefined,
  wrap: undefined,
  style: {}
};

export default Row;
