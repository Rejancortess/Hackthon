import UpcomingChat from "@/components/volunteer/UpcomingChat";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text } from "react-native";

const VolunteerDashboard = () => {
  return (
    <LinearGradient colors={["#F9FAFB", "#949495"]} className="flex-1 px-7">
      <Text className="text-primary-bold mt-10 text-xl font-medium">
        Upcoming Chats
      </Text>
      <UpcomingChat profileImg={require("@/assets/images/user-1.png")} />
      <UpcomingChat profileImg={require("@/assets/images/user-2.png")} />
    </LinearGradient>
  );
};

export default VolunteerDashboard;
