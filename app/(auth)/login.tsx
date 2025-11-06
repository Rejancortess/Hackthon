// @ts-ignore: allow importing SVGs without type declarations
import Logo from "@/assets/images/app-logo.svg";
import {
  Gradient,
  GradientBackground,
} from "@/components/ui/GradientBackground";
import { auth } from "@/firebase";
import useAuthStore from "@/store/authStore";
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

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const router = useRouter();
  const { login, role } = useAuthStore();

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email address.";

    if (!password.trim()) newErrors.password = "Password is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignIn = async () => {
    if (!validate()) return;

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      login();

      if (role === "volunteer") {
        router.replace("/(volunteer)/dashboard");
      } else {
        router.replace("/(tabs)/(home)");
      }
    } catch (error: any) {
      if (error.code === "auth/invalid-credential") {
        setErrors({
          password: "Invalid email or password.",
        });
      } else {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <GradientBackground colors={["#FAF5FF", "#EFF6FF", "#E0E7FF"]}>
      <KeyboardAwareScrollView
        className="flex-1"
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

          <View className="w-full items-center rounded-3xl bg-white p-5 shadow-md">
            <Text className="text-primary text-center text-2xl font-bold">
              Sign In
            </Text>
            <Text className="mt-2 text-[#6B7280]">
              Enter your details to continue
            </Text>

            <View className="mb-2 mt-10 w-full">
              <View
                className={`flex-row items-center rounded-xl px-4 py-2 ${
                  errors.email
                    ? "border border-red-400 bg-red-50"
                    : "bg-gray-100"
                }`}
              >
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color={errors.email ? "#DC2626" : "#9CA3AF"}
                />
                <TextInput
                  placeholder="Email Address"
                  placeholderTextColor="#9CA3AF"
                  className="h-12 flex-1 px-3 text-gray-800"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={text => {
                    setEmail(text);
                    if (errors.email)
                      setErrors({ ...errors, email: undefined });
                  }}
                />
              </View>
              {errors.email && (
                <Text className="mt-1 text-sm text-red-500">
                  {errors.email}
                </Text>
              )}
            </View>

            <View className="mb-2 mt-3 w-full">
              <View
                className={`flex-row items-center rounded-xl px-4 py-2 ${
                  errors.password
                    ? "border border-red-400 bg-red-50"
                    : "bg-gray-100"
                }`}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color={errors.password ? "#DC2626" : "#9CA3AF"}
                />
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#9CA3AF"
                  className="h-12 flex-1 px-3 text-gray-800"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={text => {
                    setPassword(text);
                    if (errors.password)
                      setErrors({ ...errors, password: undefined });
                  }}
                />
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color="#9CA3AF"
                  />
                </Pressable>
              </View>
              {errors.password && (
                <Text className="mt-1 text-sm text-red-500">
                  {errors.password}
                </Text>
              )}
            </View>

            <Pressable onPress={() => {}} className="mt-2 self-end">
              <Text className="text-sm font-medium">Forgot your password?</Text>
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
              onPress={() => router.push("/register")}
              className="w-full"
            >
              <View className="mt-5 w-full flex-row items-center justify-center">
                <Text className="text-secondary-light">
                  Don&apos;t have an account?{" "}
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
