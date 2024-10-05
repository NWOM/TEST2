import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';

const ThemeToggle = () => {
  const { theme, dispatch } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <button onClick={handleToggleTheme}>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeToggle;