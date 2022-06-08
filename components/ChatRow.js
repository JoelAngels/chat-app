import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import profile from "../assets/images/person.png";
import tw from "tailwind-react-native-classnames";

const ChatRow = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={tw`flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg`}
      onPress={() => navigation.navigate("Message")}
    >
      <Image source={profile} style={tw`rounded-full h-16 w-16 mr-4`} />

      <View>
        <Text style={tw`text-lg font-semibold`}>Calvin Klein</Text>
        <Text style={tw``}>You forgot to attend the meeting ? </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatRow;
