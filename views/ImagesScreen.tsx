import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const localImage = require("./images/pastel-de-nata.jpg");

const avatarSize = 72;
const gridPadding = 8;
const gridColumns = 2;
const gridGap = 4;

const portraitUrl =
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480";

const gridImages = [
  "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHVnYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=900",
  "https://images.unsplash.com/photo-1536663815808-535e2280d2c2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHVnYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=900",
  "https://images.unsplash.com/photo-1529699074188-d1fb8244c4ca?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnR1Z2FsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900",
  "https://images.unsplash.com/photo-1439396812601-0b512add529f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnR1Z2FsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900",
  "https://images.unsplash.com/photo-1608649944716-228404a0a8bb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnR1Z2FsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900",
  "https://images.unsplash.com/photo-1541320779116-ec4a3d4692bc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBvcnR1Z2FsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900",
  "https://images.unsplash.com/photo-1509275698723-ae804786a334?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBvcnR1Z2FsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900",
  "https://images.unsplash.com/photo-1525968561557-b3d3c823fee2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHBvcnR1Z2FsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900",
];

const ImagesScreen = () => {
  const { width } = useWindowDimensions();

  const gridImageWidth =
    (width - gridGap * Math.min(2, gridColumns - 1)) / gridColumns -
    gridPadding * 2;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.profile}>
            <Image
              style={styles.avatar}
              source={{
                uri: portraitUrl,
                width: avatarSize,
                height: avatarSize,
              }}
            />
            <View>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.caption}>@johndoe</Text>
            </View>
          </View>

          <ImageBackground style={styles.bgImage} source={localImage}>
            <View style={styles.overlay}>
              <Text style={styles.text}>
                ImageBackground is like a View with an image for the background.
              </Text>
            </View>
          </ImageBackground>
        </View>

        <Text style={styles.gridTitle}>🇵🇹 Protugal</Text>
        <View style={styles.grid}>
          {gridImages.map((uri, index) => (
            <Image
              key={index}
              style={styles.gridImage}
              source={{ uri, width: gridImageWidth, height: gridImageWidth }}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "##e5e5e5",
  },
  card: {
    margin: 16,
    borderRadius: 32,
    backgroundColor: "white",
    shadowRadius: 1,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 1 },
  },
  bgImage: {
    overflow: "hidden",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    height: 300,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#000000aa",
    padding: 24,
    paddingTop: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
  profile: {
    padding: 16,
    paddingTop: 20,
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
    fontSize: 24,
    fontWeight: "500",
    color: "#444",
  },
  caption: {
    fontSize: 16,
    color: "#666",
  },
  gridTitle: {
    marginTop: 24,
    fontSize: 32,
    fontWeight: "700",
    color: "blue",
    padding: gridPadding,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: gridPadding,
  },
  gridImage: {
    margin: gridGap,
    aspectRatio: 1,
    resizeMode: "cover",
    borderRadius: gridGap,
    overflow: "hidden",
  },
});

export default ImagesScreen;
