import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type HeaderProps = {
  loading: boolean;
  username: string | null;
  onPress: () => void;
};

const Header = ({ loading, username, onPress }: HeaderProps) => {
  return (
    <View className="mt-5 w-full flex-row items-center ">
      <Image
        source={require("@/assets/images/profile.png")}
        className="mr-5 rounded-full border-2 border-white shadow-md shadow-black"
        style={{
          width: 48,
          height: 48,
        }}
        resizeMode="contain"
      />
      <View className="flex-1">
        {loading ? (
          <ActivityIndicator size="small" color="#000" />
        ) : (
          <>
            <Text className="text-primary-bold text-xl font-bold">
              Hi {username || "User"}!
            </Text>
            <Text className="text-primary-light text-lg">Welcome back</Text>
          </>
        )}
      </View>
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <Ionicons name="settings-outline" size={26} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
