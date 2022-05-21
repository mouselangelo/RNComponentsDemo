import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ViewsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is inside a view</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default ViewsScreen;
