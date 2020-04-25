import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import { Paragraph, Switch } from 'react-native-paper';
import Button from '../components/Button';
import { Navigation } from '../types';
import { useAuth } from '../context/auth-context';
import { useDarkTheme } from '../context/theme-context';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => {
  const { logout } = useAuth();
  const { toggleDark, dark } = useDarkTheme();

  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favourite code editor and start
        editing this project.
      </Paragraph>
      <Switch value={dark} onValueChange={toggleDark} />
      <Button mode="outlined" onPress={logout}>
        Logout
      </Button>
    </Background>
  );
};
export default memo(Dashboard);
