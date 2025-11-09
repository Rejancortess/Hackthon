import { Entypo, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type ChatHeaderProps = {
  onPress: () => void;
  profile?: string;
  name?: string;
  status?: string;
};

const ChatHeader = ({ onPress, profile, name, status }: ChatHeaderProps) => {
  return (
    <View className="flex-row items-center justify-between border-b border-gray-200 px-5 py-3">
      <View className="flex-row items-center gap-3">
        <TouchableOpacity onPress={onPress}>
          <Ionicons name="arrow-back-outline" size={24} color="#111" />
        </TouchableOpacity>

        <Image
          // @ts-ignore
          source={profile}
          style={{ width: 40, height: 40, borderRadius: 50 }}
        />
        <View>
          <Text className="text-lg font-semibold text-gray-900">
            {name || "Support Agent"}
          </Text>
          <Text className="text-sm font-medium text-green-500">
            {status || "Online"}
          </Text>
        </View>
      </View>
      <Entypo name="dots-three-vertical" size={20} color="#111" />
    </View>
  );
};

export default ChatHeader;
