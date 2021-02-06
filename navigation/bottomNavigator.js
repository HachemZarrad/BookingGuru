import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { BookingDrawer } from './bookingNavigator';
import FavoriteScreen from '../screens/favoritesScreen';

import Colors from '../constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {

  return (
    <NavigationContainer>
        <Tab.Navigator
           initialRouteName="Home"
           activeColor="red"
           inactiveColor="white"
           barStyle={{ backgroundColor: Colors.toolbarColor }}
         >
            <Tab.Screen
                name="Home"
                component={BookingDrawer}
                options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                tabBarLabel: 'Favorites',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="star" color={color} size={26} />
                ),
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomNavigator;