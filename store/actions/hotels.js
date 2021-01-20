import * as ActionTypes from '../actions/actionTypes'; 

export const fetchHotels = (hotels) => {
    return { type: ActionTypes.GET_HOTELS, hotels: hotels }
}