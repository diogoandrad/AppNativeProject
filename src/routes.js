import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View, Text, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Home from './pages/home';
import Notes from './pages/notes';
import Search from './pages/search';
import News from './pages/news';
import Profile from './pages/profile';
import Settings from './pages/settingss';
import Imc from './pages/imc';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function RootDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home Page" component={RootStack} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="Imc" component={Imc} />
        </Drawer.Navigator>
    );
}

function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={RootTab}
                options={({ navigation }) => ({
                headerTitle: 'React Native',
                headerTitleAlign: 'center',
                headerLeft: () => (
                    <View>
                        <Icon name={'bars'} size={26} color={'gray'} style={{paddingLeft:10}} onPress={() => navigation.openDrawer()} />
                    </View>
                ),
                headerRight: () => (
                    <View>
                        <Icon name={'info-circle'} size={26} color={'gray'} style={{paddingRight:10}} onPress={() => alert('This is a button!')} />
                    </View>
                )
                })}
            />
        </Stack.Navigator>
    );
}

function RootTab() {
    return (
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home';
                    }
                    else if (route.name === 'Search') {
                        iconName = focused ? 'search' : 'search';
                    }
                    else if (route.name === 'Notes') {
                        iconName = focused ? 'book' : 'book';
                    }
                    else if (route.name === 'News') {
                        iconName = focused ? 'briefcase' : 'briefcase';
                    }
                    else if (route.name === 'Profile') {
                        iconName = focused ? 'user' : 'user';
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                    },
            })}
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',
            }} >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Notes" component={Notes} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="News" component={News} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Home" component={RootDrawer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
