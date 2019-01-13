import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import GreetingScreen from "../screens/GreetingScreen";
import AboutScreen from "../screens/AboutScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const GreetingStack = createStackNavigator({
  Links: GreetingScreen
});

GreetingStack.navigationOptions = {
  tabBarLabel: "Greeting",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-hand" : "md-hand"}
    />
  )
};

const AboutStack = createStackNavigator({
  Settings: AboutScreen
});

AboutStack.navigationOptions = {
  tabBarLabel: "About",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-contact" : "md-contact"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  GreetingStack,
  AboutStack
});
