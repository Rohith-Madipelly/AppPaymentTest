import { createNativeStackNavigator } from "@react-navigation/native";

import { Home } from './Home'
import { GamePage } from './GamePage'

const { Navigator, Screen } = createNativeStackNavigator();
// import * as Linking from 'expo-linking';

// const prefix = Linking.createURL('/');

export function AppRoutes() {

    return (
        <Navigator>
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="GamePage"
                component={GamePage}
            />
        </Navigator>
    )
}