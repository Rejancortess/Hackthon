import { Ionicons } from "@expo/vector-icons";
import React, { JSX } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Message = {
  id: string;
  text: string;
  sender: "user" | "volunteer";
  time: string;
};

type ChatBodyProps = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSend: () => void;
  messages: Message[];
  flatListRef: React.RefObject<FlatList<Message>>;
  renderMessage: ({ item }: { item: Message }) => JSX.Element;
};

const ChatBody = ({
  input,
  setInput,
  handleSend,
  messages,
  flatListRef,
  renderMessage,
}: ChatBodyProps) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 10,
        }}
        keyboardShouldPersistTaps="handled"
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({ animated: true })
        }
      />

      <View
        style={{
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderColor: "#E5E7EB",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <View className="mr-3 flex-1 flex-row items-center rounded-full bg-gray-100 px-4 py-2">
          <TextInput
            placeholder="Type your message..."
            placeholderTextColor="#9CA3AF"
            className="flex-1 text-gray-800"
            value={input}
            onChangeText={setInput}
            onSubmitEditing={handleSend}
            returnKeyType="send"
            blurOnSubmit={false}
          />
        </View>
        <TouchableOpacity
          onPress={handleSend}
          className="rounded-full bg-blue-500 p-3"
        >
          <Ionicons name="send" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatBody;
