import { FontAwesome5 } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <>
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
          name="(home)"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(chat)"
          options={{
            title: "Messages",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Entypo name="chat" size={24} color={color} />
            ),
            tabBarBadge: 3,
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
          }}
        />
        <Tabs.Screen
          name="motivation"
          options={{
            headerShown: false,
            title: "Motivation",
            tabBarIcon: ({ color }) => (
              <Entypo name="heart" size={24} color={color} />
            ),
            tabBarBadge: 3,
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
          }}
        />
        <Tabs.Screen
          name="(resources)"
          options={{
            title: "Resources",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="book-open" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
