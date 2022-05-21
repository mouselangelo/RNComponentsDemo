import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const localImage = require("./images/clown.png");

const avatarSize = 80;

const portraitUrl =
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480";

const ImagesScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground style={styles.section} source={localImage}>
        <View style={styles.overlay}>
          <Text style={styles.text}>
            ImageBackground is like a View with an image for the background.
          </Text>
        </View>
      </ImageBackground>
      <View style={[styles.section, { flex: 0 }]}>
        <View style={styles.profile}>
          <Image
            style={styles.avatar}
            source={{ uri: portraitUrl, width: avatarSize, height: avatarSize }}
          />
          <View>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.caption}>@johndoe</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
    padding: 20,
    margin: 16,
    borderRadius: 32,
    backgroundColor: "white",
    overflow: "hidden",
    borderColor: "#ddd",
    borderWidth: 1,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffffcc",
    padding: 24,
    paddingTop: 16,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: -4 },
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    borderRadius: avatarSize / 2,
    borderColor: "#ccc",
    borderWidth: 2,
    marginRight: 16,
  },
  name: {
    fontSize: 27,
    fontWeight: "500",
    color: "#444",
  },
  caption: {
    fontSize: 17,
    color: "#666",
  },
});

export default ImagesScreen;
