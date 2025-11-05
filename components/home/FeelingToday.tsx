import { theme } from "@/theme";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const FeelingToday = () => {
  return (
    <View className="mt-10 rounded-3xl bg-white p-5" style={theme.shadow}>
      <Text className="text-primary-bold text-2xl font-bold">
        How are you feeling today?
      </Text>
      <Text className="text-primary-light mt-3 text-xl">
        Take a moment to check in with yourself.
      </Text>
      <View className="flex-row justify-around">
        <TouchableOpacity
          activeOpacity={0.8}
          style={theme.container}
          className="mt-5 w-20 items-center rounded-3xl bg-white py-3"
        >
          <Image
            style={{ width: 75, height: 75 }}
            source={require("@/assets/images/emotions/great.png")}
          />
          <Text className="text-primary-bold font-medium">Great</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={theme.container}
          className="mt-5 w-20 items-center rounded-3xl bg-white py-3"
        >
          <Image
            style={{ width: 75, height: 75 }}
            source={require("@/assets/images/emotions/scared.png")}
          />
          <Text className="text-primary-bold font-medium">Fear</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={theme.container}
          className="mt-5 w-20 items-center rounded-3xl bg-white py-3"
        >
          <Image
            style={{ width: 75, height: 75 }}
            source={require("@/assets/images/emotions/angry.png")}
          />
          <Text className="text-primary-bold font-medium">Angry</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={theme.container}
          className="mt-5 w-20 items-center rounded-3xl bg-white py-3"
        >
          <Image
            style={{ width: 75, height: 75 }}
            source={require("@/assets/images/emotions/sad.png")}
          />
          <Text className="text-primary-bold font-medium">Sad</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeelingToday;
