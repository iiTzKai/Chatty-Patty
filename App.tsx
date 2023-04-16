import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ChatMenu from "./pages/ChatMenu";
import { useEffect } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const Stack = createNativeStackNavigator();

function App() {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1036527935599-glqqdl49jq5k92g3bmit5dr82m6ivumo.apps.googleusercontent.com',
      offlineAccess: false,

    })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterPage}  options={{headerBackVisible: false, title:"Register Page"}}/>
        <Stack.Screen name="Dashboard" component={ChatMenu} options={{headerShown: false}} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
