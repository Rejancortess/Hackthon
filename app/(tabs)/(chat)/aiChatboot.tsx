import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect, useNavigation, useRouter } from "expo-router";
import { useCallback } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AiChatScreen = () => {
  const router = useRouter();
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: "none",
        },
      });
      return () => {
        navigation.getParent()?.setOptions({
          tabBarStyle: {
            position: "absolute",
            bottom: 20,
            left: "8%",
            right: "8%",
            elevation: 5,
            backgroundColor: "#fff",
            borderRadius: 25,
            height: 77,
            marginHorizontal: 20,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 10 },
            shadowRadius: 10,
            borderTopWidth: 0,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
          },
        });
      };
    }, [])
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between border-b border-gray-200 px-5 py-3">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back-outline" size={24} color="#111" />
          </TouchableOpacity>

          <Image
            source={require("@/assets/images/Ai-icon.png")}
            style={{ width: 40, height: 40, borderRadius: 50 }}
          />
          <View>
            <Text className="text-lg font-semibold text-gray-900">
              MindLink AI
            </Text>
            <Text className="text-sm font-medium text-green-500">Online</Text>
          </View>
        </View>

        <Entypo name="dots-three-vertical" size={20} color="#111" />
      </View>

      {/* Chat Messages */}
      <ScrollView
        className="flex-1 px-5 py-3"
        showsVerticalScrollIndicator={false}
      >
        {/* AI Message */}
        <View className="mb-4 max-w-[85%] self-start">
          <LinearGradient
            colors={["#7C3AED", "#4F46E5"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="p-4 "
            style={{ borderRadius: 16 }}
          >
            <Text className="text-white">
              Hi there! I&apos;m MindLink, your personal mental wellness
              companion. How are you feeling today?
            </Text>
          </LinearGradient>
          <Text className="mt-1 text-xs text-gray-400">
            MindLink AI · 2:34 PM
          </Text>
        </View>

        {/* User Message */}
        <View className="mb-4 max-w-[85%] self-end">
          <View className="rounded-2xl border border-gray-300 bg-white p-4">
            <Text className="text-gray-800">
              I’ve been feeling anxious and unmotivated lately.
            </Text>
          </View>
          <Text className="mt-1 text-right text-xs text-gray-400">
            2:35 PM · You
          </Text>
        </View>

        {/* AI Response */}
        <View className="mb-4 max-w-[85%] self-start">
          <LinearGradient
            colors={["#7C3AED", "#4F46E5"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="p-4 "
            style={{ borderRadius: 16 }}
          >
            <Text className="text-white">
              That’s okay, and I’m really glad you reached out. Would you like
              to talk about what’s been causing that anxiety, or try a quick
              breathing exercise to ease your mind?
            </Text>
          </LinearGradient>
          <Text className="mt-1 text-xs text-gray-400">
            MindLink AI · 2:36 PM
          </Text>
        </View>

        {/* AI Options */}
        <View className="mt-2 space-y-2">
          <TouchableOpacity className="flex-row items-center justify-center rounded-full border border-gray-300 px-5 py-3">
            <MaterialCommunityIcons
              name="leaf"
              size={18}
              color="#10B981"
              style={{ marginRight: 8 }}
            />
            <Text className="font-medium text-gray-700">
              Try breathing exercise
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-center rounded-full border border-gray-300 px-5 py-3">
            <Ionicons
              name="bulb-outline"
              size={18}
              color="#FBBF24"
              style={{ marginRight: 8 }}
            />
            <Text className="font-medium text-gray-700">Show stress tips</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-center rounded-full border border-gray-300 px-5 py-3">
            <Ionicons
              name="chatbubble-outline"
              size={18}
              color="#6B7280"
              style={{ marginRight: 8 }}
            />
            <Text className="font-medium text-gray-700">
              I just want to talk
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Message Input */}
      <View className="flex-row items-center justify-between border-t border-gray-200 px-5 py-3">
        <View className="mr-3 flex-1 flex-row items-center rounded-full bg-gray-100 px-4 py-2">
          <TextInput
            placeholder="Type your message..."
            placeholderTextColor="#9CA3AF"
            className="flex-1 text-gray-800"
          />
        </View>

        <TouchableOpacity className="rounded-full bg-blue-500 p-3">
          <Ionicons name="send" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Crisis Support Footer */}
      <View className="border-t border-red-200 bg-red-50 py-2">
        <Text className="text-center text-sm font-medium text-red-500">
          Crisis Support: 911{"  "}
          <Text className="font-semibold underline">Call Now</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AiChatScreen;
