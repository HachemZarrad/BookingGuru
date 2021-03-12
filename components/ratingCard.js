import React from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';


const RatingCard = props => {
    return(
        <View style={styles.container}>
            <View style={styles.magazine}>
                <Image 
                    source={{uri: props.hotel.thumbnailUrl}}
                    style={styles.image}/> 
                <View style={styles.textNextToImage}>
                    <Text style={styles.bold}>{props.hotel.name}</Text>
                    <HotelStars rating={props.hotel.starRating}/>
                </View>
            </View>
            <Text style={styles.text}>A place where you can shill, have fun, maybe gather with your friends and family,
                we have plenty of services and activities here. Our slogan is enjoy yourself.
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
        fontSize: 11
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