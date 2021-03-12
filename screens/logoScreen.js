import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator,
   TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';


const logoScreen = () => {

  const navigation = useNavigation();
  const temp = () => {
    navigation.navigate('HomePage');
  }

  return(
    <TouchableOpacity onPress={() => temp()} 
      style={styles.imageContainer}>
        <Image 
            source={require('../assets/introLogo.png')}
            style={styles.image}/>
          <ActivityIndicator size="large" color="#00ff00" />
    </TouchableOpacity>
  );

}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        width: '100%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.toolbarColor
      },
    image: {
        // width: 345, no need for specific dimensions they ruin the image 
        // height: 235,
      }
});

export default logoScreen;
