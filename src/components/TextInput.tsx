import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput as Input, Theme, withTheme } from 'react-native-paper';

type Props = React.ComponentProps<typeof Input> & {
  errorText?: string;
  theme?: Theme;
};

const TextInput = ({ errorText, theme, ...props }: Props) => (
  <View style={styles.container}>
    <Input
      theme={{ colors: { background: theme.colors.surface } }}
      selectionColor={theme.colors.primary}
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
    {errorText ? (
      <Text style={[styles.error, { color: theme.colors.error }]}>
        {errorText}
      </Text>
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  error: {
    fontSize: 14,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export default withTheme(TextInput);
