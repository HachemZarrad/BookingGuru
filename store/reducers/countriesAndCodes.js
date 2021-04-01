import * as ActionTypes from '../actions/actionTypes';
import { sortCategoricalDataAscendingly } from '../../functions/sortingAndFilteringData'

const initialState = {
    countriesAndCodes: [],
    loading: true,
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (ActionTypes.GET_CALLING_CODES):
            const property = 'country_name'
            const sortedData = sortCategoricalDataAscendingly(action.payload, property)
            return { ...state, loading: false, error: null, countriesAndCodes: sortedData };
        case (ActionTypes.CALLING_CODES_LOADING):
            return { ...state, loading: true, error: null, countriesAndCodes: [] };
        case (ActionTypes.CALLING_CODES_FAILED):
            return { ...state, loading: false, error: action.payload, countriesAndCodes: [] };
        default:
            return state;
    }
}