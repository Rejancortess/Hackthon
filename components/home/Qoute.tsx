import { theme } from "@/theme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Text, View } from "react-native";

const Qoute = () => {
  return (
    <View
      className="mt-10 flex-row gap-5 rounded-3xl bg-white p-5 "
      style={theme.shadow}
    >
      <FontAwesome name="quote-left" size={24} color="#9333EA" />
      <View className="flex-1 gap-4">
        <Text className="text-primary-bold text-2xl font-medium">
          Quote of the Day
        </Text>
        <Text className="text-primary-medium text-xl">
          &quot;You are braver than you believe, stronger than you seem, and
          more loved than you&apos;ll ever know.&quot;
        </Text>
        <Text className="text-primary-light text-xl">- A.A. Milne</Text>
      </View>
    </View>
  );
};

export default Qoute;
