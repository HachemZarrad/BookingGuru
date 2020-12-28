import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IntroductoryScreen from './screens/introductoryScreen';
import Home from './screens/homeScreen';
import LogoScreen from './screens/logoScreen';
import Flights from './screens/flightsScreen';
import FlightDetails from './screens/details/flightDetails';
import Hotels from  './screens/hotelsScreen';
import HotelDetails from './screens/details/hotelDetails';
import Food from './screens/FoodScreen';
import DishDetails from './screens/details/dishDetails';
import Trains from './screens/trainsScreen';
import TrainDetails from './screens/details/trainDetails';
import Taxis from './screens/TaxisScreen';
import TaxiDetails from './screens/details/taxiDetails';
import Buses from './screens/BusesScreen';
import BusDetails from './screens/details/busDetails';
import HotelStars from './components/hotelStars';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
        
        <Drawer.Navigator>
            <Drawer.Screen name="Logo" component={Home}/>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Flights" component={Flights} />
            <Drawer.Screen name="Hotels" component={Hotels}/>
            <Drawer.Screen name="Buses" component={Buses} />
            <Drawer.Screen name="Trains" component={Trains}/>
            <Drawer.Screen name="Taxis" component={Taxis} />
            <Drawer.Screen name="Food" component={Food}/>  
            <Drawer.Screen name="Introductory" component={IntroductoryScreen} />
            <Drawer.Screen name="FlightDetails" component={FlightDetails} />
            <Drawer.Screen name="BusDetails" component={BusDetails} />
            <Drawer.Screen name="TaxiDetails" component={TaxiDetails} />
            <Drawer.Screen name="DishDetails" component={DishDetails} />
            <Drawer.Screen name="TrainDetails" component={TrainDetails} />
            <Drawer.Screen name="HotelDetails" component={HotelDetails} />
        </Drawer.Navigator>
    </NavigationContainer>
 
  );
}

