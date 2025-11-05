import { Entypo, Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Message = {
  id: string;
  text: string;
  sender: "user" | "ai";
  time: string;
};

const AiChatScreen = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const flatListRef = useRef<FlatList<Message>>(null);

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
    setMessages([
      {
        id: "1",
        text: "Hi there! I’m MindLink, your personal mental wellness companion. How are you feeling today?",
        sender: "ai",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      sender: "user",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages(prev => [...prev, newMsg]);
    setInput("");
    Keyboard.dismiss();

    const typingMsg: Message = {
      id: "typing",
      text: "MindLink AI is typing...",
      sender: "ai",
      time: "",
    };
    setMessages(prev => [...prev, typingMsg]);

    try {
      const response = await axios.post(
        "https://kravixstudio.com/api/v1/chat",
        {
          message: [
            {
              role: "system",
              content:
                "You are MindLink, a compassionate mental wellness chatbot that helps users manage their mental health. Speak gently, show empathy, and provide supportive, non-judgmental responses. Avoid medical advice, and focus on emotional support, self-reflection, and coping suggestions.",
            },
            { role: "user", content: input.trim() },
          ],
          aiModel: "gpt-5",
          outputType: "text",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.EXPO_PUBLIC_KRAVIX_API_KEY}`,
          },
        }
      );

      console.log("🔍 Full API Response:", response.data);

      const aiReply =
        typeof response.data.aiResponse === "string"
          ? response.data.aiResponse
          : "No response from AI.";

      setMessages(prev => prev.filter(msg => msg.id !== "typing"));

      const aiMsg: Message = {
        id: Date.now().toString() + "_ai",
        text: aiReply,
        sender: "ai",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error("AI API Error:", error);

      setMessages(prev => prev.filter(msg => msg.id !== "typing"));

      const errorMsg: Message = {
        id: Date.now().toString() + "_error",
        text: "⚠️ Sorry, I couldn’t connect to MindLink’s AI right now. Please try again later.",
        sender: "ai",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages(prev => [...prev, errorMsg]);
    }
  };

  const renderMessage = ({ item }: { item: Message }) => {
    const isAI = item.sender === "ai";
    return (
      <View className={`mb-4 max-w-[85%] ${isAI ? "self-start" : "self-end"}`}>
        {isAI ? (
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
        ) : (
          <View className="rounded-2xl border border-gray-300 bg-white p-4">
            <Text className="text-gray-800">{item.text}</Text>
          </View>
        )}
        <Text
          className={`mt-1 text-xs text-gray-400 ${
            isAI ? "text-left" : "text-right"
          }`}
        >
          {isAI ? `MindLink AI · ${item.time}` : `${item.time} · You`}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center justify-between border-b border-gray-200 px-5 py-3">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back-outline" size={24} color="#111" />
          </TouchableOpacity>

          <Image
            source={require("@/assets/images/Ai-icon.png")}
            style={{ width: 40, height: 40, borderRadius: 50 }}
          />
          <View>
            <Text className="text-lg font-semibold text-gray-900">
              MindLink AI
            </Text>
            <Text className="text-sm font-medium text-green-500">Online</Text>
          </View>
        </View>
        <Entypo name="dots-three-vertical" size={20} color="#111" />
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 16, paddingBottom: 130 }}
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({ animated: true })
          }
        />

        <View className="flex-1 justify-end">
          <View className="w-full flex-row items-center justify-between px-5">
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

          <View className="mt-2 rounded-lg border-t border-red-200 bg-red-50 py-1">
            <Text className="text-center text-xs font-medium text-red-500">
              Crisis Support: 911{"  "}
              <Text className="font-semibold underline">Call Now</Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AiChatScreen;
