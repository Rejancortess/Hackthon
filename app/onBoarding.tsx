import {
  Gradient,
  GradientBackground,
} from "@/components/ui/GradientBackground";
import { GradientCircle } from "@/components/ui/GradientCircle";
import useAuthStore from "@/store/authStore";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { theme } from "@/theme";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { useRouter } from "expo-router";
// @ts-ignore: allow importing SVGs without type declarations
import Logo from "../assets/images/app-logo.svg";

const OnBoardingScreen = () => {
  const router = useRouter();
  const { completeOnboarding, setRole } = useAuthStore();

  const handleUserPress = () => {
    setRole("user");
    completeOnboarding();
    router.push("/(auth)/login");
  };

  const handleVolunteerPress = () => {
    setRole("volunteer");
    completeOnboarding();
    router.push("/(auth)/login");
  };

  return (
    <GradientBackground colors={["#EEF2FF", "#E0E7FF", "#C7D2FE"]}>
      <GradientCircle
        size={220}
        colors={["#C8B6FF", "#E8A0BF"]}
        top={-50}
        left={-30}
      />
      <GradientCircle
        size={150}
        colors={["#A8D8F0", "#FFFFFF"]}
        bottom={80}
        right={-40}
      />
      <GradientCircle
        size={100}
        colors={["#D6C7E4", "#A8D8F0"]}
        bottom={200}
        left={40}
      />
      <GradientCircle
        size={100}
        colors={["#C7D2FE", "#A5B4FC"]}
        top={200}
        left={40}
      />
      <SafeAreaView className="flex-1 items-center justify-around pt-20 ">
        <View className="items-center ">
          <Logo width={120} height={120} />
          <Text className="text-primary-bold text-center text-4xl font-bold">
            MindLink
          </Text>
          <Text className="text-primary-light px-10 text-center text-xl">
            Your daily mental wellness companion
          </Text>
        </View>
        <View className="mt-20 ">
          <Text className="text-primary-light mb-6 text-center text-lg font-medium">
            Choose your role to get started
          </Text>
          <TouchableOpacity activeOpacity={0.8} onPress={handleVolunteerPress}>
            <Gradient
              colors={["#C7D2FE", "#A78BFA", "#7C3AED"]}
              style={theme.button}
              className="mb-4 flex-row items-center gap-5 space-x-4 border-2 border-white px-6 py-4"
            >
              <FontAwesome5 name="hands-helping" size={24} color="#5C1B97" />
              <View>
                <Text className="text-lg font-semibold">Volunteer</Text>
                <Text className="">Support others in the {"\n"}community</Text>
              </View>
            </Gradient>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={handleUserPress}>
            <Gradient
              colors={["#C7D2FE", "#A78BFA", "#7C3AED"]}
              style={theme.button}
              className="mb-4 flex-row items-center gap-5 space-x-4 border-2 border-white px-6 py-4"
            >
              <FontAwesome5 name="user-friends" size={24} color="#5C1B97" />
              <View>
                <Text className="text-lg font-semibold">User</Text>
                <Text className="">
                  Get support and {"\n"}connect with others
                </Text>
              </View>
            </Gradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default OnBoardingScreen;
