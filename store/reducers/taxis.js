import * as ActionTypes from '../actions/actionTypes';

const initialState = {
    taxis: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (ActionTypes.GET_TAXIS):
            return { ...state, taxis: action.payload };

        default:
            return state;
    }
}