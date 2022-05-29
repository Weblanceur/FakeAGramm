import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import PostScreen from "../screens/PostScreen";
import {THEME} from "../theme";
import {Platform} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import AppHeaderIcon from "../components/AppHeaderIcon";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import BookmarkedScreen from "../screens/BookmarkedScreen";
import {Ionicons} from "@expo/vector-icons";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";
import AboutScreen from "../screens/AboutScreen";
import CreateScreen from "../screens/CreateScreen";

const Drawer = createDrawerNavigator();
const Main = createNativeStackNavigator();
const Booked = createNativeStackNavigator();
const About = createNativeStackNavigator();
const Create = createNativeStackNavigator();
const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const defaultHeaderOptions: any = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}

function HomeStackNavigator({navigation}: any) {
    return (
        <Main.Navigator
            screenOptions={defaultHeaderOptions}
        >
            <Main.Screen
                name="Home"
                component={MainScreen}
                options={{
                    title: 'Старт',
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title='Take photo'
                                iconName='ios-menu'
                                onPress={() => navigation.toggleDrawer()}
                            />
                        </HeaderButtons>
                    ),
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title='Create Post'
                                iconName='ios-camera'
                                onPress={() => navigation.navigate('Create Post')}
                            />
                        </HeaderButtons>
                    )
                }}
            />
            <Main.Screen
                name="Post"
                component={PostScreen}
                options={{title: 'Post view'}}
            />
        </Main.Navigator>
    );
}

function BookedStackNavigator({navigation}: any) {
    return (
        <Booked.Navigator screenOptions={defaultHeaderOptions}>
            <Booked.Screen
                name="BookMarked"
                component={BookmarkedScreen}
                options={{
                    title: 'Избранное',
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title='Menu'
                                iconName='ios-menu'
                                onPress={() => navigation.toggleDrawer()}
                            />
                        </HeaderButtons>
                    )
                }}
            />
            <Booked.Screen
                name="Post"
                component={PostScreen}
                options={{title: 'Post view'}}
            />
        </Booked.Navigator>
    )
}

function AboutStackNavigator({navigation}: any) {
    return (
        <About.Navigator screenOptions={defaultHeaderOptions}>
            <About.Screen
                name="About"
                component={AboutScreen}
                options={{
                    title: 'О нас',
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title='Menu'
                                iconName='ios-menu'
                                onPress={() => navigation.toggleDrawer()}
                            />
                        </HeaderButtons>
                    )
                }}
            />
        </About.Navigator>
    )
}

function CreateStackNavigator({navigation}: any) {
    return (
        <Create.Navigator screenOptions={defaultHeaderOptions}>
            <Create.Screen
                name="Create"
                component={CreateScreen}
                options={{
                    title: 'Создание поста',
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title='Menu'
                                iconName='ios-menu'
                                onPress={() => navigation.toggleDrawer()}
                            />
                        </HeaderButtons>
                    )
                }}
            />
        </Create.Navigator>
    )
}

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size = 25}: any) => {
                    let iconName: any
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-albums'
                            : 'ios-albums-outline';
                    } else if (route.name === 'BookMarked') {
                        iconName = focused ? 'ios-star' : 'ios-star-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
                shifting: true,
                headerShown: false,
            })}
            barStyle={{backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'}}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    title: 'My home',
                    tabBarLabel: 'Все',
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title='Take photo'
                                iconName='ios-menu'
                                onPress={() => console.log('Press photo')}
                            />
                        </HeaderButtons>
                    )
                }}
            />
            <Tab.Screen
                name="BookMarked"
                component={BookedStackNavigator}
                options={{
                    tabBarLabel: 'Избранное',
                }}
            />
        </Tab.Navigator>
    );
}

export default function AppNavigation() {

    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{
                headerShown: false,
                drawerActiveTintColor: THEME.MAIN_COLOR,
                drawerLabelStyle: {
                    fontFamily: 'openSans-bold'
                }
            }}>
                <Drawer.Screen
                    name="Main"
                    component={TabNavigator}
                    options={{
                        drawerLabel: 'Главная',
                        drawerIcon: ({color} : any) => {
                            return <Ionicons name='ios-home' color={color} size={15}/>
                        },
                    }}
                />
                <Drawer.Screen
                    name="About Us"
                    component={AboutStackNavigator}
                    options={{
                        drawerLabel: 'О приложении',
                        drawerIcon: ({color} : any) => {
                            return <Ionicons name='ios-information-circle' color={color} size={15}/>
                        },
                    }}
                />
                <Drawer.Screen
                    name="Create Post"
                    component={CreateStackNavigator}
                    options={{
                        drawerLabel: 'Новый пост',
                        drawerIcon: ({color} : any) => {
                            return <Ionicons name='ios-camera' color={color} size={15}/>
                        },
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
