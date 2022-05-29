import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from "../screens/MainScreen";
import BookmarkedScreen from "../screens/BookmarkedScreen";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import AppHeaderIcon from "../components/AppHeaderIcon";
import PostScreen from "../screens/PostScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="BookMarked"
                    component={BookmarkedScreen}
                    options={{ title: 'BookMarked view' }}
                />
                <Tab.Screen
                    name="Home"
                    component={MainScreen}
                    options={{
                        title: 'My home',
                        headerLeft: () => (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item
                                    title='Take photo'
                                    iconName='ios-menu'
                                    onPress={() => console.log('Press photo')}
                                />
                            </HeaderButtons>
                        ) }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}