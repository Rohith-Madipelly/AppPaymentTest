import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home";
import GamePage from "./GamePage";
import { useEffect } from "react";
import { Linking } from "react-native";

const Stack = createNativeStackNavigator();


const linkingLocal = {
    prefixes: ['exp://192.168.0.107:8081/--/ezewin'],
    // prefixes: ['exp://eze-win.com/--/ezewin'],
    config: {
        screens: {
            Home: 'home',
            GamePage: 'GamePage'
        }
    }
};
const handleDeeplink=(e)=>{
    // console.log("csd")
    console.log("123",e.url);
}




export function Routes() {
    useEffect(() => {
        Linking.addEventListener("url", handleDeeplink);
        return () => {
            // Linking.removeEventListener("url", handleDeeplink);
        };
    }, []);
    return (
        <NavigationContainer 
        linking={linkingLocal}
        >
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="GamePage" component={GamePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}