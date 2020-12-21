import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import App from "./App";
import './App.css';

import Brightness3Icon from '@material-ui/icons/Brightness3';

// The function that toggles between themes
function Main() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="nav">
          <h1 className="navHeading">Where in the world?</h1>
          <button onClick={toggleTheme} className="navBtn"><Brightness3Icon/><span className="span">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span></button>
        </div>
        <App />
      </>
    </ThemeProvider>
  );
}

export default Main;