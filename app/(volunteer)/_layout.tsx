import { Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

const VolunteerLayout = () => {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0F172A",
        tabBarInactiveTintColor: "#64748B",
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: "8%",
          right: "8%",
          elevation: 5,
          backgroundColor: "#fff",
          borderRadius: 25,
          height: 77,
          marginHorizontal: 20,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 10 },
          shadowRadius: 10,
          borderTopWidth: 0,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#fff",
            elevation: 1,
          },
          headerTitleStyle: {
            color: "#1E293B",
          },

          headerRight: () => {
            return (
              <TouchableOpacity
                className="mr-5"
                onPress={() => router.push("/settings")}
              >
                <Ionicons name="settings" size={25} color="#64748B" />
              </TouchableOpacity>
            );
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="view-dashboard"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            backgroundColor: "red",
            minWidth: 12,
            height: 12,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 8,
            lineHeight: 11,
            textAlign: "center",
            fontWeight: "bold",
          },
          tabBarIcon: ({ color }) => (
            <Entypo name="chat" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default VolunteerLayout;
