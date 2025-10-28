
import Logo from "@/assets/images/app-logo.svg";
import { GradientBackground } from "@/components/ui/GradientBackground";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      console.log("Messages screen focused");
      return () => {
        console.log("Messages screen unfocused");
      };
    }, [])
  );

  return (
    <GradientBackground colors={["#F3E8FF", "#E5E7EB", "#111827"]}>
      <SafeAreaView className="flex-1">
      <View className="flex-1">
      <View className="mt-5 relative flex-row items-center justify-center">
  <TouchableOpacity
    className="absolute left-0 p-2 ml-5"
    onPress={() => router.back()}
    activeOpacity={0.7}
  >
    <Ionicons name="arrow-back-outline" size={24} color="#000" />
  </TouchableOpacity>

  <Text className="text-2xl font-semibold">Chat Support</Text>
</View>

        <View className="mt-10 w-full items-center justify-center"> 
           <Logo width={120} height={120} />
        </View>
      </View>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default Chat;
