import { GradientBackground } from "@/components/ui/GradientBackground";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useFocusEffect, useNavigation, useRouter } from "expo-router";
import React, { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Chat = () => {
  const router = useRouter();
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: "none",
        },
      });
      return () => {
        navigation.getParent()?.setOptions({
          tabBarStyle: {
            position: "absolute",
            bottom: 20,
            left: "8%",
            right: "8%",
            elevation: 5,
            backgroundColor: "#fff",
            borderRadius: 25,
            height: 77,
            marginHorizontal: 20,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 10 },
            shadowRadius: 10,
            borderTopWidth: 0,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
          },
        });
      };
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
              Student Support
            </Text>
          </View>

          <TouchableOpacity
            className="mt-20 flex-row rounded-3xl bg-white p-5"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 6,
            }}
          >
            <View className="h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-sky-100">
              <FontAwesome5 name="book" size={20} color="#137FB5" />
            </View>
            <View className="w-full gap-2 px-5">
              <Text className="text-primary-bold text-xl font-bold">
                Academic Stress {"\n"}Management
              </Text>
              <Text className="text-primary-light ">
                Strategies for handling {"\n"}exam anxiety and workload
              </Text>
              <View className="self-start rounded-full bg-sky-100 px-3 py-1 ">
                <Text className="text-sm text-[#137FB5]">7 min read</Text>
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
              <FontAwesome name="group" size={20} color="#8465C9" />
            </View>
            <View className="w-full gap-2 px-5">
              <Text className="text-primary-bold text-xl font-bold">
                Campus Resources
              </Text>
              <Text className="text-primary-light">
                Daily practices to reduce stress {"\n"}and anxiety
              </Text>
              <View className="self-start rounded-full bg-indigo-100 px-3 py-1 ">
                <Text className="text-sm text-indigo-700">Quick access</Text>
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
            <View className="h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-emerald-100">
              <FontAwesome name="calendar-check-o" size={24} color="#31AC53" />
            </View>
            <View className="w-full gap-2 px-5">
              <Text className="text-primary-bold text-lg font-bold">
                Time Management Tips
              </Text>
              <Text className="text-primary-light">
                Balance studies, work, and {"\n"}personal life
              </Text>
              <View className="self-start rounded-full bg-emerald-100 px-3 py-1 ">
                <Text className="text-sm text-emerald-700">8 min read</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default Chat;
