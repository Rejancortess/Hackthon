import { GradientBackground } from "@/components/ui/GradientBackground";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
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
        <View className="flex-1 px-8">
          <View className="relative mt-5 flex-row items-center justify-center">
            <TouchableOpacity
              className="absolute left-0"
              onPress={() => router.back()}
              activeOpacity={0.7}
            >
              <Ionicons name="arrow-back-outline" size={24} color="#000" />
            </TouchableOpacity>

            <Text className="text-2xl font-semibold text-gray-800">
              Chat Support
            </Text>
          </View>

          <TouchableOpacity
            className="mt-8 rounded-3xl bg-white p-5"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 6,
            }}
          >
            <View className="mb-3 flex-row items-center justify-between">
              <LinearGradient
                colors={["#93C5FD", "#A5B4FC"]}
                className="h-12 w-12 items-center justify-center overflow-hidden rounded-2xl"
                style={{ elevation: 6 }}
              >
                <FontAwesome5 name="brain" size={24} color="white" />
              </LinearGradient>

              <View className="rounded-full bg-green-100 px-3 py-1">
                <Text className="font-medium text-green-600">Available</Text>
              </View>
            </View>

            <Text className="text-primary-bold text-2xl font-semibold">
              MindLink AI Chatbot
            </Text>

            <Text className="mt-1 leading-5 text-gray-500">
              Emotional support with guided coping strategies and mindfulness
              exercises
            </Text>

            <View className="mt-4 flex-row items-center gap-2">
              <Ionicons name="time" size={16} color="#6B7280" />
              <Text className="text-gray-400 ">Instant response</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="mt-8 rounded-3xl bg-white p-5"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 6,
            }}
          >
            <View className="mb-3 flex-row items-center justify-between">
              <LinearGradient
                colors={["#93C5FD", "#A5B4FC"]}
                className="h-12 w-12 items-center justify-center overflow-hidden rounded-2xl"
                style={{ elevation: 6 }}
              >
                <FontAwesome name="handshake-o" size={24} color="white" />
              </LinearGradient>

              <View className="rounded-full bg-green-100 px-3 py-1">
                <Text className="font-medium text-green-600">Available</Text>
              </View>
            </View>

            <Text className="text-primary-bold text-2xl font-semibold">
              Peer Volunteers
            </Text>

            <Text className="mt-1 leading-5 text-gray-500">
              Connect with fellow students who understand your experiences
            </Text>

            <View className="mt-4 flex-row items-center gap-2">
              <MaterialIcons name="groups" size={24} color="#6B7280" />
              <Text className="text-gray-400 ">3 volunteers online</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default Chat;
