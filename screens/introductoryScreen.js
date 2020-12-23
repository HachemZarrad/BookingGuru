import React from 'react';
import {Text, StyleSheet, View, Button, Image} from 'react-native';
import Colors from '../constants/colors';
import Toolbar from '../components/toolbar';

const IntroductoryScreen = () => {
    return (
        <View style={styles.imageContainer}>
            <Toolbar/>
            <Image 
                source={require('../assets/introPic.jpg')}/>
            
            <Text>IntroductoryScreen</Text>
            <Text>ensuring that annual activity reports and declarations 
                present a consistent assessment of supervisory and control
                 systems which is compatible with the reservations 
                 (paragraphs 2.12 to 2.14);</Text>
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.button}
                    color={Colors.primary}
                    title={'Show Details'}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        width: '100%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
      },
    image: {
        width: '100%',
        height: '40%'
      },
    buttonContainer: {
        flex: 1,
        width: '70%',
        height: '30%',
        borderRadius: 60
    },
    button: {
        width: '5%',
        borderRadius: 60
    }
});


export default IntroductoryScreen;