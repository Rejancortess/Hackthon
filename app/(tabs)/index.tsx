import { GradientBackground } from "@/components/ui/GradientBackground";
import { theme } from "@/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const HomeScreen = () => {
  const router = useRouter();
  return (
    <GradientBackground colors={["#C8A2C8", "#B5B5B5", "#111827"]}>
      <SafeAreaView className="flex-1 ">
        <View className="mt-5 w-full flex-row items-center px-5">
          <Image
            source={require("../../assets/images/profile.png")}
            className="mr-5 rounded-full border-2 border-white shadow-md shadow-black"
            style={{
              width: 48,
              height: 48,
            }}
            resizeMode="contain"
          />
          <View className="flex-1">
            <Text className="text-primary-bold text-xl font-bold">
              Hi Rejan!
            </Text>
            <Text className="text-primary-light text-lg">Welcome back</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => router.push("/settings")}
          >
            <View
              className="items-center justify-center rounded-full bg-white px-2 py-4"
              style={theme.shadow}
            >
              <Ionicons name="settings-outline" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default HomeScreen;
