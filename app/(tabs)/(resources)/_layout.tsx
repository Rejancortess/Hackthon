import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="resources" options={{ headerShown: false }} />
      <Stack.Screen name="sleepGuide" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
