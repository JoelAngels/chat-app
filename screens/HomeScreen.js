import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/core";

import profile from "../assets/images/person.png";
import icon from "../assets/images/logo.png";

import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";

import Swiper from "react-native-deck-swiper";

const HomeScreen = () => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const navigation = useNavigation();

  const DUMMY_DATA = [
    {
      firstName: "Sonny",
      lastName: "Sangha",
      occupation: "React Developer",
      photoURL:
        "https://lh3.googleusercontent.com/tEtrmaGdDKaViKP2zQkdCWXOQIfVclVc2xVgyRDz0YMeYxeaJPNASzDKu4WV5LI8zAgnf3gUcmmeorka8GjX3Km3rwFAa4Qt4hKSF41Ki8d9EhojfhVxkyRCncpNOS0hljPMJJvKtNbfhEgRmnKlt-DZgGenHQOG86G9haVfVfZ3fE-DkcIOtqpaiyRUvb0c9cjylB6YV6l9LxQJ7KDe162Cqzms9j412e4IZKr4I7oJaB5w4_JQHAbD7ppEfogXQPCLoMmG0l40XlwT4PX_5Ko_u5LFGlFtdPlwHg13F3vgIZtm2AOSiKKDloLBFbcQqgEPsWGtRiQfY4nTuMD5Ycc06oSZSrdix4ghjdzIr_pLfvi8dPrAIskzYFAjw2rqKnt6if5L2LetcbddOuoTgYpywROnGya9b5CJbpIS__QY3d51ET47FHDTxcriOMtMKTRRB6rbZP0ayxYrnk4a7OYOfQfzWNcyevtf4UDcoT6o1WvoLy7cfKgINLfOdzhERc3kLYa7Dlrm0933_IRMANxnTK_neJFwh8FjI85ncQqk1AWvZUK1xLvVNlF2fP-O_CJ02rnw3O9h_1JrLVtrBJK_GhOeLtgDyaDicmAkjK3W2Ntdl1QFxCeLRWqmA7-C6KYmyYJ7Agx836Cn5gE6M63HW1Gvm5IrEcMP-kqTq-xMEGbNGx9Fi12hpltEhbCCkq-FNebPOhnWFCrZKO5eSIZv2bxGfolXI84A-RRAWzgFrR0dFpv5d7n1VibytMqFH0OzlIhQ618VqrfzH_jM3vrXEwtSBr3-6hWWS1cX_v4ENiyGT9LEVulNW09_n1La1hWxRNVgMTNjWJykiMbTXbuDlq0eXK4QWZ-4TyM=s234-no?authuser=0",
      age: 25,
      id: 123,
    },
    {
      firstName: "Sonny",
      lastName: "Sangha",
      occupation: "React Developer",
      photoURL:
        "https://joxelstudios.com/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F19fcc952-b0ee-405a-a2ad-996bf8622b9d%2Fimages%2Fc39f6503-a858-44ef-a0ee-6ab31dd8ada1.jpg&w=640&q=80",
      age: 25,
      id: 456,
    },
    {
      firstName: "Sonny",
      lastName: "Sangha",
      occupation: "React Developer",
      photoURL: "https://joelangel.web.app/static/media/copy.12fcf0fb.jpg",
      age: 25,
      id: 789,
    },
  ];

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`flex-row items-center justify-between px-5`}>
        <TouchableOpacity>
          <Image source={profile} style={tw`rounded-full h-10 w-10`} />
        </TouchableOpacity>

        {/* Tinder Icon */}
        <TouchableOpacity>
          <Image source={icon} style={tw`rounded-full h-14 w-14`} />
        </TouchableOpacity>

        {/* Messages Icon */}
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Ionicons name="chatbubbles-sharp" size={30} color="#FF5864" />
        </TouchableOpacity>
      </View>

      {/* End Of Header */}

      <View style={tw`flex-1 -mt-6`}>
        <Swiper
          containerStyle={{ backgroundColor: "transparent" }}
          cards={DUMMY_DATA}
          renderCard={(card) => (
            <View key={card.id} style={tw`bg-red-500 h-3/4 rounded-xl`}>
              <Text>{card.firstName}</Text>
            </View>
          )}
        />
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
