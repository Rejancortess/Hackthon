import { GradientBackground } from "@/components/ui/GradientBackground";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { Text, TouchableOpacity, View, ActivityIndicator, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuthStore from "@/store/authStore";
import { getVolunteers } from "@/firebase/user";
import { getOrCreateChat } from "@/firebase/chat";

const Chat = () => {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const fetchVolunteers = async () => {
        setLoading(true);
        const volunteerList = await getVolunteers();
        setVolunteers(volunteerList);
        setLoading(false);
      };
      fetchVolunteers();
    }, [])
  );

  const handlePressVolunteer = async (volunteerId: string) => {
    if (user) {
      const chatId = await getOrCreateChat(user.uid, volunteerId);
      router.push({
        pathname: "/(tabs)/(chat)/volunteerChat",
        params: { chatId, volunteerId },
      });
    }
  };

  return (
    <GradientBackground colors={["#F3E8FF", "#E5E7EB", "#111827"]}>
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-8 ">
          <View className="relative mt-5 flex-row items-center justify-center">
            <TouchableOpacity
              className="absolute left-0"
              onPress={() => router.back()}
              activeOpacity={0.7}
            >
              <Ionicons name="arrow-back-outline" size={28} color="#000" />
            </TouchableOpacity>

            <Text className="text-2xl font-semibold text-gray-800">
              Chat with a Volunteer
            </Text>
          </View>

          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <FlatList
              data={volunteers}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handlePressVolunteer(item.id)}>
                  <View className="p-4 my-2 bg-white rounded-lg">
                    <Text>{item.name || "Anonymous"}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default Chat;
