// App.tsx
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

// Define the component using TypeScript's React.FC type for function components
const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Welcome to My React Native App!</Text>
      </View>
    </SafeAreaView>
  );
};

// Define the styles for your component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default App;
