import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Colors from '../constants/colors';
import { NavigationContainer } from '@react-navigation/native';

import { BookingDrawer, AuthNavigator,
          AdminNavigator } from './bookingNavigator';

export const AppNavigator = () => {
    return(
        <NavigationContainer>
            <SafeAreaView>
                <StatusBar
                    animated={true}
                    backgroundColor={Colors.toolbarColor}
                 />    
            </SafeAreaView>
             <BookingDrawer/>
        </NavigationContainer>
    )
}
