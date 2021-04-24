import * as ActionTypes from '../actions/actionTypes'


const initialState = {
    loading: false,
    token: '',
    userDetails: null,
    errMess: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.AUTHENTICATION_REQUEST:
            return { ...state, loading: true, errMess: null }
        case ActionTypes.AUTHENTICATION_SUCCESS:
            return {
                ...state, loading: false, token: action.payload.token,
                userDetails: action.payload.userDetails,
                errMess: null
            }
        case ActionTypes.AUTHENTICATION_FAILURE:
            return { ...state, loading: false, token: '', errMess: action.payload.err }

        case ActionTypes.LOGOUT_REQUEST:
            return { ...state, loading: true }
        case ActionTypes.LOGOUT_SUCCESS:
            return { ...state, loading: false, token: '', userDetails: ''}
        default:
            return state
    }
}