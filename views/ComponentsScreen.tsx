import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

import routeNames from "../routeNames";

export const screens = Object.values(routeNames).filter(
  route => route !== "Components",
);

const ComponentsScreen = ({ navigation }: NativeStackScreenProps<any>) => {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={screens}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.cellWrapper}
          onPress={() => navigation.navigate(item)}>
          <Text style={styles.cellTitle}>{item}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 20,
  },
  cellWrapper: {
    backgroundColor: "white",
    padding: 24,
    marginBottom: 16,
    borderRadius: 16,
    shadowColor: "black",
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
  },
  cellTitle: {
    fontSize: 16,
    color: "#222",
  },
});

export default ComponentsScreen;
