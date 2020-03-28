import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Theme, withTheme } from 'react-native-paper';

type Props = {
  children: React.ReactNode;
  theme: Theme;
};

const Header = ({ children, theme }: Props) => (
  <Text style={[styles.header, { color: theme.colors.primary }]}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingVertical: 14,
  },
});

export default withTheme(Header);
