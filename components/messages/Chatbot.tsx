import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type ChatbotProps = {
  onPress: () => void;
};

const Chatbot = ({ onPress }: ChatbotProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="mt-8 flex-row items-center rounded-3xl bg-white p-5"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 6,
      }}
      activeOpacity={0.8}
    >
      <View className="h-20 w-20 items-center justify-center">
        <Image
          source={require("@/assets/images/Ai-icon.png")}
          style={{
            width: 70,
            height: 70,
            resizeMode: "contain",
          }}
        />
      </View>

      <View className="flex-1 pl-4">
        <View className="flex-row items-start justify-between">
          <Text className="text-primary-bold text-xl font-semibold leading-tight">
            MindLink AI{"\n"}Chatbot
          </Text>

          <View className="rounded-full bg-green-100 px-3 py-1">
            <Text className="text-sm font-medium text-green-700">
              Available
            </Text>
          </View>
        </View>

        <Text className="mt-2 leading-5 text-gray-500">
          Emotional support with guided coping strategies and mindfulness
          exercises.
        </Text>

        <View className="mt-3 flex-row items-center gap-2">
          <Ionicons name="time" size={16} color="#6B7280" />
          <Text className="text-gray-400">Instant response</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Chatbot;
