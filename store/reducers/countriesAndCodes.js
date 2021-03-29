import * as ActionTypes from '../actions/actionTypes';

const initialState = {
    countriesAndCodes: [],
    loading: true,
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (ActionTypes.GET_CALLING_CODES):
            const sortedData = action.payload.sort((item1, item2) => {
                let currentCountry = item1.country_name
                let nextCountry = item2.country_name
                if (currentCountry > nextCountry) return 1
                if (currentCountry < nextCountry) return -1
                return 0
            })
            return { ...state, loading: false, error: null, countriesAndCodes: sortedData };
        case (ActionTypes.CALLING_CODES_LOADING):
            return { ...state, loading: true, error: null, countriesAndCodes: [] };
        case (ActionTypes.CALLING_CODES_FAILED):
            return { ...state, loading: false, error: action.payload, countriesAndCodes: [] };
        default:
            return state;
    }
}