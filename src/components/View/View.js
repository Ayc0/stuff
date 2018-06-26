import { h } from 'preact';

const View = ({ name, component, ...props }) => {
  if (typeof window !== 'undefined') {
    document.title = name;
  }
  return h(component, props);
};

export default View;
