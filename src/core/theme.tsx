import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

const DefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
};

const DarkTheme = { ...PaperDarkTheme, ...NavigationDarkTheme };

export { DefaultTheme, DarkTheme };
