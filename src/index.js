export { default } from './App';

if (typeof window !== 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    window.defaultPath = '/stuff/';
  }
  else {
    window.defaultPath = '/';
  }
}
