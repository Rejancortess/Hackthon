import { GradientBackground } from "@/components/ui/GradientBackground";
import { theme } from "@/theme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const HomeScreen = () => {
  const router = useRouter();
  return (
    <GradientBackground colors={["#C8A2C8", "#B5B5B5", "#111827"]}>
      <SafeAreaView className="flex-1 px-8">
        <ScrollView className="flex-1 " showsVerticalScrollIndicator={false}>
          <View className="mt-5 w-full flex-row items-center ">
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

          <View className="mt-10 rounded-3xl bg-white p-5" style={theme.shadow}>
            <Text className="text-primary-bold text-2xl font-bold">
              How are you feeling today?
            </Text>
            <Text className="text-primary-light mt-3 text-xl">
              Take a moment to check in with yourself.
            </Text>
            <View className="flex-row justify-around">
              <TouchableOpacity
                activeOpacity={0.8}
                style={theme.container}
                className="mt-5 w-20 items-center rounded-3xl bg-white py-3"
              >
                <Image
                  style={{ width: 75, height: 75 }}
                  source={require("@/assets/images/emotions/great.png")}
                />
                <Text className="text-primary-bold font-medium">Great</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={theme.container}
                className="mt-5 w-20 items-center rounded-3xl bg-white py-3"
              >
                <Image
                  style={{ width: 62, height: 75 }}
                  source={require("@/assets/images/emotions/scared.png")}
                />
                <Text className="text-primary-bold font-medium">Fear</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={theme.container}
                className="mt-5 w-20 items-center rounded-3xl bg-white py-3"
              >
                <Image
                  style={{ width: 75, height: 75 }}
                  source={require("@/assets/images/emotions/angry.png")}
                />
                <Text className="text-primary-bold font-medium">Angry</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={theme.container}
                className="mt-5 w-20 items-center rounded-3xl bg-white py-3"
              >
                <Image
                  style={{ width: 75, height: 75 }}
                  source={require("@/assets/images/emotions/sad.png")}
                />
                <Text className="text-primary-bold font-medium">Sad</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            className="mt-10 flex-row gap-5 rounded-3xl bg-white p-5 "
            style={theme.shadow}
          >
            <FontAwesome name="quote-left" size={24} color="#9333EA" />
            <View className="flex-1 gap-4">
              <Text className="text-primary-bold text-2xl font-medium">
                Quote of the Day
              </Text>
              <Text className="text-primary-medium text-xl">
                &quot;You are braver than you believe, stronger than you seem,
                and more loved than you&apos;ll ever know.&quot;
              </Text>
              <Text className="text-primary-light text-xl">- A.A. Milne</Text>
            </View>
          </View>
          <View className="mb-20 mt-10 flex-row justify-between">
            <View
              className="mb-10 w-[47%]  items-center justify-center gap-1 rounded-2xl bg-white p-5"
              style={theme.shadow}
            >
              <LinearGradient
                colors={["#0099E5", "#7860AD"]}
                className="items-center justify-center p-4 "
                style={{
                  borderRadius: 50,
                  width: 55,
                  height: 55,
                  alignSelf: "center",
                }}
              >
                <Ionicons name="chatbubbles" size={24} color="white" />
              </LinearGradient>
              <Text className="text-primary-bold text-lg font-semibold">
                Talk Support
              </Text>
              <Text className="text-primary-light text-center">
                Talk to someone
              </Text>
            </View>
            <View
              className="mb-10 w-[47%] items-center justify-center gap-1 rounded-2xl bg-white p-5"
              style={theme.shadow}
            >
              <LinearGradient
                colors={["#4496BF", "#6CAE8C", "#7E8D82"]}
                className="items-center justify-center p-4"
                style={{
                  borderRadius: 50,
                  width: 55,
                  height: 55,
                  alignSelf: "center",
                }}
              >
                <FontAwesome name="group" size={24} color="white" />
              </LinearGradient>
              <Text className="text-primary-bold text-lg font-semibold">
                Community
              </Text>
              <Text className="text-primary-light">Student Support</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default HomeScreen;
