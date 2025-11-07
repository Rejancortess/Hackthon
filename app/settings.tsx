import useAuthStore from "@/store/authStore";
import React from "react";
import { Button, View } from "react-native";

const Settings = () => {
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Settings;
