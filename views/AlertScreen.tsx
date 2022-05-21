import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, Button, SafeAreaView, StyleSheet } from "react-native";
import routeNames from "../routeNames";

const AlertScreen = () => {
  const navigation = useNavigation<any>();

  const showColorView = useCallback(
    (color: string) => {
      navigation.navigate(routeNames.Color, { color });
    },
    [navigation],
  );

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <Button
        title="Show Alert"
        onPress={() => {
          Alert.alert("Choose a Color", "Navigates to a new view", [
            { text: "Red", onPress: () => showColorView("#CC0000") },
            { text: "Green", onPress: () => showColorView("#00AA00") },
            { text: "Blue", onPress: () => showColorView("#0000BB") },
            { text: "Cancel", style: "cancel" },
          ]);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  body: {
    fontSize: 18,
    marginBottom: 16,
    color: "black",
  },
});

export default AlertScreen;
