import React from 'react';
import { ThemeProvider } from './themeContext.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import './styles.css';

function App() {

  return (
    <ThemeProvider>
      <div className="app">
        <h1>Theme Switcher</h1>
        <ThemeToggle />
        <p>This is some sample text.</p>
      </div>
    </ThemeProvider>
  );
}

export default App;