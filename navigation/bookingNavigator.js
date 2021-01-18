import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import IntroductoryScreen from '../screens/introductoryScreen';
import Home from '../screens/homeScreen';
import LogoScreen from '../screens/logoScreen';

import Flights from '../screens/flightsScreen';
import FlightDetails from '../screens/details/flightDetails';

import Hotels from  '../screens/hotelsScreen';
import HotelDetails from '../screens/details/hotelDetails';

import Food from '../screens/FoodScreen';
import DishDetails from '../screens/details/dishDetails';

import Trains from '../screens/trainsScreen';
import TrainDetails from '../screens/details/trainDetails';

import Taxis from '../screens/TaxisScreen';
import TaxiDetails from '../screens/details/taxiDetails';

import Buses from '../screens/BusesScreen';
import BusDetails from '../screens/details/busDetails';

import FiltredHotels from '../screens/filteredHotels';

import AuthScreen from '../screens/authScreen';


const homeStackNavigator = createStackNavigator();

export const homeNavigator = () => {
    return(
        <homeStackNavigator.Navigator>
            <homeStackNavigator.Screen name="Logo" component={LogoScreen}/>
            <homeStackNavigator.Screen name="Introductory" component={IntroductoryScreen}/>
            <homeStackNavigator.Screen name="Home" component={Home}/>
        </homeStackNavigator.Navigator>
  );
}

const bookingDrawerNavigator = createDrawerNavigator();

export const bookingDrawer = () => {
   return(
       <bookingDrawerNavigator.Navigator>
           <bookingDrawerNavigator.Screen
                name="Home" 
                component={Home} 
                options={{
                drawerIcon: props => (
                <Ionicons
                    name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                    size={23}
                    color={props.color}
                    />
                    )
                }}
            />
           <bookingDrawerNavigator.Screen 
                name="Hotels" 
                component={Hotels}
                options={{
                    drawerIcon: props => (
                    <Ionicons
                        name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                        size={23}
                        color={props.color}
                    />
                    )
                 }}
            />
           <bookingDrawerNavigator.Screen
                name="Flights" 
                component={Flights}
                options={{
                    drawerIcon: props => (
                    <Ionicons
                        name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                        size={23}
                        color={props.color}
                     />
                    )
                }}
            />
           <bookingDrawerNavigator.Screen 
                name="Trains"
                component={Trains}
                options={{
                    drawerIcon: props => (
                    <Ionicons
                        name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                        size={23}
                        color={props.color}
                    />
                    )
                }}
            />
           <bookingDrawerNavigator.Screen
                name="Taxis"
                component={Taxis}
                options={{
                    drawerIcon: props => (
                    <Ionicons
                        name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                        size={23}
                        color={props.color}
                    />
                    )
                 }}
            />
           <bookingDrawerNavigator.Screen
                name="Buses"
                component={Buses}
                options={{
                    drawerIcon: props => (
                    <Ionicons
                        name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                        size={23}
                        color={props.color}
                    />
                    )
                }}
            />
            <bookingDrawerNavigator.Screen
                name="Food"
                component={Food}
                options={{
                    drawerIcon: props => (
                    <Ionicons
                        name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                        size={23}
                        color={props.color}
                    />
                    )
                }}
            />
       </bookingDrawerNavigator.Navigator>
   );
}

const hotelsStackNavigator = createStackNavigator();

export const hotelsNavigator = () => {
    return(
        <hotelsStackNavigator.Navigator>
            <hotelsStackNavigator.Screen name="Hotels" component={Hotels}/>
            <hotelsStackNavigator.Screen name="HotelDetails" component={HotelDetails}/>
        </hotelsStackNavigator.Navigator>
    );
}

const flightsStackNavigator = createStackNavigator();

export const flightsNavigator = () => {
    return(
        <flightsStackNavigator.Navigator>
            <flightsStackNavigator.Screen name="Flights" component={Flights}/>
            <flightsStackNavigator.Screen name="FlightDetails" component={FlightDetails}/>
        </flightsStackNavigator.Navigator>
    );
}

const taxisStackNavigator = createStackNavigator();

export const taxisNavigator = () => {
    return(
        <taxisStackNavigator.Navigator>
            <taxisStackNavigator.Screen name="Taxis" component={Taxis}/>
            <taxisStackNavigator.Screen name="TaxiDetails" component={TaxiDetails}/>
        </taxisStackNavigator.Navigator>
    );
}

const trainsStackNavigator = createStackNavigator();

export const trainsNavigator = () => {
    return(
        <trainsStackNavigator.Navigator>
            <trainsStackNavigator.Screen name="Trains" component={Trains}/>
            <trainsStackNavigator.Screen name="TrainDetails" component={TrainDetails}/>
        </trainsStackNavigator.Navigator>
    );  
}

const busesStackNavigator = createStackNavigator();

export const busesNavigator = () => {
    return(
        <busesStackNavigator.Navigator>
            <busesStackNavigator.Screen name="Buses" component={Buses}/>
            <busesStackNavigator.Screen name="BusDetails" component={BusDetails}/>
        </busesStackNavigator.Navigator>
    );
}

const foodStackNavigator = createStackNavigator();

export const foodNavigator = () => {
     return(
        <foodStackNavigator.Navigator>
            <foodStackNavigator.Screen name="Food" component={Food}/>
            <foodStackNavigator.Screen name="DishDetails" component={DishDetails}/>
        </foodStackNavigator.Navigator>
    );
}

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
    return (
        <AuthStackNavigator.Navigator screenOptions={}>
        <AuthStackNavigator.Screen
            name="Auth"
            component={AuthScreen}
        />
        </AuthStackNavigator.Navigator>
  );
};


