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
        name="aiChatboot"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default ChatLayout;
