import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import routeNames from "./routeNames";
import AlertScreen from "./views/AlertScreen";
import ColorScreen from "./views/ColorScreen";
import ComponentsScreen from "./views/ComponentsScreen";
import ImagesScreen from "./views/ImagesScreen";
import TextsScreen from "./views/TextsScreen";
import ViewsScreen from "./views/ViewsScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={routeNames.Components}
          component={ComponentsScreen}
        />
        <Stack.Screen
          name={routeNames.Views}
          component={ViewsScreen}
          options={{ title: "View & Layout" }}
        />
        <Stack.Screen name={routeNames.Text} component={TextsScreen} />
        <Stack.Screen name={routeNames.Image} component={ImagesScreen} />
        <Stack.Screen name={routeNames.Alert} component={AlertScreen} />
        <Stack.Screen
          name={routeNames.Color}
          component={ColorScreen}
          options={{
            headerTransparent: true,
            headerTintColor: "white",
            headerTitle: "",
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
