import { createContext, useReducer, useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const initialState = { theme: 'light' };

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, initialState);
  const [storedTheme] = useLocalStorage('theme', theme);

  useEffect(() => {
    dispatch({ type: 'TOGGLE_THEME' });
  }, [storedTheme]);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };