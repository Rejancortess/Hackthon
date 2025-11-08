import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ProfileContainer = ({ userName }: { userName: string }) => {
  return (
    <TouchableOpacity className="order mt-4 flex-row items-center justify-between rounded-2xl border-gray-200 bg-white p-4 px-5 shadow-md shadow-black/5">
      <View className="flex-row gap-3">
        <View
          className="relative items-center rounded-full "
          style={{ height: 50, width: 50 }}
        >
          <Image
            className="relative rounded-full"
            style={{ height: 50, width: 50 }}
            source={require("@/assets/images/user.png")}
          />
          <View className="absolute bottom-2 right-1 h-3 w-3 rounded-full bg-[#29BE2C]"></View>
        </View>

        <View>
          <Text className="text-primary-bold text-lg font-medium">
            {userName}
          </Text>
          <Text className="  text-[#29BE2C]">Online</Text>
        </View>
      </View>

      <View className="rounded-full bg-sky-50 p-2">
        <MaterialCommunityIcons name="chat" size={24} color="#5B9DFF" />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileContainer;
