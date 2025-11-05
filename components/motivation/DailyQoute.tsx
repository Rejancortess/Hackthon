import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const DailyQoute = ({
  isFavorited,
  setIsFavorited,
}: {
  isFavorited: boolean;
  setIsFavorited: (value: boolean) => void;
}) => {
  return (
    <View
      className="mt-8 rounded-3xl bg-white px-8 py-5"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 6,
      }}
    >
      <View className="w-full items-end">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setIsFavorited(!isFavorited)}
        >
          <Ionicons
            name={isFavorited ? "heart" : "heart-outline"}
            size={24}
            color={isFavorited ? "#EF4444" : "#9CA3AF"}
          />
        </TouchableOpacity>
      </View>
      <Text className="text-primary-bold mt-2 text-2xl font-medium">
        &quot;Every morning brings new potential, but only if you get up and
        embrace it.&quot;
      </Text>
      <Text className="mt-3">— Maya Angelou</Text>
    </View>
  );
};

export default DailyQoute;
