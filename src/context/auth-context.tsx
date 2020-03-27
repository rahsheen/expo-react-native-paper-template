import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { View } from 'react-native';

interface AuthContextType {
  user?: object;
  login?: (data: object) => {};
  logout?: () => {};
  register?: () => {};
}

const AuthContext = React.createContext<AuthContextType>({});

function AuthProvider(props) {
  const [data, setData] = React.useState<{ user?: object }>();

  // TODO: code for pre-loading the user's information if we have their token in
  // localStorage goes here
  useEffect(() => {
    setData({});
  }, []);

  // 🚨 this is the important bit.
  // Normally your provider components render the context provider with a value.
  // But we post-pone rendering any of the children until after we've determined
  // whether or not we have a user token and if we do, then we render a spinner
  // while we go retrieve that user's information.
  if (!data) {
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const login = (data: object) => {
    setData({ user: data });
  }; // make a login request
  const register = () => {}; // register the user
  const logout = () => {
    setData({});
  }; // clear the token in localStorage and the user data

  // note, I'm not bothering to optimize this `value` with React.useMemo here
  // because this is the top-most component rendered in our app and it will very
  // rarely re-render/cause a performance problem.

  console.log('Data is', data);
  const user = data?.user;
  const authContextValue = { user, login, logout, register };

  return <AuthContext.Provider value={authContextValue} {...props} />;
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
