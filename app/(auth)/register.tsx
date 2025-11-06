// @ts-ignore: allow importing SVGs without type declarations
import Logo from "@/assets/images/app-logo.svg";
import {
  Gradient,
  GradientBackground,
} from "@/components/ui/GradientBackground";
import { auth, db } from "@/firebase";
import useAuthStore from "@/store/authStore";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
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

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{
    username?: string;
    email?: string;
    password?: string;
  }>({});
  const router = useRouter();
  const { login, role } = useAuthStore();

  const validate = () => {
    const newErrors: { username?: string; email?: string; password?: string } =
      {};

    if (!username.trim()) newErrors.username = "Username is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email address.";
    if (!password.trim()) newErrors.password = "Password is required.";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async () => {
    if (!validate()) return;

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: username });

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        username: username,
        email: email,
        createdAt: new Date(),
      });

      login();
      if (role === "volunteer") {
        router.replace("/(volunteer)/dashboard");
      } else {
        router.replace("/(tabs)/(home)");
      }
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        setErrors({ email: "This email is already registered." });
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
        <View className="mt-20 w-full flex-1 items-center">
          <Logo width={100} height={100} />
          <Text className="text-primary w-full text-center text-4xl font-bold">
            Join MindLink
          </Text>
          <Text className="text-secondary-dark mt-2 px-6 text-center">
            Start your journey to mindful living
          </Text>

          <View className="mt-8 w-full px-8">
            <Text className="text-primary font-medium">Username</Text>
            <View
              className={`mb-1 mt-2 flex-row items-center rounded-2xl px-4 py-2 shadow-md ${
                errors.username ? "border border-red-400 bg-red-50" : "bg-white"
              }`}
            >
              <TextInput
                placeholder="Enter your username"
                placeholderTextColor="#ADAEBC"
                className="h-12 flex-1 px-3 text-gray-800"
                value={username}
                onChangeText={text => {
                  setUsername(text);
                  if (errors.username)
                    setErrors({ ...errors, username: undefined });
                }}
              />
              <Ionicons
                name="person"
                size={20}
                color={errors.username ? "#DC2626" : "#9CA3AF"}
              />
            </View>
            {errors.username && (
              <Text className="mb-2 text-sm text-red-500">
                {errors.username}
              </Text>
            )}

            <Text className="text-primary font-medium">Email Address</Text>
            <View
              className={`mb-1 mt-2 flex-row items-center rounded-2xl px-4 py-2 shadow-md ${
                errors.email ? "border border-red-400 bg-red-50" : "bg-white"
              }`}
            >
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor="#ADAEBC"
                className="h-12 flex-1 px-3 text-gray-800"
                autoCapitalize="none"
                value={email}
                onChangeText={text => {
                  setEmail(text);
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
              />
              <Ionicons
                name="mail"
                size={20}
                color={errors.email ? "#DC2626" : "#9CA3AF"}
              />
            </View>
            {errors.email && (
              <Text className="mb-2 text-sm text-red-500">{errors.email}</Text>
            )}

            <Text className="text-primary font-medium">Password</Text>
            <View
              className={`mb-1 mt-2 flex-row items-center rounded-2xl px-4 py-2 shadow-md ${
                errors.password ? "border border-red-400 bg-red-50" : "bg-white"
              }`}
            >
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="#ADAEBC"
                secureTextEntry={!showPassword}
                className="h-12 flex-1 px-3 text-gray-800"
                value={password}
                onChangeText={text => {
                  setPassword(text);
                  if (errors.password)
                    setErrors({ ...errors, password: undefined });
                }}
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? "eye" : "eye-off"}
                  size={20}
                  color="#9CA3AF"
                />
              </Pressable>
            </View>
            {errors.password && (
              <Text className="mb-2 text-sm text-red-500">
                {errors.password}
              </Text>
            )}

            <Pressable onPress={handleSignUp} className="mt-5 w-full">
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

            <Pressable onPress={() => router.back()} className="w-full">
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
