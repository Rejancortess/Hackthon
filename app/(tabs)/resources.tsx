import { GradientBackground } from "@/components/ui/GradientBackground";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
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
              Resources
            </Text>
          </View>

          <View className="mt-7 flex-row items-center gap-5">
            <View className="h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-[#A6E3B7]">
              <FontAwesome name="heart" size={20} color="white" />
            </View>
            <Text className="text-primary-bold text-2xl font-bold">
              Self-Care Tips
            </Text>
          </View>

          <TouchableOpacity
            className="mt-6 flex-row rounded-3xl bg-white p-5"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 6,
            }}
          >
            <View className="h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-[#C0EBCC]">
              <FontAwesome5 name="bed" size={20} color="#31AC53" />
            </View>
            <View className="w-full gap-2 px-5">
              <Text className="text-primary-bold text-lg font-bold">
                Sleep Hygiene Guide
              </Text>
              <Text className="text-primary-light">
                Tips for better sleep quality and mental wellness
              </Text>
              <View className="self-start rounded-full bg-green-100 px-3 py-1 ">
                <Text className="text-sm text-[#31AC53]">5 min read</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="mt-5 flex-row rounded-3xl bg-white p-5"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 6,
            }}
          >
            <View className="h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-[##B3E5FC]">
              <FontAwesome5 name="leaf" size={20} color="#137FB5" />
            </View>
            <View className="w-full gap-2 px-5">
              <Text className="text-primary-bold text-lg font-bold">
                Mindfulness Exercises
              </Text>
              <Text className="text-primary-light">
                Daily practices to reduce stress {"\n"}and anxiety
              </Text>
              <View className="self-start rounded-full bg-sky-100 px-3 py-1 ">
                <Text className="text-sm text-[#137FB5]">5 min read</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="mt-5 flex-row rounded-3xl bg-white p-5"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 6,
            }}
          >
            <View className="h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-indigo-100">
              <FontAwesome6 name="dumbbell" size={24} color="#8465C9" />
            </View>
            <View className="w-full gap-2 px-5">
              <Text className="text-primary-bold text-lg font-bold">
                Physical Wellness
              </Text>
              <Text className="text-primary-light">
                Exercise routines for mental {"\n"}health benefits
              </Text>
              <View className="self-start rounded-full bg-indigo-100 px-3 py-1 ">
                <Text className="text-sm text-indigo-700">8 min read</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default Chat;
