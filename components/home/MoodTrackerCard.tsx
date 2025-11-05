import Octicons from "@expo/vector-icons/Octicons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const MoodTracker = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <LinearGradient
        colors={["#B8E6B8", "#B8E0F5"]}
        style={{ marginBottom: 100 }}
        className="mb-10 flex-row items-center justify-between overflow-hidden rounded-3xl border-2 border-white p-6"
      >
        <View>
          <Text className="text-primary-bold text-2xl font-bold">
            Mood Tracker
          </Text>
          <Text className="text-primary-light text-lg">
            Track your daily emotions
          </Text>
        </View>
        <Octicons name="graph" size={29} color="black" />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default MoodTracker;
