import React from 'react';
import AppProviders from './src/context';
import { useUser } from './src/context/user-context';
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './src/routes';

// const AuthenticatedApp = React.lazy(() => import('./authenticated-app'))
// const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))

const App = () => {
  const user = useUser();
  console.log('App User is', user);
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
