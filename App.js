import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroductoryScreen from './screens/introductoryScreen';
import HomeScreen from './screens/homeScreen';
import LogoScreen from './screens/logoScreen';
import TravelsScreen from './screens/travelsScreen';
import HotelsScreen from  './screens/hotelsScreen';
import BookingScreen from './screens/BookingScreen';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode = "none">
          <Stack.Screen name="Logo" component={LogoScreen}/>
          <Stack.Screen name="Introductory" component={IntroductoryScreen} />
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Travels" component={TravelsScreen} />
          <Stack.Screen name="Hotels" component={HotelsScreen}/>
          <Stack.Screen name="Booking" component={BookingScreen}/>
      </Stack.Navigator>
  </NavigationContainer>
  );
}

