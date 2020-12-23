import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const logoScreen = () => {
  return(
    <View style={styles.imageContainer}>
      <Image 
        source={require('../assets/introLogo.png')}
        style={styles.image}/>
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
      }
});

export default logoScreen;
