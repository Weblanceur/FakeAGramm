import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainScreen from '../screens/MainScreen';
import PostScreen from "../screens/PostScreen";
import {THEME} from "../theme";
import {Platform} from "react-native";

const Stack = createNativeStackNavigator();

export const createAppNavigation = ''

export default function AppNavigation() {
    const routes = {
        prefixes: ['https://app.com', 'app://'],
        initialRouteName: 'Main',
        config: {
            screens: {
                Main: '/',
                Post: '/post/:id'
            }
        },
        Main: {
            screen: MainScreen
        },
        Post: {
            screen: PostScreen
        }
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
                    },
                    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={MainScreen}
                    options={{ title: 'My home' }}
                />
                <Stack.Screen
                    name="Post"
                    component={PostScreen}
                    options={{ title: 'Post view' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
