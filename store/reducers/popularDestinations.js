import * as ActionTypes from '../actions/actionTypes';

const initialState = {
    destinations: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (ActionTypes.GET_DESTINATIONS):
            return { ...state, destinations: action.payload };

        default:
            return state;
    }
}