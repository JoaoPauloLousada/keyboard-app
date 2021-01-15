import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import Keyboard from './components/keyboard';

function App() {
  return (
    <>
      <Wrapper className="App">
        <Keyboard />
      </Wrapper>
      <GlobalStyle/>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background:#222;
  margin: 0;
  padding: 0;
`
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing:border-box
  }
  body {
    margin: 0;
    padding: 0;
  }
`