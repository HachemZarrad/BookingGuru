import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { BookingNavigator, AuthNavigator,
          AdminNavigator } from './bookingNavigator';

export const AppNavigator = () => {
    return(
        <NavigationContainer>
            <BookingNavigator/>
        </NavigationContainer>
    )
}
