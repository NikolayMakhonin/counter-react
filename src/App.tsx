import React from 'react'
import logo from './logo.svg'
import {css} from 'reshadow'
import styled from 'reshadow/macro'
import styles from './App.module.css'

function App() {
  console.log('styles', styles, css`app { background: blue; }`)
  console.log('styles reshadow', css`app { background: blue; }`)
  return styled(styles)(
    <app as="div">
      <header>
        <logo as="img" src={logo} alt="logo" />
        <p>
          Edit <button>src/App.tsx</button> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </app>
  );
}

export default App
