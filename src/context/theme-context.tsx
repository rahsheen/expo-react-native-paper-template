import React, { useState } from 'react';
import { DefaultTheme, DarkTheme } from '../core/theme';

interface darkThemeContext {
  dark: boolean;
  theme?: any;
  toggleDark?: () => void;
}

const ThemeContext = React.createContext<darkThemeContext>({ dark: false });
const ThemeConsumer = ThemeContext.Consumer;

const ThemeProvider = props => {
  const [dark, setDark] = useState(false);

  const toggleDark = () => setDark(wasDark => !wasDark);

  const themeContextValue = React.useMemo(
    () => ({
      dark,
      toggleDark,
      theme: dark ? DarkTheme : DefaultTheme,
    }),
    [dark]
  );

  return <ThemeContext.Provider value={themeContextValue} {...props} />;
};

const useDarkTheme = () => React.useContext(ThemeContext);

export { ThemeProvider, useDarkTheme, ThemeConsumer };
