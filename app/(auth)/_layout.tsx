import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import useAuthStore from "../../store/authStore"; // Adjust the path to your store

const AuthLayout = () => {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/(tabs)");
    }
  }, [isAuthenticated]);

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default AuthLayout;
