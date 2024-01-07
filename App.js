import React from 'react';
import { StatusBar } from 'expo-status-bar';
import 'expo-dev-client';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { StyleSheet, Text, View } from 'react-native';
import { useColorScheme } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import ColorBoxes from './test';

export default function App() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const paperTheme =
    colorScheme === 'dark'
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };

  return (
    <PaperProvider theme={paperTheme}>
      <View style={styles.container}>
        <ColorBoxes />
        <Text style={styles.text}>{colorScheme}</Text>
      </View>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20, // Adjust as needed
  },
});
