import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useTailwind } from "tailwind-rn";

export default function App() {
  const tailwind = useTailwind();
  return (
    <View style={tailwind("flex-1 justify-center items-center")}>
      <Text>Tinder Incoming!</Text>
      <Button title="click" />
      <StatusBar style="auto" />
    </View>
  );
}
