import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import IntroductoryScreen from '../screens/introductoryScreen';
import Home from '../screens/homeScreen';
import LogoScreen from '../screens/logoScreen';

import Flights from '../screens/flight/flightsScreen';
import FlightDetails from '../screens/flight/flightDetails';

import Hotels from  '../screens/hotel/hotelsScreen';
import HotelDetails from '../screens/hotel/hotelDetails';

import Food from '../screens/food/foodScreen';
import DishDetails from '../screens/food/dishDetails';

import Trains from '../screens/train/trainsScreen';
import TrainDetails from '../screens/train/trainDetails';

import Taxis from '../screens/taxi/taxisScreen';
import TaxiDetails from '../screens/taxi/taxiDetails';

import Buses from '../screens/bus/busesScreen';
import BusDetails from '../screens/bus/busDetails';

import FiltredHotels from '../screens/filteredHotels';

import AuthScreen from '../screens/authScreen';

import ReservationsList from '../screens/admin/reservationsList';
import ReservationDetails from '../screens/admin/reservationDetails';


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
        <homeStackNavigator.Navigator screenOptions={{headerShown: false}} >
            <homeStackNavigator.Screen name="Logo" component={LogoScreen}/>
            <homeStackNavigator.Screen name="Introductory" component={IntroductoryScreen}/>
            <homeStackNavigator.Screen name="HomePage" component={Home}/>
        </homeStackNavigator.Navigator>
  );
}

// const bookingDrawerNavigator1 = createDrawerNavigator();

// export const BookingDrawer1 = () => {
//    return(
//        <bookingDrawerNavigator.Navigator>
//            <bookingDrawerNavigator.Screen
//                 name="HomePage" 
//                 component={Home} 
//                 options={{
//                 drawerIcon: props => (
//                 <Ionicons
//                     name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
//                     size={23}
//                     color={props.color}
//                     />
//                     )
//                 }}
//             />
//            <bookingDrawerNavigator.Screen 
//                 name="HotelsOverview" 
//                 component={Hotels}
//                 options={{
//                     drawerIcon: props => (
//                     <Ionicons
//                         name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
//                         size={23}
//                         color={props.color}
//                     />
//                     )
//                  }}
//             />
//            <bookingDrawerNavigator.Screen
//                 name="FlightsOverview" 
//                 component={Flights}
//                 options={{
//                     drawerIcon: props => (
//                     <Ionicons
//                         name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
//                         size={23}
//                         color={props.color}
//                      />
//                     )
//                 }}
//             />
//            <bookingDrawerNavigator.Screen 
//                 name="TrainsOverview"
//                 component={Trains}
//                 options={{
//                     drawerIcon: props => (
//                     <Ionicons
//                         name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
//                         size={23}
//                         color={props.color}
//                     />
//                     )
//                 }}
//             />
//            <bookingDrawerNavigator.Screen
//                 name="TaxisOverview"
//                 component={Taxis}
//                 options={{
//                     drawerIcon: props => (
//                     <Ionicons
//                         name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
//                         size={23}
//                         color={props.color}
//                     />
//                     )
//                  }}
//             />
//            <bookingDrawerNavigator.Screen
//                 name="BusesOverview"
//                 component={Buses}
//                 options={{
//                     drawerIcon: props => (
//                     <Ionicons
//                         name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
//                         size={23}
//                         color={props.color}
//                     />
//                     )
//                 }}
//             />
//             <bookingDrawerNavigator.Screen
//                 name="FoodOverview"
//                 component={Food}
//                 options={{
//                     drawerIcon: props => (
//                     <Ionicons
//                         name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
//                         size={23}
//                         color={props.color}
//                     />
//                     )
//                 }}
//             />
//        </bookingDrawerNavigator.Navigator>
//    );
// }

const hotelsStackNavigator = createStackNavigator();

export const HotelsNavigator = () => {
    return(
        <hotelsStackNavigator.Navigator screenOptions={{headerShown: false}}>
            <hotelsStackNavigator.Screen name="HotelsOverview" component={Hotels}/>
            <hotelsStackNavigator.Screen name="HotelDetails" component={HotelDetails}/>
        </hotelsStackNavigator.Navigator>
    );
}

const flightsStackNavigator = createStackNavigator();

export const FlightsNavigator = () => {
    return(
        <flightsStackNavigator.Navigator screenOptions={{headerShown: false}}>
            <flightsStackNavigator.Screen name="FlightsOverview" component={Flights}/>
            <flightsStackNavigator.Screen name="FlightDetails" component={FlightDetails}/>
        </flightsStackNavigator.Navigator>
    );
}

const taxisStackNavigator = createStackNavigator();

export const TaxisNavigator = () => {
    return(
        <taxisStackNavigator.Navigator screenOptions={{headerShown: false}}>
            <taxisStackNavigator.Screen name="TaxisOverview" component={Taxis}/>
            <taxisStackNavigator.Screen name="TaxiDetails" component={TaxiDetails}/>
        </taxisStackNavigator.Navigator>
    );
}

const trainsStackNavigator = createStackNavigator();

export const TrainsNavigator = () => {
    return(
        <trainsStackNavigator.Navigator screenOptions={{headerShown: false}}>
            <trainsStackNavigator.Screen name="TrainsOverview" component={Trains}/>
            <trainsStackNavigator.Screen name="TrainDetails" component={TrainDetails}/>
        </trainsStackNavigator.Navigator>
    );  
}

const busesStackNavigator = createStackNavigator();

export const BusesNavigator = () => {
    return(
        <busesStackNavigator.Navigator screenOptions={{headerShown: false}}>
            <busesStackNavigator.Screen name="BusesOverview" component={Buses}/>
            <busesStackNavigator.Screen name="BusDetails" component={BusDetails}/>
        </busesStackNavigator.Navigator>
    );
}

const foodStackNavigator = createStackNavigator();

export const FoodNavigator = () => {
     return(
        <foodStackNavigator.Navigator screenOptions={{headerShown: false}}>
            <foodStackNavigator.Screen name="FoodOverview" component={Food}/>
            <foodStackNavigator.Screen name="DishDetails" component={DishDetails}/>
        </foodStackNavigator.Navigator>
    );
}

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
    return (
        <AuthStackNavigator.Navigator screenOptions={{headerShown: false}}>
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


