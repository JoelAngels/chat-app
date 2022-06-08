import {
  View,
  Text,
  TextInput,
  Platform,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";

import tw from "tailwind-react-native-classnames";

const MessageScreen = () => {
  const [input, setInput] = useState("");
  const sendMessage = () => {};
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={tw`flex-1`}>
      <Header title="Calvin Klein" callEnabled />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={tw`flex-1`}
        keyboardVerticalOffset={10}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <Text>Joel</Text>
            <Text>Joel</Text>
            <Text>Joel</Text>
            <Text>Joel</Text>
            <Text>Joel</Text>
            <Text>Joel</Text>
            <Text>Joel</Text>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View
        style={tw`flex-row bg-white justify-between items-center border-t border-gray-200 px-5 py-2`}
      >
        <TextInput
          style={tw`h-10 text-lg`}
          placeholder="Send Message"
          onChangeText={setInput}
          onSubmitEditing={sendMessage}
          value={input}
        />

        <Button onPress={sendMessage} title="Send" color="#FF5864" />
      </View>
    </SafeAreaView>
  );
};

export default MessageScreen;
