import React from 'react'
import { Platform, SafeAreaView, View, ScrollView } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'

import { createStackNavigator, HeaderBackground } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { Drawer } from 'react-native-paper'

import { logout } from '../store/actions/auth'

import IconLibrary from '../constants/iconLibrary'
import Colors from '../constants/colors'
import iconLibrary from '../constants/iconLibrary'

import Icon from '../components/icon'
import ProfileAvatar from '../components/profileAvatar'
import Title from '../components/title'

import IntroductoryScreen from '../screens/introductoryScreen'
import Home from '../screens/homeScreen'
import SplashScreen from '../screens/splashScreen'

import Flights from '../screens/flight/flightsScreen'
import FlightDetails from '../screens/flight/flightDetails'

import Hotels from '../screens/hotel/hotelsScreen'
import HotelDetails from '../screens/hotel/hotelDetails'

import ReservationScreen from '../screens/hotel/reservationScreen'
import PickUpRoomScreen from '../screens/hotel/pickUpRoomScreen'
import ValidateReservationScreen from '../screens/hotel/validateReservationScreen'

import Food from '../screens/food/foodScreen'
import DishDetails from '../screens/food/dishDetails'

import Trains from '../screens/train/trainsScreen'
import TrainDetails from '../screens/train/trainDetails'

import Taxis from '../screens/taxi/taxisScreen'
import TaxiDetails from '../screens/taxi/taxiDetails'

import Buses from '../screens/bus/busesScreen'
import BusDetails from '../screens/bus/busDetails'

import FavoriteScreen from '../screens/favoritesScreen'
import NotificationsScreen from '../screens/notificationsScreen'
import CustomizeFiltersScreen from '../screens/customizeFiltersScreen'

import SignUpScreen from '../screens/authentication/signUpScreen'
import PasswordScreen from '../screens/authentication/passwordScreen'
import LoginScreen from '../screens/authentication/loginScreen'
import SettingsScreen from '../screens/authentication/settingsScreen'
import CallingCodesScreen from '../screens/authentication/callingCodeScreen'

import ReservationsList from '../screens/admin/reservationsList'
import ReservationDetails from '../screens/admin/reservationDetails'

const navigationOptions = {
    headerShown: false,
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.toolbarColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.toolbarColor,
}

const getAcronymName = (firstLetter, secondLetter) => {
    return firstLetter.concat(secondLetter).toUpperCase()
}

const bookingDrawerNavigator = createDrawerNavigator()

export const BookingDrawer = () => {

    const reduxDispatch = useDispatch()

    const userDetails = useSelector(state => state.auth.userDetails)
    const token = useSelector(state => state.auth.token)    
    const email = userDetails?.username ? userDetails.username : 'BG'
    const firstName = userDetails?.firstname ? userDetails.firstname : ''
    const lastName = userDetails?.lastname ? userDetails.lastname : ''
    const fullName = `${firstName} ${lastName}`
    const acronymName = firstName && lastName ? getAcronymName(firstName[0], lastName[0]) : getAcronymName(email[0], email[1])

    const logoutUser = props => {
        reduxDispatch(logout())
        props.navigation.navigate('HomePage')
    }

    return (
        <bookingDrawerNavigator.Navigator
            drawerStyle={{
                // backgroundColor: Colors.background,
                width: '83%',
            }}
            drawerContent={props => {
                return (
                    <View style={{ flex: 1, paddingTop: 20 }}>
                        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                            <ScrollView>
                                {!token ? null :
                                    <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
                                        <ProfileAvatar acronym={acronymName} />
                                        <Title title={fullName} style={{ marginTop: 30 }} />
                                    </View>
                                }
                                {token ? null :
                                    <DrawerItem
                                        inactiveTintColor='black'
                                        icon={() => (
                                            <Icon
                                                library={IconLibrary.AntDesign}
                                                name="login" />
                                        )}
                                        label="Login Or Create Account"
                                        onPress={() => { props.navigation.navigate('Authentication') }}
                                    />
                                }
                                <Drawer.Section >
                                    <Title title='Services' style={{ fontSize: 17, margin: 10 }} />
                                    <DrawerItemList {...props} />
                                </Drawer.Section>
                                <Drawer.Section>
                                    <Title title='Favorites and Settings' style={{ fontSize: 17, margin: 10 }} />
                                    <DrawerItem
                                        inactiveTintColor='black'
                                        icon={() => (
                                            <Icon
                                                library={IconLibrary.Ionicons}
                                                name="heart"
                                                color='red'
                                            />
                                        )}
                                        label="Favorites"
                                        onPress={() => { props.navigation.navigate('Favorites') }}
                                    />
                                    {token ? null :
                                        <DrawerItem
                                            inactiveTintColor='black'
                                            icon={() => (
                                                <Icon
                                                    library={IconLibrary.Ionicons}
                                                    name="settings"
                                                />
                                            )}
                                            label="Settings"
                                            onPress={() => { props.navigation.navigate('Home') }}
                                        />
                                    }
                                </Drawer.Section>
                                <Drawer.Section>
                                    <Title title='Your Feedback Matters' style={{ fontSize: 17, margin: 10 }} />
                                    <DrawerItem
                                        inactiveTintColor='black'
                                        icon={() => (
                                            <Icon
                                                library={IconLibrary.MaterialIcons}
                                                name="feedback"
                                            />
                                        )}
                                        label="Rate Us"
                                        onPress={() => { props.navigation.navigate('Home') }}
                                    />
                                </Drawer.Section>
                                {!token ? null :
                                    <Drawer.Section style={{ marginTop: 20 }}>
                                        <DrawerItem
                                            inactiveTintColor='black'
                                            icon={() => (
                                                <Icon
                                                    library={IconLibrary.SimpleLineIcons}
                                                    name="logout"
                                                />
                                            )}
                                            label="Logout"
                                            onPress={() => logoutUser(props)}
                                        />
                                    </Drawer.Section>
                                }
                            </ScrollView>
                        </SafeAreaView>
                    </View>
                )
            }}
            drawerContentOptions={{
                activeTintColor: Colors.toolbarColor,
                inactiveTintColor: 'black'
            }}
        >
            <bookingDrawerNavigator.Screen
                name='Home'
                component={HomeNavigator}
                initialParams={{ destination: null }}
                options={{
                    drawerIcon: props => (
                        <Icon
                            library={IconLibrary.Ionicons}
                            name='home'
                        />
                    )
                }}
            />
            <bookingDrawerNavigator.Screen
                name='Hotels'
                component={HotelsNavigator}
                options={{
                    drawerIcon: props => (
                        <Icon
                            library={IconLibrary.MaterialIcons}
                            name="hotel"
                        />
                    )
                }}
            />
            <bookingDrawerNavigator.Screen
                name='Flights'
                component={FlightsNavigator}
                options={{
                    drawerIcon: props => (
                        <Icon
                            library={IconLibrary.MaterialIcons}
                            name="flight"
                        />
                    )
                }}
            />
            <bookingDrawerNavigator.Screen
                name='Taxis'
                component={TaxisNavigator}
                options={{
                    drawerIcon: props => (
                        <Icon
                            library={IconLibrary.Ionicons}
                            name={'car'}
                        />
                    )
                }}
            />
            <bookingDrawerNavigator.Screen
                name='Trains'
                component={TrainsNavigator}
                options={{
                    drawerIcon: props => (
                        <Icon
                            library={IconLibrary.Ionicons}
                            name={'train'}
                        />
                    )
                }}
            />
            <bookingDrawerNavigator.Screen
                name='Food'
                component={FoodNavigator}
                options={{
                    drawerIcon: props => (
                        <Icon
                            library={IconLibrary.Ionicons}
                            name={'restaurant'}
                        />
                    )
                }}
            />
            <bookingDrawerNavigator.Screen
                name='Buses'
                component={BusesNavigator}
                options={{
                    drawerIcon: props => (
                        <Icon
                            library={iconLibrary.Ionicons}
                            name={'bus'}
                        />
                    )
                }}
            />
        </bookingDrawerNavigator.Navigator>
    )
}

const homeStackNavigator = createStackNavigator()

export const HomeNavigator = () => {
    return (
        <homeStackNavigator.Navigator screenOptions={navigationOptions} >
            <homeStackNavigator.Screen name="Splash" component={SplashScreen} />
            <homeStackNavigator.Screen name="Introductory" component={IntroductoryScreen} />
            <homeStackNavigator.Screen name="HomePage" component={Home} />
            <homeStackNavigator.Screen name="Authentication" component={AuthenticationNavigator} />
            <homeStackNavigator.Screen name="Favorites" component={FavoriteScreen} options={{ headerShown: true, headerTitle: 'Favorites' }} />
            <homeStackNavigator.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: true, headerTitle: 'We Keep You Notified' }} />
        </homeStackNavigator.Navigator>
    )
}


const hotelsStackNavigator = createStackNavigator()

export const HotelsNavigator = () => {
    return (
        <hotelsStackNavigator.Navigator screenOptions={navigationOptions}>
            <hotelsStackNavigator.Screen name="HotelsOverview" component={Hotels} />
            <hotelsStackNavigator.Screen name="HotelDetails" component={HotelDetails} options={{ headerShown: true, headerTitle: 'Fill in your info' }} />
            <hotelsStackNavigator.Screen name="ReservationScreen" component={ReservationScreen} options={{ headerShown: true, headerTitle: 'Fill in your info' }} />
            <hotelsStackNavigator.Screen name="PickUpRoomScreen" component={PickUpRoomScreen} options={{ headerShown: true, headerTitle: "What's your plan" }} />
            <hotelsStackNavigator.Screen name="ValidateReservationScreen" component={ValidateReservationScreen} options={{ headerShown: true, headerTitle: 'Are you sure' }} />
            <hotelsStackNavigator.Screen name="CustomizeFilters" component={CustomizeFiltersScreen} options={{ headerShown: true, headerTitle: 'Set Your Own Filters' }} />
        </hotelsStackNavigator.Navigator>
    )
}

const flightsStackNavigator = createStackNavigator()

export const FlightsNavigator = () => {
    return (
        <flightsStackNavigator.Navigator screenOptions={navigationOptions}>
            <flightsStackNavigator.Screen name="FlightsOverview" component={Flights} />
            <flightsStackNavigator.Screen name="FlightDetails" component={FlightDetails} />
            <flightsStackNavigator.Screen name="CustomizeFilters" component={CustomizeFiltersScreen} options={{ headerShown: true, headerTitle: 'Set Your Own Filters' }} />
        </flightsStackNavigator.Navigator>
    )
}

const taxisStackNavigator = createStackNavigator()

export const TaxisNavigator = () => {
    return (
        <taxisStackNavigator.Navigator screenOptions={navigationOptions}>
            <taxisStackNavigator.Screen name="TaxisOverview" component={Taxis} />
            <taxisStackNavigator.Screen name="TaxiDetails" component={TaxiDetails} />
            <taxisStackNavigator.Screen name="CustomizeFilters" component={CustomizeFiltersScreen} options={{ headerShown: true, headerTitle: 'Set Your Own Filters' }} />
        </taxisStackNavigator.Navigator>
    )
}

const trainsStackNavigator = createStackNavigator()

export const TrainsNavigator = () => {
    return (
        <trainsStackNavigator.Navigator screenOptions={navigationOptions}>
            <trainsStackNavigator.Screen name="TrainsOverview" component={Trains} />
            <trainsStackNavigator.Screen name="TrainDetails" component={TrainDetails} />
            <trainsStackNavigator.Screen name="CustomizeFilters" component={CustomizeFiltersScreen} options={{ headerShown: true, headerTitle: 'Set Your Own Filters' }} />
        </trainsStackNavigator.Navigator>
    )
}

const busesStackNavigator = createStackNavigator()

export const BusesNavigator = () => {
    return (
        <busesStackNavigator.Navigator screenOptions={navigationOptions}>
            <busesStackNavigator.Screen name="BusesOverview" component={Buses} />
            <busesStackNavigator.Screen name="BusDetails" component={BusDetails} />
            <busesStackNavigator.Screen name="CustomizeFilters" component={CustomizeFiltersScreen} options={{ headerShown: true, headerTitle: 'Set Your Own Filters' }} />
        </busesStackNavigator.Navigator>
    )
}

const foodStackNavigator = createStackNavigator()

export const FoodNavigator = () => {
    return (
        <foodStackNavigator.Navigator screenOptions={navigationOptions}>
            <foodStackNavigator.Screen name="FoodOverview" component={Food} />
            <foodStackNavigator.Screen name="DishDetails" component={DishDetails} />
            <foodStackNavigator.Screen name="CustomizeFilters" component={CustomizeFiltersScreen} options={{ headerShown: true, headerTitle: 'Set Your Own Filters' }} />
        </foodStackNavigator.Navigator>
    )
}

const AuthStackNavigator = createStackNavigator()

export const AuthenticationNavigator = () => {
    return (
        <AuthStackNavigator.Navigator screenOptions={navigationOptions}>
            <AuthStackNavigator.Screen
                name="Login"
                component={LoginScreen}

            />
            <AuthStackNavigator.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ headerShown: true, headerTitle: 'Sign Up' }}
            />
            <AuthStackNavigator.Screen
                name="Password"
                component={PasswordScreen}
                options={{ headerShown: true, headerTitle: 'Sign Up' }}
            />
            <AuthStackNavigator.Screen
                name="callingCodes"
                component={CallingCodesScreen}
                options={{ headerShown: true, headerTitle: 'Calling Code' }}
            />
            <AuthStackNavigator.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ headerShown: true, headerTitle: 'Settings' }}
            />
        </AuthStackNavigator.Navigator>
    )
}

const AdminStackNavigator = createStackNavigator()

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
    )
}


