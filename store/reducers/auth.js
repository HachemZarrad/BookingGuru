import * as ActionTypes from '../actions/actionTypes'


const initialState = {
    loading: false,
    token: token,
    user: null,
    errMess: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.AUTHENTICATION_REQUEST:
            return { ...state, loading: true, token: null, errMess: null }
        case ActionTypes.AUTHENTICATION_SUCCESS:
            return {...state, loading: false, token: action.payload, errMess: null}    
        case ActionTypes.AUTHENTICATION_FAILURE:
            return {...state, loading: false, token: null, errMess: action.payload}    
    
        case ActionTypes.LOGOUT_REQUEST:
            return { ...state, loading: true, errMess: null }
        case ActionTypes.LOGOUT_SUCCESS:
            return {...state, loading: false, token: '', errMess: null}    
    }
}