import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainScreen from '../screens/MainScreen';
import PostScreen from "../screens/PostScreen";
import {THEME} from "../theme";
import {Platform, Text} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import AppHeaderIcon from "../components/AppHeaderIcon";

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
                    options={{ title: 'My home', headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item title='Take photo' iconName='ios-camera' onPress={() => console.log('Press photo')} />
                                <Item title='Take photo 2' iconName='ios-camera-reverse' onPress={() => console.log('Press photo 2')} />
                            </HeaderButtons>
                        ) }}
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
