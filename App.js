import { NavigationContainer } from "@react-navigation/native";
import { useTailwind } from "tailwind-rn";
import { AuthProvider } from "./hooks/useAuth";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      {/* Higher Order Component */}
      <AuthProvider>
        {/* Passes down the cool auth stuff to children */}
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
