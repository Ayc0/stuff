export { default } from './App';

const g = typeof window !== 'undefined' ? window : global;

if (process.env.NODE_ENV === 'production') {
  g.defaultPath = '/stuff/';
}
else {
  g.defaultPath = '/';
}
