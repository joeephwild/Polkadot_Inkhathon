import { Tabs, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, Text, View } from "react-native";

export default function Layout() {
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        sceneContainerStyle={{
          backgroundColor: "#13141C",
        }}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#262837",
            borderTopColor: "transparent",
            // height: 75,
          },
          // tabBarShowLabel: false,
          tabBarActiveTintColor: "#fff",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "calendar" : "calendar-outline"}
                size={size}
                color={color}
              />
            ),
            title: "Home",
          }}
        />
        {/* <Tabs.Screen
          name="live"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "recording" : "recording-outline"}
                size={size}
                color={color}
              />
            ),
            title: "Live",
          }}
        /> */}
        <Tabs.Screen
          name="apps"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "game-controller" : "game-controller-outline"}
                size={size}
                color={color}
              />
            ),
            title: "Apps",
          }}
        />
        <Tabs.Screen
          name="community"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "people-circle" : "people-outline"}
                size={size}
                color={color}
              />
            ),
            title: "Community",
          }}
        />
        <Tabs.Screen
          name="dao"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "business-outline" : "business"}
                size={size}
                color={color}
              />
            ),
            title: "DAO",
          }}
        />
        {/* <Tabs.Screen
          name="search"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        /> */}
      </Tabs>
    </>
  );
}
