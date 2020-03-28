import React from 'react';
import { Paragraph } from 'react-native-paper';
import Background from '../components/Background';
import Button from '../components/Button';
import Header from '../components/Header';
import Logo from '../components/Logo';
import { useAuth } from '../context/auth-context';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => {
  const { logout } = useAuth();

  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favourite code editor and start
        editing this project.
      </Paragraph>
      <Button mode="outlined" onPress={logout}>
        Logout
      </Button>
    </Background>
  );
};
export default Dashboard;
