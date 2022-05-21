import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import routeNames from "./routeNames";
import ComponentsScreen from "./views/ComponentsScreen";
import ViewsScreen from "./views/ViewsScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={routeNames.components}
          component={ComponentsScreen}
          options={{ title: "Components" }}
        />
        <Stack.Screen
          name={routeNames.views}
          component={ViewsScreen}
          options={{ title: "Views & Layout" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
