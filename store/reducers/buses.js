import * as ActionTypes from '../actions/actionTypes';

const initialState = {
    buses: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (ActionTypes.GET_BUSES):
            return { ...state, buses: action.payload };

        default:
            return state;
    }
}