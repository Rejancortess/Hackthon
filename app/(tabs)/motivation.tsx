import DailyQoute from "@/components/motivation/DailyQoute";
import { GradientBackground } from "@/components/ui/GradientBackground";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { format } from "date-fns";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Chat = () => {
  const router = useRouter();
  const [isFavorited, setIsFavorited] = React.useState(false);
  const [isReminderOn, setIsReminderOn] = React.useState(true);

  useFocusEffect(
    useCallback(() => {
      return () => {};
    }, [])
  );

  return (
    <GradientBackground colors={["#E6E6FA", "#D3D3D3"]}>
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
              Daily Motivation
            </Text>
          </View>

          <View className="mt-10 items-center">
            <Text className="text-primary-light text-lg">
              Today, {format(new Date(), "MMMM do")}
            </Text>
            <Text className="text-primary-bold text-xl font-medium">
              Your daily dose of inspiration
            </Text>
          </View>

          <DailyQoute
            isFavorited={isFavorited}
            setIsFavorited={setIsFavorited}
          />

          <TouchableOpacity activeOpacity={0.8} style={{ elevation: 6 }}>
            <LinearGradient
              colors={["#A6E3B7", "#A7DFCA", "#A8D8F0"]}
              className="mt-10 w-full flex-row items-center justify-center gap-3 overflow-hidden rounded-3xl py-5"
            >
              <FontAwesome name="bookmark" size={24} color="black" />
              <Text className="text-xl font-medium">View Favorites</Text>
            </LinearGradient>
          </TouchableOpacity>

          <View className="mt-10 w-full flex-row items-center justify-between rounded-3xl bg-white px-5 py-3">
            <LinearGradient
              colors={["#D6C7F7", "#A6E3B7"]}
              className="h-12 w-12 items-center justify-center overflow-hidden rounded-full"
              style={{ elevation: 6 }}
            >
              <Fontisto name="bell-alt" size={18} color="white" />
            </LinearGradient>
            <View>
              <Text className="text-primary-bold text-lg font-medium">
                Daily Reminder
              </Text>
              <Text className="text-primary-light">
                Set your motivation time
              </Text>
            </View>
            <MaterialCommunityIcons
              name={isReminderOn ? "toggle-switch-off" : "toggle-switch"}
              size={50}
              color={isReminderOn ? "#9CA3AF" : "#34D399"}
              onPress={() => setIsReminderOn(!isReminderOn)}
            />
          </View>
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default Chat;
