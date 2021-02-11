import * as ActionTypes from '../actions/actionTypes'; 
import { fetchFavorites, addFavorite, deleteFavorite, deleteFavorites } from '../../db/favoriteHotels';


export const getFavorites = () => (dispatch) => {
    return fetchFavorites()
     .then((favorites) => dispatch({type: ActionTypes.GET_FAVORITES, payload: favorites.rows._array}))
     .catch((error) => dispatch({type: ActionTypes.FAVORITES_FAILED, payload: error}))
};

export const formatFavorites = () => (dispatch) => {
    return deleteFavorites()
     .then(() => dispatch({type: ActionTypes.deleteFavorites}))
     .catch((error) => dispatch({type: ActionTypes.DELETE_FAVS_FAILED, payload: error}))
};

export const newFavorite = (longId,name,thumbnailUrl,starRating,address,guestReviews,price,features) => (dispatch) => {
    addFavorite(longId,name,thumbnailUrl,starRating,address,guestReviews,price,features)
     .then((favorite) => {dispatch({type: ActionTypes.ADD_FAVORITE, payload: {
        id: favorite.insertId,
        longId: longId,
        name: name,
        thumbnailUrl: thumbnailUrl,
        starRating: starRating,
        address: address,
        guestReviews: guestReviews,
        price: price,
        features: features}
     });

    })
     .catch((error) => dispatch({type: ActionTypes.ADD_FAV_FAILED, payload: error}))
};

export const removeFavorite = (id) => (dispatch) => {
    return deleteFavorite(id)
     .then(() => {
        dispatch({type: ActionTypes.deleteFavorite, payload: id})
     })
     .catch((error) => dispatch({type: ActionTypes.DELETE_FAV_FAILED, payload: error}))
};