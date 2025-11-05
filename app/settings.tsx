import useAuthStore from "@/store/authStore";
import React from "react";
import { Button, View } from "react-native";

const Settings = () => {
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Settings;
