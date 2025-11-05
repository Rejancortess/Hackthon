import FeelingToday from "@/components/home/FeelingToday";
import Header from "@/components/home/Header";
import MoodTrackerCard from "@/components/home/MoodTrackerCard";
import Qoute from "@/components/home/Qoute";
import QuickAccess from "@/components/home/QuickAccess";
import { GradientBackground } from "@/components/ui/GradientBackground";
import { auth, db } from "@/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = doc(db, "users", user.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setUsername(userData.username);

            await AsyncStorage.setItem("username", userData.username);
          } else {
            console.warn("No user document found in Firestore!");
          }
        } else {
          console.warn("No authenticated user found!");
        }
      } catch (error) {
        console.error("Error fetching username:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsername();
  }, []);

  const handleMoodPress = () => {
    router.push(`/moodTracker`);
  };

  return (
    <GradientBackground colors={["#C8A2C8", "#B5B5B5", "#111827"]}>
      <SafeAreaView className="flex-1 px-8">
        <ScrollView className="flex-1 " showsVerticalScrollIndicator={false}>
          <Header
            loading={loading}
            username={username || "MindLink User"}
            onPress={() => router.push("/settings")}
          />

          <FeelingToday />
          <Qoute />
          <QuickAccess
            talkRoute={() => {
              router.push("/(tabs)/(chat)/messages");
            }}
            communityRoute={() => {
              router.push("/studentSupport");
            }}
          />
          <MoodTrackerCard onPress={handleMoodPress} />
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default HomeScreen;
