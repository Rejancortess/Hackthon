import { GradientBackground } from "@/components/ui/GradientBackground";
import { theme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StyleProp,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

interface MoodEntry {
  date: string;
  mood: string;
  journal: string;
}

interface Mood {
  label: string;
  image: any;
}

const MoodTracker: React.FC = () => {
  const router = useRouter();
  const today = new Date();
  const formattedDate = format(today, "MMMM dd, yyyy");

  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [journal, setJournal] = useState<string>("");

  const moods: Mood[] = [
    { label: "Great", image: require("@/assets/images/emotions/great.png") },
    { label: "Angry", image: require("@/assets/images/emotions/angry.png") },
    { label: "Sad", image: require("@/assets/images/emotions/sad.png") },
    {
      label: "Anxious",
      image: require("@/assets/images/emotions/anxious.png"),
    },
    { label: "Lonely", image: require("@/assets/images/emotions/lonely.png") },
    { label: "Scared", image: require("@/assets/images/emotions/scared.png") },
  ];

  const prompts: Record<string, string> = {
    Great: "What made your day awesome?",
    Angry: "What triggered your anger today?",
    Sad: "What’s making you feel sad?",
    Anxious: "What’s been worrying you lately?",
    Lonely: "What could make you feel more connected?",
    Scared: "What’s causing this fear?",
  };

  const handleSaveMood = async (): Promise<void> => {
    if (!selectedMood) {
      Alert.alert("Please select your mood before saving!");
      return;
    }

    const entry: MoodEntry = {
      date: formattedDate,
      mood: selectedMood,
      journal,
    };

    try {
      const existingData = await AsyncStorage.getItem("moods");
      const existing: MoodEntry[] = existingData
        ? JSON.parse(existingData)
        : [];
      await AsyncStorage.setItem("moods", JSON.stringify([...existing, entry]));

      Alert.alert("Saved ❤️", "Your mood has been recorded successfully.");
      setSelectedMood(null);
      setJournal("");
    } catch (error) {
      console.error("Error saving mood:", error);
      Alert.alert("Error", "Something went wrong while saving your mood.");
    }
  };

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
              {moods.map(mood => {
                const isSelected = selectedMood === mood.label;
                const containerStyle: StyleProp<ViewStyle> = {
                  ...theme.container,
                  width: 90,
                  backgroundColor: isSelected ? "#CFFAFE" : "#fff",
                  borderWidth: isSelected ? 2 : 0,
                  borderColor: isSelected ? "#06B6D4" : "transparent",
                };

                return (
                  <TouchableOpacity
                    key={mood.label}
                    activeOpacity={0.8}
                    onPress={() => {
                      setSelectedMood(mood.label);
                      setJournal(prompts[mood.label] || "");
                    }}
                    style={containerStyle}
                    className="mt-5 items-center rounded-3xl py-3"
                  >
                    <Image
                      style={{ width: 75, height: 75 }}
                      source={mood.image}
                    />
                    <Text className="text-primary-bold font-medium">
                      {mood.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View className="mt-7 w-full rounded-2xl bg-[#E9E6F0] p-4">
              <Text className="mb-3 text-lg font-semibold text-[#2D2A34]">
                Journal (Optional)
              </Text>

              <View className="overflow-hidden rounded-2xl bg-[#DAD5E3] p-3">
                <TextInput
                  placeholder="Write how you feel today..."
                  placeholderTextColor="#6B6B6B"
                  multiline
                  value={journal}
                  onChangeText={setJournal}
                  className="text-base text-[#2D2A34]"
                  style={{ minHeight: 100 }}
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={handleSaveMood}
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
