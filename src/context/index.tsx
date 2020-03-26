import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from '../core/theme';
import { AuthProvider } from './auth-context';
import { UserProvider } from './user-context';

function AppProviders({ children }) {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </PaperProvider>
  );
}
export default AppProviders;
