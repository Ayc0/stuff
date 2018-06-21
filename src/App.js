import { h } from 'preact';
import styled from 'preact-emotion';

import Routes from './views';
import './App.css';

const Container = styled.div({
  margin: '2em auto',
  maxWidth: '900px',
  width: '100%'
});

const App = () => (
  <Container>
    <Routes />
  </Container>
);

export default App;
