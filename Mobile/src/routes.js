import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
import Incidents from "./pages/incidents";
import Detais from "./pages/Detail";

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Incidents} />
        <Stack.Screen name="Detail" component={Detais} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
