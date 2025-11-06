import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

const VolunteerLayout = () => {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#4F46E5",
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 4,
          backgroundColor: "#fff",
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
            elevation: 2,
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
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="speedometer-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default VolunteerLayout;
