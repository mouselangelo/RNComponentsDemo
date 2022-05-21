import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.contatiner}>
      <View style={styles.content}>
        <Text style={styles.header}>Components</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contatiner: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#111111',
  },
});

export default App;
