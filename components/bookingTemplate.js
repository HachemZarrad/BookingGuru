import React, { useState, useMemo, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import Colors from '../constants/colors';
import Toolbar from './toolbar';
import BookingButton from './bookingButton';
import RatingCard from './ratingCard';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { newFavorite, removeFavorite } from '../store/actions/favorites';
import { fetchFavorites } from '../db/favoriteHotels';

const BookingTemplate = props => {
    const [favorite, setFavorite] = useState('heart-o');

    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.favorites);
    const hotel = props.hotel;

    const addToFavorite = () => {
        if (favorite === 'heart-o'){
            setFavorite('heart')
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
            console.log(hotel._id,
                hotel.name,
                hotel.thumbnailUrl,
                hotel.starRating,
                JSON.stringify(hotel.address),
                hotel.guestReviews,
                hotel.price,
                JSON.stringify(hotel.features));      
        }
        else {
            setFavorite('heart-o');
            dispatch(removeFavorite(hotel._id));
        }
        fetchFavorites()
          .then((db) => {
            console.log('lahna',db);
          })
          .catch(err =>{
            console.log('error type 2',err);
          });
    }

    // useEffect(() => {},[addToFavorite]);

    return(
        <View style={{flex:1}}>
            <Toolbar/>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground 
                        source={{uri: hotel.thumbnailUrl}}
                        style={styles.image}>
                            <TouchableOpacity style={styles.heart}>
                                <FontAwesome name={favorite} onPress={() => addToFavorite()} size={30} color = 'red'/>
                            </TouchableOpacity>
                            <View style={styles.card}>
                                <RatingCard hotel={hotel}/>
                            </View>
                    </ImageBackground>
                    <View style={styles.location}>
                        <Ionicons name="location" size={80} color="orange" />
                        <View >
                            <Text style={styles.text}>Locality: {hotel.address.locality}</Text>
                            <Text style={styles.text}>Postal Code: {hotel.address.postalCode}</Text>
                            <Text style={styles.text}>Street Address: {hotel.address.streetAddress}</Text>
                        </View>
                    </View>
               
                    <View style={styles.book}>
                        <BookingButton price={hotel.price}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
  
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
    },
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
    book: {
        alignItems: 'center',
        marginBottom: 10
    },
    card: {
        marginLeft:40,
        marginTop: 170
    },
    image: {
        width: '100%',
        height: 300,        
    }
});

export default BookingTemplate;