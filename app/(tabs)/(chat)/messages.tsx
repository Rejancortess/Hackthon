import Chatbot from "@/components/messages/Chatbot";
import PeerVolunteer from "@/components/messages/PeerVolunteer";
import { GradientBackground } from "@/components/ui/GradientBackground";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Chat = () => {
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      return () => {};
    }, [])
  );

  return (
    <GradientBackground colors={["#F3E8FF", "#E5E7EB", "#111827"]}>
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-8 ">
          <View className="relative mt-5 flex-row items-center justify-center">
            <TouchableOpacity
              className="absolute left-0"
              onPress={() => router.back()}
              activeOpacity={0.7}
            >
              <Ionicons name="arrow-back-outline" size={28} color="#000" />
            </TouchableOpacity>

            <Text className="text-2xl font-semibold text-gray-800">
              Chat Support
            </Text>
          </View>

          <Chatbot onPress={() => router.push("/aiChatbot")} />

          <PeerVolunteer onPress={() => router.push("/aiChatbot")} />
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default Chat;
