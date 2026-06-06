import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screen/Home";
import Discover from "../screen/Discover";
import Booking from "../screen/Booking";
import Profile from "../screen/Profile";
import BookingList from "../screen/BookingList";

const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({

        tabBarIcon: ({ color, size }) => {

          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          }

          else if (route.name === "Discover") {
            iconName = "search";
          }

          else if (route.name === "Booking") {
            iconName = "ticket";
          }

          else if (route.name === "Data") {
            iconName = "clipboard";
          }

          else if (route.name === "Profile") {
            iconName = "person";
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );

        },

        tabBarActiveTintColor:"#007BFF",
        tabBarInactiveTintColor:"gray"

      })}
    >

      <Tab.Screen
        name="Home"
        component={Home}
      />

      <Tab.Screen
        name="Discover"
        component={Discover}
      />

      <Tab.Screen
        name="Booking"
        component={Booking}
      />

      <Tab.Screen
        name="Data"
        component={BookingList}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
      />

    </Tab.Navigator>
  );
}