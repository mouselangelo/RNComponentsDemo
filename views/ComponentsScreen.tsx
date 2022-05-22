import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import routeNames from "../routeNames";

const excludeRoutes = ["Components", "Color"];

export const screens = Object.values(routeNames).filter(
  route => !excludeRoutes.includes(route),
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
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      )}
      ListHeaderComponent={() => <Header />}
    />
  );
};

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>React-Native Components</Text>
  </View>
);

const styles = StyleSheet.create({
  list: {
    padding: 20,
  },
  header: {
    padding: 12,
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    color: "#222",
    fontWeight: "500",
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
  text: {
    fontSize: 18,
    color: "#222",
  },
});

export default ComponentsScreen;
