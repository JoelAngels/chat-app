import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/core";

import profile from "../assets/images/person.png";
import icon from "../assets/images/logo.png";

import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={tw`flex-row items-center justify-between px-5`}>
        <TouchableOpacity>
          <Image source={profile} style={tw`rounded-full h-10 w-10`} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={icon} style={tw`rounded-full h-14 w-14`} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="chatbubbles-sharp" size={30} color="#FF5864" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

//
{
  /* <Text>I am</Text>
      <Button
        title="Go to chat Screen"
        onPress={() => navigation.navigate("Chat")}
      /> */
}
