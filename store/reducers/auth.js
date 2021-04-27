import * as ActionTypes from '../actions/actionTypes'


const initialState = {
    token: '',
    userDetails: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.AUTHENTICATION:
            return {
                ...state, token: action.token,
                userDetails: action.userDetails,
            }

        case ActionTypes.LOGOUT:
            return initialState 

        default:
            return state
    }
}