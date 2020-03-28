import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { AuthProvider } from './auth-context';
import { ThemeConsumer, ThemeProvider } from './theme-context';
import { UserProvider } from './user-context';

function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <ThemeConsumer>
        {({ theme }) => (
          <PaperProvider theme={theme}>
            <AuthProvider>
              <UserProvider>{children}</UserProvider>
            </AuthProvider>
          </PaperProvider>
        )}
      </ThemeConsumer>
    </ThemeProvider>
  );
}
export default AppProviders;
