import * as ActionTypes from '../actions/actionTypes';
import { sortCategoricalDataAscendingly } from '../../functions/sortingAndFilteringData'

const initialState = {
    countriesAndCodes: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (ActionTypes.GET_CALLING_CODES):
            const property = 'country_name'
            const sortedData = sortCategoricalDataAscendingly(action.payload, property)
            return { ...state, countriesAndCodes: sortedData };
        default:
            return state;
    }
}