import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
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

    const first = segments[0];
    const inAuthGroup = first === "(auth)";
    const inOnboarding = first === "onBoarding";
    const inTabsGroup = first === "(tabs)";
    const inSettings = first === "settings";

    if (!isOnboardingCompleted && !inOnboarding) {
      router.replace("/onBoarding");
      return;
    }

    if (isOnboardingCompleted && !isAuthenticated && !inAuthGroup) {
      router.replace("/(auth)/login");
      return;
    }

    if (
      isAuthenticated &&
      isOnboardingCompleted &&
      !inTabsGroup &&
      !inSettings
    ) {
      // @ts-ignore
      router.replace("/(tabs)");
      return;
    }
  }, [
    isAuthenticated,
    isOnboardingCompleted,
    isNavigationReady,
    segments.join("/"),
  ]);

  if (!isNavigationReady) return null;

  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <Stack>
        <Stack.Screen name="onBoarding" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="settings"
          options={{
            headerShown: false,
            presentation: "modal",
          }}
        />
      </Stack>
    </>
  );
}
