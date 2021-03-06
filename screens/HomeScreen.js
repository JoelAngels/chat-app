import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/core";

import profile from "../assets/images/person.png";
import icon from "../assets/images/logo.png";

import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";

import Swiper from "react-native-deck-swiper";

import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

const DUMMY_DATA = [
  {
    firstName: "Joél Ramirez ",
    lastName: "Ramirez",
    occupation: "CTO React Developer",
    photoURL:
      "https://joxelstudios.com/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F19fcc952-b0ee-405a-a2ad-996bf8622b9d%2Fimages%2Fc39f6503-a858-44ef-a0ee-6ab31dd8ada1.jpg&w=640&q=80",
    age: 26,
    id: 456,
  },
  {
    firstName: "Joel Angel",
    lastName: "Baraka",
    occupation: "Junior React Developer",
    photoURL: "https://joelangel.web.app/static/media/copy.12fcf0fb.jpg",
    age: 25,
    id: 123,
  },

  {
    firstName: "Mtheus Bertelli",
    lastName: "Bertelli",
    occupation: " React Developer",
    age: 25,
    photoURL:
      "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    firstName: "Rose",
    lastName: "Christina",
    occupation: "Node js Developer",
    photoURL:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    age: 50,
    id: 789,
  },
  {
    firstName: "Joy",
    lastName: "Shantell",
    occupation: "Product Manager",
    photoURL:
      "https://images.pexels.com/photos/764529/pexels-photo-764529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id: 789,
  },
  {
    firstName: "Italo",
    lastName: "Melo",
    occupation: "Product Manager",
    photoURL:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id: 789,
  },
];

const HomeScreen = () => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const navigation = useNavigation();

  const swipeRef = useRef(null);

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`flex-row items-center justify-between px-5`}>
        <TouchableOpacity>
          <Image source={profile} style={tw`rounded-full h-10 w-10`} />
        </TouchableOpacity>

        {/* Tinder Icon */}
        <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
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
          ref={swipeRef}
          containerStyle={{ backgroundColor: "transparent" }}
          cards={DUMMY_DATA}
          stackSize={5}
          verticalSwipe={false}
          animateCardOpacity
          onSwipedLeft={() => {
            console.log("Swiped Left");
          }}
          onSwipedRight={() => {
            console.log("Swiped Right");
          }}
          backgroundColor={"#4FD0E9"}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  color: "#4dED30",
                },
              },
            },
          }}
          renderCard={(card) => (
            <View key={card.id} style={tw`bg-white h-3/4 rounded-xl`}>
              <Image
                style={tw`h-full w-full rounded-xl `}
                source={{ uri: card.photoURL }}
              />

              <View
                style={tw`bg-white w-full h-20 bottom-0 justify-between items-center flex-row px-6 py-2 rounded-b-xl`}
              >
                <View>
                  <Text style={tw`text-xl font-bold`}>
                    {card.firstName} {card.firstLast}
                  </Text>
                  <Text>{card.occupation}</Text>
                </View>
                <Text style={tw`text-2xl font-bold`}>{card.age}</Text>
              </View>
            </View>
          )}
        />
      </View>

      <View style={tw`flex-row justify-evenly`}>
        <TouchableOpacity
          style={tw`items-center justify-center rounded-full w-16 h-16 bg-red-200`}
          onPress={() => swipeRef.current.swipeLeft()}
        >
          <Entypo name="cross" size={24} color="red" />
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`items-center justify-center rounded-full w-16 h-16 bg-red-200`}
          onPress={() => swipeRef.current.swipeRight()}
        >
          <AntDesign name="heart" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

//
{
  /* <Text>I am</Text>
      <Button
        title="Go to chat Screen"
        onPress={() => navigation.navigate("Chat")}
      /> */
}
