import { NavigationContainer } from "@react-navigation/native";
import { useTailwind } from "tailwind-rn";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
