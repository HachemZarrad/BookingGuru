import React from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';
import Colors from '../constants/colors';

const RatingCard = props => {
    return(
        <View style={styles.container}>
            <View style={styles.magazine}>
                <Image 
                    source={require('../assets/busPic.jpg')}
                    style={styles.image}/> 
                <View style={styles.textNextToImage}>
                    <Text style={styles.bold}>name</Text>
                    <Text style={styles.text}>Airport</Text>
                </View>
            </View>
            <Text>This is a fucking paragraph to test this fucking shit not anything else
                you stupid son of bitch, 
            </Text>
        </View>
    );
    
}

const styles = StyleSheet.create({
    bold: {
        fontSize: 15,
        fontWeight: 'bold'
      },
      text: {
        fontSize: 15
      },
      image: {
          width: 70,
          height: 60,
          borderRadius: 7,
          marginLeft: 20,
          marginBottom: 10
      },
      container: {
          width: 280,
          height: 140,
          marginBottom: 80,
          borderRadius: 10,
          backgroundColor: 'white',
          justifyContent: 'center',
          elevation: 40
      },
      magazine: {
          flexDirection: 'row',
          justifyContent: 'flex-start'
      },
      textNextToImage: {
          marginLeft: 20
      }
});

export default RatingCard;