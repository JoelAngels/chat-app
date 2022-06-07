import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

import tw from "tailwind-react-native-classnames";

import { useNavigation } from "@react-navigation/core";

import { SafeAreaView } from "react-native-safe-area-context";

const ModalScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const [image, setImage] = useState(null);
  const [job, setJob] = useState(null);
  const [age, setAge] = useState(null);

  //The form is incomplete if there is not image ?? !job && !age;
  const incompleteForm = !image || !job || !age;

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`flex-1 items-center pt-1`}>
        <Image
          style={tw`h-20 w-full`}
          resizeMode="contain"
          source={{
            uri: "https://links.papareact.com/2pf",
          }}
        />
        <Text>Welcome Joel Angel</Text>
        <Text style={tw`text-center p-4 font-bold text-red-400`}>
          Step 1: The Profile Pic
        </Text>
        <TextInput
          value={image}
          onChangeText={(text) => setImage(text)}
          style={tw`text-center text-xl pb-2`}
          placeholder="Enter a Profile Pic URL"
        />

        <Text style={tw`text-center p-4 font-bold text-red-400`}>
          Step 2: The Job or Occupation
        </Text>
        <TextInput
          value={job}
          onChangeText={(text) => setJob(text)}
          style={tw`text-center text-xl  pb-2`}
          placeholder="Enter Your Occupation"
        />

        <Text style={tw`text-center p-4 font-bold text-red-400`}>
          Step 3: The Age
        </Text>
        <TextInput
          value={age}
          onChangeText={(text) => setAge(text)}
          style={tw`text-center  text-xl pb-2`}
          placeholder="Enter your Age"
          keyboardType={"numeric"}
          maxLength={2}
        />
        <TouchableOpacity
          disabled={incompleteForm}
          style={
            (tw`w-64 p-3 rounded-xl absolute bg-red-400 `,
            incompleteForm
              ? tw`bg-gray-400 p-3 w-64 top-40 `
              : tw`bg-red-400 p-3 w-64 top-40`)
          }
        >
          <Text style={tw`text-center text-white text-xl `}>
            Update Profile
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ModalScreen;
