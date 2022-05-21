import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const sentence = "The quick brown fox jumped over the lazy dog!";

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus purus enim, eget pulvinar augue efficitur in. Aliquam volutpat neque ante, semper semper nunc dignissim sagittis.";

const TextsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.largeTitle}>A Large Title</Text>

          <Text style={styles.caption}>{sentence}</Text>

          <Text style={styles.caption} numberOfLines={1}>
            {sentence}
          </Text>

          <Text style={styles.body}>{paragraph}</Text>

          <Text
            style={[
              styles.largeTitle,
              {
                fontSize: 28,
                backgroundColor: "purple",
                color: "white",
                paddingHorizontal: 8,
              },
            ]}>
            Nested components:
          </Text>
          <Text style={styles.body}>
            Text components can be nested - the inner components inherit the
            parent's styles
          </Text>

          <Text style={styles.largeTitle}>
            John &
            <Text style={{ color: "red", fontWeight: "900" }}>
              {" "}
              Paul &{" "}
              <Text style={{ color: "green", fontWeight: "300" }}>
                Ringo &{" "}
              </Text>
            </Text>
            George.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  largeTitle: {
    fontSize: 48,
    fontWeight: "bold",
    color: "blue",
    marginBottom: 16,
  },
  caption: {
    fontSize: 24,
    fontWeight: "500",
    color: "navy",
    marginBottom: 16,
  },
  body: {
    fontSize: 18,
    marginBottom: 16,
    color: "black",
  },
});

export default TextsScreen;
