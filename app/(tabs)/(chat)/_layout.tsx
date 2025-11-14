import { Stack } from "expo-router";
import React from "react";

const ChatLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="messages"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="aiChatbot"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="volunteerChat" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ChatLayout;
