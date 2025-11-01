import { GradientBackground } from "@/components/ui/GradientBackground";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Chat = () => {
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      // You can trigger any refresh logic here if needed
      return () => {};
    }, [])
  );

  return (
    <GradientBackground colors={["#F3E8FF", "#E5E7EB", "#111827"]}>
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-6 pt-10">
          {/* Header */}
          <View className="relative flex-row items-center justify-center">
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

          {/* AI Chatbot Card */}
          <TouchableOpacity
            onPress={() => router.push("/aiChatboot")}
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
            {/* Icon */}
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

            {/* Content */}
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

          {/* Volunteer Card */}
          <TouchableOpacity
            onPress={() => router.push("/aiChatboot")}
            className="mt-6 flex-row items-center rounded-3xl bg-white p-5"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 6,
            }}
            activeOpacity={0.8}
          >
            {/* Icon */}
            <View className="h-20 w-20 items-center justify-center">
              <Image
                source={require("@/assets/images/Volunteer-icon.png")}
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: "contain",
                }}
              />
            </View>

            {/* Content */}
            <View className="flex-1 pl-4">
              <View className="flex-row items-start justify-between">
                <Text className="text-primary-bold text-xl font-semibold leading-tight">
                  Peer{"\n"}Volunteers
                </Text>

                <View className="rounded-full bg-green-100 px-3 py-1">
                  <Text className="text-sm font-medium text-green-700">
                    Available
                  </Text>
                </View>
              </View>

              <Text className="mt-2 leading-5 text-gray-500">
                Connect with fellow students who understand your experiences.
              </Text>

              <View className="mt-3 flex-row items-center gap-2">
                <MaterialIcons name="groups" size={20} color="#6B7280" />
                <Text className="text-gray-400">3 volunteers online</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default Chat;
