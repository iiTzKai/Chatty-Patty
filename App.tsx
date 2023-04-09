import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterPage}  options={{headerBackVisible: false, title:"Register Page"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
