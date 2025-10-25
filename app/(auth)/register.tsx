// @ts-ignore: allow importing SVGs without type declarations
import Logo from "@/assets/images/app-logo.svg";
import {
  Gradient,
  GradientBackground,
} from "@/components/ui/GradientBackground";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { useState } from "react";
import {
  ActivityIndicator,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useRouter } from "expo-router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <GradientBackground colors={["#FAF5FF", "#EFF6FF", "#E0E7FF"]}>
      <KeyboardAwareScrollView
        className="flex-1 "
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        extraScrollHeight={Platform.OS === "ios" ? 80 : 100}
        contentContainerStyle={{
          paddingTop: 24,
          paddingHorizontal: 24,
        }}
      >
        <View className="mt-20 w-full flex-1 items-center">
          <Logo width={100} height={100} />
          <Text className="text-primary w-full text-center text-4xl font-bold">
            Join MindLink
          </Text>
          <Text className="text-secondary-dark mt-2 px-6 text-center">
            Start your journey to mindfulness living
          </Text>
          <View className="mt-8 w-full px-8">
            <Text className="text-primary font-medium">Username</Text>
            <View className="mb-4 mt-2 flex-row items-center rounded-2xl bg-white px-4 py-2 shadow-md">
              <TextInput
                placeholder="Enter your username"
                placeholderTextColor="#ADAEBC"
                className="h-12 flex-1 px-3 text-gray-800"
                value={username}
                onChangeText={setUsername}
              />
              <Ionicons name="person" size={20} color="#9CA3AF" />
            </View>
            <Text className="text-primary font-medium">Email Address</Text>
            <View className="mb-4 mt-2 flex-row items-center rounded-2xl bg-white px-4 py-2 shadow-md">
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor="#ADAEBC"
                className="h-12 flex-1 px-3 text-gray-800"
                value={email}
                onChangeText={setEmail}
              />
              <Ionicons name="mail" size={20} color="#9CA3AF" />
            </View>
            <Text className="text-primary font-medium">Password</Text>
            <View className="mb-4 mt-2 flex-row items-center rounded-2xl bg-white px-4 py-2 shadow-md">
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="#ADAEBC"
                secureTextEntry={!showPassword}
                className="h-12 flex-1 px-3 text-gray-800"
                value={password}
                onChangeText={setPassword}
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? "eye" : "eye-off"}
                  size={20}
                  color="#9CA3AF"
                />
              </Pressable>
            </View>
            <Pressable className="mt-5 w-full">
              <Gradient
                className="w-full shadow-md shadow-black"
                borderRadius={30}
              >
                <View className="w-lg h-14 items-center justify-center">
                  {loading ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <Text className="font-bold text-white">Create Account</Text>
                  )}
                </View>
              </Gradient>
            </Pressable>
            <Pressable onPress={() => router.back()} className="w-full ">
              <View className="mt-5 w-full flex-row items-center justify-center">
                <Text className="text-secondary-light">
                  Already have an account?
                </Text>

                <Text className="font-medium text-[#7353B9]"> Sign In</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </GradientBackground>
  );
};

export default SignUp;
