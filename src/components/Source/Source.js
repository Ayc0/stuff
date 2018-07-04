import { h } from 'preact';

import website from './website.png';
import github from './github.png';

const Source = ({ type, link, size, style, imageStyle }) => {
  let image;
  switch (type) {
  case 'website':
    image = website;
    break;
  case 'github':
    image = github;
    break;
  case 'npm':
    image = 'https://static.npmjs.com/f1786e9b7cba9753ca7b9c40e8b98f67.png';
    break;
  case 'pypi':
    image = 'https://pypi.org/static/images/logo-small.6eef541e.svg';
    break;
  case 'marketplace':
    image = 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Visual_Studio_Code_1.18_icon.svg';
    break;
  default:
    image = null;
    break;
  }
  return (
    <a href={link} style={{ fontSize: size, ...style }}>
      <img src={image} alt={link} style={{ width: '1em', height: '1em', ...imageStyle }} />
    </a>
  );
};

Source.defaultProps = {
  style: {},
  imageStyle: {},
  size: '2em'
};

export default Source;
