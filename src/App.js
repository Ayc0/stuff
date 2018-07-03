import { h } from 'preact';
import styled from 'preact-emotion';

import Routes, { Header } from './views';
import './App.css';

const Container = styled.div({
  margin: '1em auto 2em auto',
  paddingTop: '4em',
  maxWidth: '900px',
  width: '100%'
});

const App = () => (
  <Container>
    <Header />
    <Routes />
  </Container>
);

export default App;
