import { useFocusEffect, useNavigation } from "expo-router";
import React, { useCallback } from "react";
import { Image, StatusBar, View } from "react-native";

const SleepGuide = () => {
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
    }, [navigation])
  );

  return (
    <View className="flex-1 bg-[#1A2744]">
      <StatusBar barStyle="light-content" />
      <Image
        source={require("@/assets/images/body.png")}
        className="h-screen w-screen flex-1"
      />
    </View>
  );
};

export default SleepGuide;
