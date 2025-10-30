import { GradientBackground } from "@/components/ui/GradientBackground";
import { theme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { format } from "date-fns";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback } from "react";
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

const MoodTracker = () => {
  const router = useRouter();
  const today = new Date();
  const formattedDate = format(today, "MMMM dd, yyyy");

  useFocusEffect(
    useCallback(() => {
      return () => {};
    }, [])
  );

  return (
    <GradientBackground colors={["#E6E6FA", "#D3D3D3"]}>
      <SafeAreaView className="flex-1">
        <KeyboardAwareScrollView
          className="flex-1"
          keyboardShouldPersistTaps="handled"
          enableOnAndroid={true}
          extraScrollHeight={Platform.OS === "ios" ? 80 : 100}
        >
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
                Mood Tracker
              </Text>
            </View>

            <View className="mt-10 items-center">
              <Text className="text-primary-light text-lg">Today</Text>
              <Text className="text-primary-bold text-2xl font-semibold">
                {formattedDate}
              </Text>
            </View>

            <View className="mt-10 items-center">
              <Text className="text-primary-bold text-2xl font-bold">
                How are you feeling today?
              </Text>
              <Text className="text-primary-light">
                Tap an emoji to express your mood
              </Text>
            </View>

            <View className="w-full flex-row flex-wrap justify-evenly">
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ ...theme.container, width: 90 }}
                className="mt-5 items-center rounded-3xl bg-white py-3"
              >
                <Image
                  style={{ width: 75, height: 75 }}
                  source={require("@/assets/images/emotions/great.png")}
                />
                <Text className="text-primary-bold font-medium">Great</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={{ ...theme.container, width: 90 }}
                className="mt-5 items-center rounded-3xl bg-white py-3"
              >
                <Image
                  style={{ width: 75, height: 75 }}
                  source={require("@/assets/images/emotions/angry.png")}
                />
                <Text className="text-primary-bold font-medium">Angry</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={{ ...theme.container, width: 90 }}
                className="mt-5 items-center rounded-3xl bg-white py-3"
              >
                <Image
                  style={{ width: 75, height: 75 }}
                  source={require("@/assets/images/emotions/sad.png")}
                />
                <Text className="text-primary-bold font-medium">Sad</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={{ ...theme.container, width: 90 }}
                className="mt-5 items-center rounded-3xl bg-white py-3"
              >
                <Image
                  style={{ width: 75, height: 75 }}
                  source={require("@/assets/images/emotions/anxious.png")}
                />
                <Text className="text-primary-bold font-medium">Anxious</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={{ ...theme.container, width: 90 }}
                className="mt-5 items-center rounded-3xl bg-white py-3"
              >
                <Image
                  style={{ width: 75, height: 75 }}
                  source={require("@/assets/images/emotions/lonely.png")}
                />
                <Text className="text-primary-bold font-medium">Lonely</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={{ ...theme.container, width: 90 }}
                className="mt-5 items-center rounded-3xl bg-white py-3"
              >
                <Image
                  style={{ width: 62, height: 75 }}
                  source={require("@/assets/images/emotions/scared.png")}
                />
                <Text className="text-primary-bold font-medium">Scared</Text>
              </TouchableOpacity>
            </View>

            <View className="mt-7 w-full rounded-2xl bg-[#E9E6F0] p-4">
              <Text className="mb-3 text-lg font-semibold text-[#2D2A34]">
                Journal (Optional)
              </Text>

              <View className=" overflow-hidden rounded-2xl bg-[#DAD5E3] p-3">
                <TextInput
                  placeholder="Write how you feel today..."
                  placeholderTextColor="#6B6B6B"
                  multiline
                  className="text-base text-[#2D2A34]"
                />
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              className="mt-7 w-full flex-row items-center justify-center gap-5 rounded-full bg-emerald-400 py-4"
              style={{ marginBottom: 100 }}
            >
              <Entypo name="heart" size={24} color="black" />
              <Text className="text-primary-bold text-xl font-semibold">
                Save Mood
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default MoodTracker;
