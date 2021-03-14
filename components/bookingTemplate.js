import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground,
     ScrollView} from 'react-native';
     
import IconLibrary from '../constants/iconLibrary';

import Icon from '../components/icon';
import Colors from '../constants/colors';
import Toolbar from './toolbar';
import CustomButton from './customButton';
import RatingCard from './ratingCard';

import { Ionicons, FontAwesome } from '@expo/vector-icons';

import { useDispatch } from 'react-redux';
import { newFavorite, removeFavorite } from '../store/actions/favorites';

const BookingTemplate = props => {
    const [favorite, setFavorite] = useState(props.icon);
    const hotel = props.hotel;
    const dispatch = useDispatch();


    const addToFavorite = () => {
        if (favorite === 'heart-o'){
            setFavorite(() => 'heart');
            dispatch(newFavorite(
                    hotel._id,
                    hotel.name,
                    hotel.thumbnailUrl,
                    hotel.starRating,
                    JSON.stringify(hotel.address),
                    hotel.guestReviews,
                    hotel.price,
                    JSON.stringify(hotel.features)
                    ));

            }
            
        else {
            setFavorite(() => 'heart-o');
            dispatch(removeFavorite(hotel._id));
            
        }
 }

 
    // useEffect(() => {},[addToFavorite]);

    return(
        <View style={{flex:1, backgroundColor: Colors.background}}>
            <Toolbar/>
            <ScrollView>
                <View>
                    <ImageBackground 
                        source={{uri: hotel.thumbnailUrl}}
                        style={styles.image}>
                            <TouchableOpacity style={styles.heart}>
                                <Icon library={IconLibrary.FontAwesome} name={favorite} onPress={() => addToFavorite()} size={40} color = 'red'/>
                            </TouchableOpacity>
                            <View style={styles.card}>
                                <RatingCard hotel={hotel}/>
                            </View>
                    </ImageBackground>
                    <View style={styles.location}>
                        <Icon library={IconLibrary.Ionicons} name="location" size={80} color="orange" />
                        <View >
                            <Text style={styles.text}>Locality: {hotel.address.locality}</Text>
                            <Text style={styles.text}>Postal Code: {hotel.address.postalCode}</Text>
                            <Text style={styles.text}>Street Address: {hotel.address.streetAddress}</Text>
                        </View>
                    </View>        
                </View>
            </ScrollView>
            <CustomButton price={hotel.price} title={'Booking'} nextStep={'ReservationScreen'}/>
        </View>
    );
  
}

const styles = StyleSheet.create({
    heart: {
        alignItems: 'flex-end',
        marginTop: 10,
        marginRight: 10
    },
    text: {
        fontWeight: 'bold'
    },
    location: {
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 60,
        marginBottom: 20
    },
    card: {
        marginLeft:40,
        marginTop: 150
    },
    image: {
        width: '100%',
        height: 300,        
    }
});

export default BookingTemplate;