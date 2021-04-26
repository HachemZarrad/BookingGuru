import * as ActionTypes from '../actions/actionTypes'


const initialState = {
    token: '',
    userDetails: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.AUTHENTICATION:
            return {
                ...state, token: action.payload.token,
                userDetails: action.payload.userDetails,
            }

        case ActionTypes.LOGOUT:
            return initialStat 
        default:
            return state
    }
}