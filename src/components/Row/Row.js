import { h } from 'preact';
import { css } from 'emotion';

const Row = ({ right, middle, left, center, top, bottom, column, spaceBetween, wrap, as, className, ...props }) => {
  let justifyContent;
  let alignItems;

  if (right) {
    justifyContent = 'flex-end';
  }
  else if (middle) {
    justifyContent = 'center';
  }
  else {
    justifyContent = 'flex-start';
  }

  if (top) {
    alignItems = 'flex-start';
  }
  else if (bottom) {
    alignItems = 'flex-end';
  }
  else {
    alignItems = 'center';
  }

  if (column) {
    [justifyContent, alignItems] = [alignItems, justifyContent];
  }

  if (spaceBetween) {
    justifyContent = 'space-between';
  }

  const style = {
    display: 'flex',
    flexDirection: column ? 'column' : 'row',
    flexWrap: wrap && 'wrap',
    justifyContent,
    alignItems
  };

  const classNames = [...(className || '').split(' '), css(style)];

  return h(as, { ...props, className: classNames.join(' ') });
};

Row.defaultProps = {
  as: 'div',
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
