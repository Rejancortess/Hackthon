import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const VolunteerDashboard = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center ">
      <Text className="text-3xl font-bold text-violet-600">
        Volunteer Dashboard
      </Text>
      <Text className="mt-2 text-lg text-gray-600">
        Welcome! You’re logged in as a volunteer.
      </Text>
    </SafeAreaView>
  );
};

export default VolunteerDashboard;
