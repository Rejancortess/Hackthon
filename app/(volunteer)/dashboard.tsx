import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text } from "react-native";

const VolunteerDashboard = () => {
  return (
    <LinearGradient colors={["#F9FAFB", "#949495"]} className="flex-1 px-7">
      <Text className="text-primary-bold mt-10 text-xl font-medium">
        Upcoming Chats
      </Text>
    </LinearGradient>
  );
};

export default VolunteerDashboard;
