import { View, Text } from "react-native";
import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/core";

import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import ChatList from "../components/ChatList";

const ChatScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <Header title="Chat" callEnabled />
      <ChatList />
    </SafeAreaView>
  );
};

export default ChatScreen;
