import ChatHeader from "@/components/messages/ChatHeader";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { onNewMessage, sendMessage } from "@/firebase/chat";
import useAuthStore from "@/store/authStore";

type Message = {
  id: string;
  text: string;
  senderId: string;
  time: string;
};

const VolunteerChatScreen = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const flatListRef = useRef<FlatList<Message>>(null);
  const user = useAuthStore((state) => state.user);
  const { chatId, volunteerId } = useLocalSearchParams();

  useFocusEffect(
    React.useCallback(() => {
      navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" } });
      return () =>
        navigation.getParent()?.setOptions({
          tabBarStyle: {
            position: "absolute",
            bottom: 20,
            left: "8%",
            right: "8%",
            elevation: 5,
            backgroundColor: "#fff",
            borderRadius: 25,
            height: 77,
            marginHorizontal: 20,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 10 },
            shadowRadius: 10,
            borderTopWidth: 0,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
          },
        });
    }, [navigation])
  );

  useEffect(() => {
    if (chatId) {
      const unsubscribe = onNewMessage(chatId as string, setMessages);
      return () => unsubscribe();
    }
  }, [chatId]);

  const handleSend = () => {
    if (!input.trim() || !user) return;

    sendMessage(chatId as string, user.uid, input.trim());
    setInput("");
    Keyboard.dismiss();
  };

  const renderMessage = ({ item }: { item: Message }) => {
    const isCurrentUser = item.senderId === user?.uid;
    return (
      <View
        className={`mb-4 max-w-[85%] ${
          isCurrentUser ? "self-end" : "self-start"
        }`}
      >
        {isCurrentUser ? (
          <View className="rounded-2xl border border-gray-300 bg-white p-4">
            <Text className="text-gray-800">{item.text}</Text>
          </View>
        ) : (
          <LinearGradient
            colors={["#7C3AED", "#4F46E5"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              padding: 16,
              borderTopLeftRadius: 6,
              borderTopRightRadius: 16,
              borderBottomRightRadius: 16,
              borderBottomLeftRadius: 16,
            }}
          >
            <Text className="text-white">{item.text}</Text>
          </LinearGradient>
        )}
        <Text
          className={`mt-1 text-xs text-gray-400 ${
            isCurrentUser ? "text-right" : "text-left"
          }`}
        >
          {isCurrentUser
            ? `${item.time} · You`
            : `Volunteer · ${item.time}`}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ChatHeader
        onPress={() => router.back()}
        profile={require("@/assets/images/user.png")}
        name="Volunteer Support"
        status="Available"
      />
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View className="flex-1 justify-between">
          <FlatList
            data={messages}
            renderItem={renderMessage}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingVertical: 10,
            }}
            ref={flatListRef}
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
              />
            </View>

            <TouchableOpacity
              onPress={handleSend}
              className="rounded-full bg-blue-500 p-3"
            >
              <Ionicons name="send" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default VolunteerChatScreen;
