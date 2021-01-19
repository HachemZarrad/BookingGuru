import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { BookingDrawer, AuthNavigator,
          AdminNavigator } from './bookingNavigator';

export const AppNavigator = () => {
    return(
        <NavigationContainer>
            <BookingDrawer/>
        </NavigationContainer>
    )
}
