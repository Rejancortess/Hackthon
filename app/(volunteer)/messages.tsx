import ProfileContainer from "@/components/volunteer/ProfileContainer";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Text, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuthStore from "@/store/authStore";
import { getUserChats } from "@/firebase/chat";
import { getUserData } from "@/firebase/user";

const Messages = () => {
  const user = useAuthStore((state) => state.user);
  const router = useRouter();
  const [chats, setChats] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const fetchChats = async () => {
        if (user) {
          setLoading(true);
          const userChats = await getUserChats(user.uid);
          const chatWithUserData = await Promise.all(
            userChats.map(async (chat) => {
              const otherUserId = chat.userIds.find(
                (id: string) => id !== user.uid
              );
              const userData = await getUserData(otherUserId);
              return { ...chat, userData };
            })
          );
          setChats(chatWithUserData);
          setLoading(false);
        }
      };
      fetchChats();
    }, [user])
  );

  const handlePressChat = (chatId: string, userId: string) => {
    router.push({
      pathname: "/(tabs)/(chat)/volunteerChat",
      params: { chatId, volunteerId: userId },
    });
  };

  return (
    <LinearGradient colors={["#F9FAFB", "#949495"]} className="flex-1 ">
      <SafeAreaView className="px-7 pt-20">
        <Text className="text-primary-bold mb-5 text-xl font-semibold">
          MindLink User
        </Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          chats.map((chat) => (
            <ProfileContainer
              key={chat.id}
              userName={chat.userData?.name || "Anonymous"}
              onPress={() => handlePressChat(chat.id, chat.userData?.uid)}
            />
          ))
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Messages;
