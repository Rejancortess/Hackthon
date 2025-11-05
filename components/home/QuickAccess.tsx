import { theme } from "@/theme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type QuickAccessProps = {
  talkRoute?: () => void;
  communityRoute?: () => void;
};

const QuickAccess = ({ talkRoute, communityRoute }: QuickAccessProps) => {
  return (
    <View className="mt-10 flex-row justify-between ">
      <TouchableOpacity
        activeOpacity={0.8}
        className="mb-10 w-[47%]  items-center justify-center gap-1 rounded-2xl bg-white p-5"
        style={theme.shadow}
        onPress={talkRoute}
      >
        <LinearGradient
          colors={["#0099E5", "#7860AD"]}
          className="items-center justify-center p-4 "
          style={{
            borderRadius: 50,
            width: 55,
            height: 55,
            alignSelf: "center",
          }}
        >
          <Ionicons name="chatbubbles" size={24} color="white" />
        </LinearGradient>
        <Text className="text-primary-bold text-lg font-semibold">
          Talk Support
        </Text>
        <Text className="text-primary-light text-center">Talk to someone</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={communityRoute}
        activeOpacity={0.8}
        className="mb-10 w-[47%] items-center justify-center gap-1 rounded-2xl bg-white p-5"
        style={theme.shadow}
      >
        <LinearGradient
          colors={["#4496BF", "#6CAE8C", "#7E8D82"]}
          className="items-center justify-center p-4"
          style={{
            borderRadius: 50,
            width: 55,
            height: 55,
            alignSelf: "center",
          }}
        >
          <FontAwesome name="group" size={24} color="white" />
        </LinearGradient>
        <Text className="text-primary-bold text-lg font-semibold">
          Community
        </Text>
        <Text className="text-primary-light">Student Support</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuickAccess;
