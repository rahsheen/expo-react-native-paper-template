import React from 'react';
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './src';
import AppProviders from './src/context';
import { useUser } from './src/context/user-context';

// const AuthenticatedApp = React.lazy(() => import('./authenticated-app'))
// const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))

const Main = () => {
  const { user } = useUser();
  console.log('App User is', user);
  const App = user ? AuthenticatedRoutes : UnauthenticatedRoutes;

  return (
    <AppProviders>
      <App />
    </AppProviders>
  );
};

export default Main;
