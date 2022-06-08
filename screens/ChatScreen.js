import { View, Text } from "react-native";
import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/core";

import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

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
    </SafeAreaView>
  );
};

export default ChatScreen;
