import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type PeerVolunteerProps = {
  onPress: () => void;
};

const PeerVolunteer = ({ onPress }: PeerVolunteerProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="mt-6 flex-row items-center rounded-3xl bg-white p-5"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 6,
      }}
      activeOpacity={0.8}
    >
      {/* Icon */}
      <View className="h-20 w-20 items-center justify-center">
        <Image
          source={require("@/assets/images/Volunteer-icon.png")}
          style={{
            width: 70,
            height: 70,
            resizeMode: "contain",
          }}
        />
      </View>

      {/* Content */}
      <View className="flex-1 pl-4">
        <View className="flex-row items-start justify-between">
          <Text className="text-primary-bold text-xl font-semibold leading-tight">
            Peer{"\n"}Volunteers
          </Text>

          <View className="rounded-full bg-green-100 px-3 py-1">
            <Text className="text-sm font-medium text-green-700">
              Available
            </Text>
          </View>
        </View>

        <Text className="mt-2 leading-5 text-gray-500">
          Connect with fellow students who understand your experiences.
        </Text>

        <View className="mt-3 flex-row items-center gap-2">
          <MaterialIcons name="groups" size={20} color="#6B7280" />
          <Text className="text-gray-400">3 volunteers online</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PeerVolunteer;
