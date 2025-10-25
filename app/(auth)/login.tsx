// @ts-ignore: allow importing SVGs without type declarations
import Logo from "@/assets/images/app-logo.svg";
import {
  Gradient,
  GradientBackground,
} from "@/components/ui/GradientBackground";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
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
import { auth } from "../../firebase";
import useAuthStore from "../../store/authStore";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuthStore();

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      login();
      router.replace("/(tabs)");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

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
        <View className="mt-20 w-full flex-1 items-center px-3">
          <View className="shadow-lg shadow-black">
            <View className="overflow-hidden rounded-full">
              <Logo width={120} height={120} />
            </View>
          </View>

          <Text className="text-primary text-4xl font-bold">MindLink</Text>
          <Text className="text-secondary-dark mb-10 mt-2 px-6 text-center">
            Welcome back to your mindfulness journey
          </Text>

          <View className="mt-3 w-full items-center rounded-3xl bg-white p-5 shadow-md">
            <Text className="text-primary text-center text-2xl font-bold">
              Sign In
            </Text>
            <Text className="mt-2 text-[#6B7280]">
              Enter your details to continue
            </Text>

            <View className="mb-4 mt-10 flex-row items-center rounded-xl bg-gray-100 px-4 py-2">
              <Ionicons name="mail-outline" size={20} color="#9CA3AF" />
              <TextInput
                placeholder="Email Address"
                placeholderTextColor="#9CA3AF"
                className="h-12 flex-1 px-3 text-gray-800"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View className="mb-4 mt-2 flex-row items-center rounded-xl bg-gray-100 px-4 py-2">
              <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#9CA3AF"
                className="h-12 flex-1 px-3 text-gray-800"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={20}
                  color="#9CA3AF"
                />
              </Pressable>
            </View>
            <Pressable onPress={() => {}} className="mt-2 self-end">
              <Text className="text-sm font-medium ">
                Forgot your password?
              </Text>
            </Pressable>
            <Pressable
              onPress={handleSignIn}
              className="mt-5 w-full shadow-md shadow-black"
            >
              <Gradient borderRadius={30}>
                <View className="w-lg h-14 items-center justify-center">
                  {loading ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <Text className="font-bold text-white">Sign In</Text>
                  )}
                </View>
              </Gradient>
            </Pressable>

            <Pressable
              onPress={() => {
                router.push("/register");
              }}
              className="w-full "
            >
              <View className="mt-5 w-full flex-row items-center justify-center">
                <Text className="text-secondary-light">
                  Don't have an account?{" "}
                </Text>

                <Text className="font-medium text-[#7353B9]">Sign Up</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </GradientBackground>
  );
};

export default SignIn;
