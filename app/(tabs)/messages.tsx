import { GradientBackground } from "@/components/ui/GradientBackground";
import React from "react";
import { Text, View } from "react-native";

const chat = () => {
  return (
    <GradientBackground colors={["#F3E8FF", "#E5E7EB", "#111827"]}>
      <View className="flex-1 items-center justify-center">
        <Text className="text-primary-bold text-2xl">Chadsdst sdsdScreen</Text>
      </View>
    </GradientBackground>
  );
};

export default chat;
