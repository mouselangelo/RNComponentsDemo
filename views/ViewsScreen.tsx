import React, { Fragment } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const Boxes = () => {
  return (
    <Fragment>
      <View style={[styles.box, styles.red]}></View>
      <View style={[styles.box, styles.green]}></View>
      <View style={[styles.box, styles.blue]}></View>
      <View style={[styles.box, styles.orange]}></View>
    </Fragment>
  );
};

const ViewsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.sectionTitle}>Flex direction</Text>

        <View style={styles.section}>
          <Text style={styles.text}>column (default)</Text>
          <View>
            <Boxes />
          </View>

          <Text style={styles.text}>row</Text>
          <View style={{ flexDirection: "row" }}>
            <Boxes />
          </View>

          <Text style={styles.text}>row-reverse</Text>
          <View style={{ flexDirection: "row-reverse" }}>
            <Boxes />
          </View>

          <Text style={styles.text}>column-reverse (default)</Text>
          <View style={{ flexDirection: "column-reverse" }}>
            <Boxes />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Justify Content</Text>

        <View style={styles.section}>
          <Text style={styles.text}>center</Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Boxes />
          </View>

          <Text style={styles.text}>space-evenly</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}>
            <Boxes />
          </View>

          <Text style={styles.text}>space-around</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}>
            <Boxes />
          </View>

          <Text style={styles.text}>space-between</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <Boxes />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: "800",
    paddingHorizontal: 16,
    color: "#444",
    marginTop: 16,
  },
  section: {
    padding: 8,
    paddingBottom: 32,
    marginBottom: 16,
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#e0e0e0",
    marginVertical: 16,
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: "red",
    margin: 4,
    borderRadius: 4,
  },
  red: {
    backgroundColor: "red",
  },
  green: {
    backgroundColor: "green",
  },
  blue: {
    backgroundColor: "blue",
  },
  orange: {
    backgroundColor: "orange",
  },
});

export default ViewsScreen;
