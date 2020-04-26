import React from 'react';
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './src';
import AppProviders from './src/context';
import { useUser } from './src/context/user-context';

// const AuthenticatedApp = React.lazy(() => import('./authenticated-app'))
// const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))

const App = () => {
  const user = useUser();
  return user ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
};

const Main = () => {
  return (
    <AppProviders>
      <App />
    </AppProviders>
  );
};

export default Main;
