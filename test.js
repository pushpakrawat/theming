import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper'; 

const ColorBoxes = () => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={[styles.colorBox, { backgroundColor: theme.colors.primary }]}/>
      <View style={[styles.colorBox, { backgroundColor: theme.colors.secondary }]}/>
      <View style={[styles.colorBox, { backgroundColor: theme.colors.tertiary }]}/>
      <View style={[styles.colorBox, { backgroundColor: theme.colors.error }]}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  colorBox: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});

export default ColorBoxes;
