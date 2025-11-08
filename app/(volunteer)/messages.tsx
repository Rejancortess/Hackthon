import ProfileContainer from "@/components/volunteer/ProfileContainer";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Messages = () => {
  useFocusEffect(
    useCallback(() => {
      return () => {};
    }, [])
  );
  return (
    <LinearGradient colors={["#F9FAFB", "#949495"]} className="flex-1 ">
      <SafeAreaView className="px-7 pt-20">
        <Text className="text-primary-bold mb-5 text-xl font-semibold">
          MindLink User
        </Text>
        <ProfileContainer userName="John" />
        <ProfileContainer userName="Doe" />
        <ProfileContainer userName="Mark" />
        <ProfileContainer userName="Smith" />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Messages;
