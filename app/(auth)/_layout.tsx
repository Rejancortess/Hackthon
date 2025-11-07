import useAuthStore from "@/store/authStore";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

const AuthLayout = () => {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/(tabs)/(home)");
    }
  }, [isAuthenticated]);

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default AuthLayout;
