import { h } from 'preact';
import styled from 'preact-emotion';

import '@libshin/lazy-image/build/lazy-image.css';

import Routes, { Header } from './views';
import './App.scss';

const Container = styled.div({
  margin: '1em auto 2em auto',
  paddingTop: '4em',
  maxWidth: '900px',
  width: '95%'
});

const App = () => (
  <Container>
    <Header />
    <Routes />
  </Container>
);

export default App;
