import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const ColorScreen = (props: any) => {
  const { color = "red" } = props.route.params ?? {};
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.text}>{color}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    padding: 20,
    fontSize: 48,
    fontWeight: "900",
    color: "white",
  },
});

export default ColorScreen;
