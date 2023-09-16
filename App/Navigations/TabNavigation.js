import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Home from '../Screens/Home';
import Fav from '../Screens/Fav';
import Search from '../Screens/Search';
import Profile from '../Screens/Profile';

export default function TabNavigation() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="Search" component={Search}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search" size={24} color="black" />)
                }}
            />

            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="user" size={24} color="black" />)
                }}
            />
            <Tab.Screen name="Fav" component={Fav}
                options={{
                    tabBarLabel: 'Fav',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart" size={24} color="black" />)
                }}
            />


        </Tab.Navigator>
    )
}