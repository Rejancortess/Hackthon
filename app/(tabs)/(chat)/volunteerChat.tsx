import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRouter } from "expo-router";
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

type Message = {
  id: string;
  text: string;
  sender: "user" | "volunteer";
  time: string;
};

const VolunteerChatScreen = () => {
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
        text: "Hi there! I’m your volunteer from MindLink Support. How are you doing today?",
        sender: "volunteer",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  }, []);

  const handleSend = () => {
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

    setTimeout(() => {
      const volunteerReply: Message = {
        id: Date.now().toString() + "_volunteer",
        text: "Thanks for sharing! I’m here to listen. Would you like to tell me more about what’s been going on?",
        sender: "volunteer",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages(prev => [...prev, volunteerReply]);
    }, 2000);
  };

  const renderMessage = ({ item }: { item: Message }) => {
    const isVolunteer = item.sender === "volunteer";
    return (
      <View
        className={`mb-4 max-w-[85%] ${isVolunteer ? "self-start" : "self-end"}`}
      >
        {isVolunteer ? (
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
            isVolunteer ? "text-left" : "text-right"
          }`}
        >
          {isVolunteer ? `Volunteer · ${item.time}` : `${item.time} · You`}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View className="flex-1 justify-between">
          <FlatList
            data={messages}
            renderItem={renderMessage}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingVertical: 10,
            }}
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
