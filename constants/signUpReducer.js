//THIS FILE HAS NO RELATION TO REDUX. THE MAIN USE IS USE REDUCER HOOK

import Actions from './signUpActions'


export default (state, action) => {
    switch (action.type) {
        case Actions.GET_FIRST_NAME:
            return { ...state, firstName: action.payload }
        case Actions.GET_LAST_NAME:
            return { ...state, lastName: action.payload }
        case Actions.GET_EMAIL:
            return { ...state, email: action.payload }
        case Actions.GET_EMAIL_VALIDITY:
            return { ...state, emailValidity: action.payload }
        case Actions.GET_BIRTH_DATE:
            return { ...state, birthDate: action.payload }
        case Actions.GET_COUNTRY:
            return { ...state, country: action.payload }
        case Actions.GET_PHONE_NUMBER:
            return { ...state, phoneNumber: action.payload }
        default:
            return state
    }
}
