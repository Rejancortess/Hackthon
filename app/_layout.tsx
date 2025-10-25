import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import "../global.css";
import useAuthStore from "../store/authStore";

export default function RootLayout() {
  const { isAuthenticated, isOnboardingCompleted } = useAuthStore();
  const router = useRouter();
  const segments = useSegments();
  const [isNavigationReady, setNavigationReady] = useState(false);

  useEffect(() => {
    setNavigationReady(true);
  }, []);

  useEffect(() => {
    if (!isNavigationReady) return;

    const inAuthGroup = segments[0] === "(auth)";
    const inOnboarding = segments[0] === "onBoarding";
    const inTabsGroup = segments[0] === "(tabs)";

    if (isAuthenticated && isOnboardingCompleted && !inTabsGroup) {
      router.replace("/(tabs)");
    } else if (isOnboardingCompleted && !isAuthenticated && !inAuthGroup) {
      router.replace("/(auth)/login");
    } else if (!isOnboardingCompleted && !inOnboarding) {
      router.replace("/onBoarding");
    }
  }, [isAuthenticated, isOnboardingCompleted, segments, isNavigationReady]);

  if (!isNavigationReady) {
    return null; // or a loading spinner
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack>
        <Stack.Screen name="onBoarding" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
