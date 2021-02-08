import * as ActionTypes from '../actions/actionTypes';
import { Hotel } from '../../models/hotel';

const initialState = {
    favorites: [],
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (ActionTypes.GET_FAVORITES):
            return { ...state, favorites: action.payload, error: null };

        case (ActionTypes.FAVORITES_FAILED):
            return { ...state, favorites: [], error: action.payload };

        case (ActionTypes.ADD_FAVORITE):
            const newFavorite = new Hotel (
                action.payload.id.toString(),
                action.payload.name,
                action.payload.thumbnailUrl,
                action.payload.starRating, 
                action.payload.address, 
                action.payload.guestReviews, 
                action.payload.price, 
                action.payload.features);
            return { favorites: state.favorites.concat(newFavorite) };
            
        case (ActionTypes.ADD_FAV_FAILED):
            return { ...state, favorites: [], error: action.payload };

        default:
            return state;
    }
}