import React, { useCallback, useEffect } from 'react';
import { StyleSheet, BackHandler} from 'react-native';
import BookingTemplate from '../../components/bookingTemplate';
import * as favoritesActions from '../../store/actions/favorites';
import { useDispatch, useSelector } from 'react-redux';


const HotelDetails = ({route}) => {

    const hotel = route.params;
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.favorites);
    const isFavorite = favorites.some(favorite => favorite.longId === hotel._id);
    const icon = () => {
        if(isFavorite) return 'heart';
        else return 'heart-o';
    }

    const loadFavorites = useCallback(() => {
        dispatch(favoritesActions.getFavorites());
    },[dispatch]);
  
    useEffect(() => {
        loadFavorites();
    },[loadFavorites]);

    const backAction = () => {
        loadFavorites();
     };
   
     useEffect(() => {
       BackHandler.addEventListener("hardwareBackPress", backAction);
   
       return () =>
         BackHandler.removeEventListener("hardwareBackPress", backAction);
     }, []);
  

    return(
        <BookingTemplate hotel={hotel} icon={icon} /> 
    );
}

const styles = StyleSheet.create({
    book: {
        alignItems: 'center',
        marginBottom: 10
    }
});

export default HotelDetails;