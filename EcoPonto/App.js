//import 'react-native-reanimated';

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/screen/home";
import Login from "./src/screen/login";
import Consient from "./src/screen/consient";
import pontoColeta from "./src/screen/pontoColeta";

//import { MaterialCommunityIcons } from "react-native-vector-icons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#fff",
        borderTopWidth: 0,
        height: 60,
        paddingBottom: 10,
      },
    }}
  >
    <Tab.Screen
      name="homeTab"
      component={Home}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="consietTab"
      component={Consient}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="tree" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="pontoColetaTab"
      component={pontoColeta}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="map-marker" color={color} size={size} />
        ),
      }}
    />
        <Tab.Screen
      name="loginTab"
      component={Login}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="login" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={BottomTabs} />
        <Stack.Screen name="consiet" component={Consient} />
        <Stack.Screen name="pontoColeta" component={pontoColeta} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
