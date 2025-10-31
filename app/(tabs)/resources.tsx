import { GradientBackground } from "@/components/ui/GradientBackground";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Chat = () => {
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      return () => {};
    }, [])
  );

  return (
    <GradientBackground colors={["#F3E8FF", "#E5E7EB"]}>
      <SafeAreaView className="flex-1">
        <ScrollView className="flex-1 px-8">
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

          <View className="text-primary-bold mt-10 flex-row items-center gap-5">
            <View className="rounded-xl bg-[#EF4444] p-2">
              <AntDesign name="phone" size={24} color="white" />
            </View>
            <Text className="text-2xl font-semibold">Crisis Hotlines</Text>
          </View>

          <View className="mt-5 w-full  flex-row items-center justify-between gap-2 rounded-3xl border-2 border-[#FEE2E2] bg-white px-4 py-5">
            <View className="rounded-2xl bg-red-100 p-4">
              <FontAwesome5 name="heartbeat" size={20} color="#EF4444" />
            </View>
            <View>
              <Text className="text-primary-bold text-lg font-semibold">
                Crisis Text Line
              </Text>
              <Text>Text HOME to 741741</Text>
            </View>
            <View className="self-end rounded-xl bg-[#EF4444] p-2">
              <AntDesign name="phone" size={24} color="white" />
            </View>
          </View>

          <View className="mt-5 w-full flex-row items-center justify-between gap-2 rounded-3xl border-2 border-[#FEE2E2] bg-white px-4 py-5">
            <View className="rounded-2xl bg-red-100 p-4">
              <FontAwesome5 name="headset" size={20} color="#EF4444" />
            </View>
            <View>
              <Text className="text-pri text-lg font-semibold">
                National Suicide{"\n"}Prevention
              </Text>
              <Text>988 or 1-800-273-8255</Text>
            </View>
            <View className="rounded-xl bg-[#EF4444] p-2">
              <AntDesign name="phone" size={24} color="white" />
            </View>
          </View>

          <View className="mt-5 w-full flex-row items-center justify-between gap-2 rounded-3xl border-2 border-[#FEE2E2] bg-white px-4 py-5">
            <View className="rounded-2xl bg-red-100 p-4">
              <Ionicons name="chatbubbles-sharp" size={24} color="#EF4444" />
            </View>
            <View>
              <Text className="text-primary-bold text-lg font-semibold">
                SAMHSA Helpline
              </Text>
              <Text>1-800-662-4357</Text>
            </View>
            <View className="rounded-xl bg-[#EF4444] p-2">
              <AntDesign name="phone" size={24} color="white" />
            </View>
          </View>

          <LinearGradient
            colors={["#EF4444", "#EC4899"]}
            style={{ marginBottom: 100, borderRadius: 20 }}
            className="mt-5 flex-row items-center justify-between rounded-3xl p-5"
          >
            <View className="bg-white-20 rounded-2xl p-3">
              <Ionicons name="warning" size={24} color="white" />
            </View>

            <View>
              <Text className="text-lg font-semibold text-white">
                Emergency Support
              </Text>
              <Text className="text-white">
                If you&apos;re in crisis, don&apos;t{"\n"}wait. Get help now.
              </Text>
            </View>

            <View className="bg-white-20 rounded-2xl p-2 text-white">
              <Text className="font-medium text-white">Call 911</Text>
            </View>
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default Chat;
