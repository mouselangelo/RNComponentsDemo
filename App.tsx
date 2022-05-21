import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import routeNames from "./routeNames";
import ComponentsScreen from "./views/ComponentsScreen";
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
