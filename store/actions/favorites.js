import * as ActionTypes from '../actions/actionTypes'; 
import { fetchFavorites, addFavorite } from '../../db/favoriteHotels';


export const getFavorites = () => (dispatch) => {
    return fetchFavorites()
     .then((favorites) => dispatch({type: ActionTypes.GET_FAVORITES, payload: favorites}))
     .catch((error) => dispatch({type: ActionTypes.FAVORITES_FAILED, payload: error}))
};

export const newFavorite = (
    name,
    thumbnailUrl,
    starRating,
    address,
    guestReviews,
    price,
    features
    ) => (dispatch) => {
    addFavorite(name,thumbnailUrl,starRating,address,guestReviews,price,features)
     .then((favorite) => {dispatch({type: ActionTypes.ADD_FAVORITE, payload: {
        id: favorite.insertId,
        name: name,
        thumbnailUrl: thumbnailUrl,
        starRating: starRating,
        address: address,
        guestReviews: guestReviews,
        price: price,
        features: features}
     });
     console.log('favorite mine',favorite);
    })
     .catch((error) => dispatch({type: ActionTypes.ADD_FAV_FAILED, payload: error}))
};