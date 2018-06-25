import { h } from 'preact';

const View = ({ name, component, ...props }) => {
  document.title = name;
  return h(component, props);
};

export default View;
