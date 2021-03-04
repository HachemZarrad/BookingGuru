import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';

import IntroductoryScreen from '../screens/introductoryScreen';
import Home from '../screens/homeScreen';
import LogoScreen from '../screens/logoScreen';

import Flights from '../screens/flight/flightsScreen';
import FlightDetails from '../screens/flight/flightDetails';

import Hotels from  '../screens/hotel/hotelsScreen';
import HotelDetails from '../screens/hotel/hotelDetails';
import FiltredHotels from '../screens/hotel/filteredHotels';
import ReservationScreen from '../screens/hotel/reservationScreen';
import PickUpRoomScreen from '../screens/hotel/pickUpRoomScreen';
import ValidateReservationScreen from '../screens/hotel/validateReservationScreen';

import Food from '../screens/food/foodScreen';
import DishDetails from '../screens/food/dishDetails';

import Trains from '../screens/train/trainsScreen';
import TrainDetails from '../screens/train/trainDetails';

import Taxis from '../screens/taxi/taxisScreen';
import TaxiDetails from '../screens/taxi/taxiDetails';

import Buses from '../screens/bus/busesScreen';
import BusDetails from '../screens/bus/busDetails';

import AuthScreen from '../screens/authScreen';

import ReservationsList from '../screens/admin/reservationsList';
import ReservationDetails from '../screens/admin/reservationDetails';

const navigationOptions = {
    headerShown: false,
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.toolbarColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.toolbarColor
  };

  
const bookingDrawerNavigator = createDrawerNavigator();

export const BookingDrawer = () => {
    return(
        <bookingDrawerNavigator.Navigator>
            <bookingDrawerNavigator.Screen 
                name='Home'
                component={HomeNavigator}
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
                name='Hotels'
                component={HotelsNavigator}
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
                name='Flights'
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
                name='Taxis'
                component={TaxisNavigator}
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
                name='Trains'
                component={TrainsNavigator}
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
                name='Food'
                component={FoodNavigator}
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
                name='Buses'
                component={BusesNavigator}
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
    )
}

const homeStackNavigator = createStackNavigator();

export const HomeNavigator = () => {
    return(
        <homeStackNavigator.Navigator screenOptions={navigationOptions} >
            <homeStackNavigator.Screen name="Logo" component={LogoScreen}/>
            <homeStackNavigator.Screen name="Introductory" component={IntroductoryScreen}/>
            <homeStackNavigator.Screen name="HomePage" component={Home}/>
        </homeStackNavigator.Navigator>
  );
}


const hotelsStackNavigator = createStackNavigator();

export const HotelsNavigator = () => {
    return(
        <hotelsStackNavigator.Navigator screenOptions={navigationOptions}>
            <hotelsStackNavigator.Screen name="HotelsOverview" component={Hotels}/>
            <hotelsStackNavigator.Screen name="HotelDetails" component={HotelDetails}/>
            <hotelsStackNavigator.Screen name="FiltredHotels" component={FiltredHotels}/>
            <hotelsStackNavigator.Screen name="ReservationScreen" component={ReservationScreen} options={{ headerShown: true, headerTitle: 'Fill in your info'}}/>
            <hotelsStackNavigator.Screen name="PickUpRoomScreen" component={PickUpRoomScreen} options={{ headerShown: true, headerTitle: "What's your plan"}}/>
            <hotelsStackNavigator.Screen name="ValidateReservationScreen" component={ValidateReservationScreen} options={{ headerShown: true, headerTitle: 'Are you sure'}}/>
        </hotelsStackNavigator.Navigator>
    );
}

const flightsStackNavigator = createStackNavigator();

export const FlightsNavigator = () => {
    return(
        <flightsStackNavigator.Navigator screenOptions={navigationOptions}>
            <flightsStackNavigator.Screen name="FlightsOverview" component={Flights}/>
            <flightsStackNavigator.Screen name="FlightDetails" component={FlightDetails}/>
        </flightsStackNavigator.Navigator>
    );
}

const taxisStackNavigator = createStackNavigator();

export const TaxisNavigator = () => {
    return(
        <taxisStackNavigator.Navigator screenOptions={navigationOptions}>
            <taxisStackNavigator.Screen name="TaxisOverview" component={Taxis}/>
            <taxisStackNavigator.Screen name="TaxiDetails" component={TaxiDetails}/>
        </taxisStackNavigator.Navigator>
    );
}

const trainsStackNavigator = createStackNavigator();

export const TrainsNavigator = () => {
    return(
        <trainsStackNavigator.Navigator screenOptions={navigationOptions}>
            <trainsStackNavigator.Screen name="TrainsOverview" component={Trains}/>
            <trainsStackNavigator.Screen name="TrainDetails" component={TrainDetails}/>
        </trainsStackNavigator.Navigator>
    );  
}

const busesStackNavigator = createStackNavigator();

export const BusesNavigator = () => {
    return(
        <busesStackNavigator.Navigator screenOptions={navigationOptions}>
            <busesStackNavigator.Screen name="BusesOverview" component={Buses}/>
            <busesStackNavigator.Screen name="BusDetails" component={BusDetails}/>
        </busesStackNavigator.Navigator>
    );
}

const foodStackNavigator = createStackNavigator();

export const FoodNavigator = () => {
     return(
        <foodStackNavigator.Navigator screenOptions={navigationOptions}>
            <foodStackNavigator.Screen name="FoodOverview" component={Food}/>
            <foodStackNavigator.Screen name="DishDetails" component={DishDetails}/>
        </foodStackNavigator.Navigator>
    );
}

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
    return (
        <AuthStackNavigator.Navigator screenOptions={navigationOptions}>
            <AuthStackNavigator.Screen
                name="Auth"
                component={AuthScreen}
            />
        </AuthStackNavigator.Navigator>
  );
};

const AdminStackNavigator = createStackNavigator();

export const AdminNavigator = () => {
    return (
        <AdminStackNavigator.Navigator>
            <AdminStackNavigator.Screen
                name="ReservationsList"
                component={ReservationsList}
            />
            <AdminStackNavigator.Screen
                name="ReservationDetails"
                component={ReservationDetails}
            />
        </AdminStackNavigator.Navigator>
  );
};


