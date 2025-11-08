import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const UpcomingChat = ({ profileImg }: { profileImg: string }) => {
  return (
    <TouchableOpacity className="mt-4 flex-row items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-md shadow-black/5">
      <View className="flex-row gap-3">
        <Image className="h-12 w-12 rounded-full" source={profileImg as any} />
        <View>
          <Text className="text-primary-bold text-lg font-medium">
            Chat with User
          </Text>
          <Text className="text-primary-light text-sm">
            10:00 AM - 11:00 AM
          </Text>
        </View>
      </View>

      <View className="rounded-full bg-sky-50 p-2">
        <MaterialCommunityIcons name="chat" size={24} color="#5B9DFF" />
      </View>
    </TouchableOpacity>
  );
};

export default UpcomingChat;
