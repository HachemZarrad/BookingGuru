import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroductoryScreen from './screens/introductoryScreen';
import Home from './screens/homeScreen';
import LogoScreen from './screens/logoScreen';
import Flights from './screens/flightsScreen';
import FlightDetails from './screens/details/flightDetails';
import Hotels from  './screens/hotelsScreen';
import HotelDetails from './screens/details/hotelDetails';
import Booking from './screens/BookingScreen';
import Food from './screens/FoodScreen';
import DishDetails from './screens/details/dishDetails';
import Trains from './screens/trainsScreen';
import TrainDetails from './screens/details/trainDetails';
import Taxis from './screens/TaxisScreen';
import TaxiDetails from './screens/details/taxiDetails';
import Buses from './screens/BusesScreen';
import BusDetails from './screens/details/busDetails';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
          <Stack.Screen name="Logo" component={Booking}/>
          <Stack.Screen name="Introductory" component={IntroductoryScreen} />
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Flights" component={Flights} />
          <Stack.Screen name="FlightDetails" component={FlightDetails} />
          <Stack.Screen name="Hotels" component={Hotels}/>
          <Stack.Screen name="HotelDetails" component={HotelDetails} />
          <Stack.Screen name="Buses" component={Buses} />
          <Stack.Screen name="BusDetails" component={BusDetails} />
          <Stack.Screen name="Trains" component={Trains}/>
          <Stack.Screen name="TrainDetails" component={TrainDetails} />
          <Stack.Screen name="Taxis" component={Taxis} />
          <Stack.Screen name="TaxiDetails" component={TaxiDetails} />
          <Stack.Screen name="Food" component={Food}/>
          <Stack.Screen name="DishDetails" component={DishDetails} />
          <Stack.Screen name="Booking" component={Booking}/>
      </Stack.Navigator>
  </NavigationContainer>
  );
}

