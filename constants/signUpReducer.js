//THIS FILE HAS NO RELATION TO REDUX. THE MAIN USE IS USE REDUCER HOOK

import Actions from './signUpActions'


export default (state, action) => {
    switch (action.type) {
        case Actions.FIRST_NAME:
            return { ...state, firstName: action.payload }
        case Actions.FIRST_NAME_VALIDITY:
            return { ...state, firstNameValidity: action.payload }

        case Actions.LAST_NAME:
            return { ...state, lastName: action.payload }
        case Actions.LAST_NAME_VALIDITY:
            return { ...state, lastNameValidity: action.payload }

        case Actions.EMAIL:
            return { ...state, email: action.payload }
        case Actions.EMAIL_VALIDITY:
            return { ...state, emailValidity: action.payload }

        case Actions.BIRTH_DATE:
            return { ...state, birthDate: action.payload }

        case Actions.COUNTRY:
            return { ...state, country: action.payload }

        case Actions.PHONE_NUMBER:
            return { ...state, phoneNumber: action.payload }
        case Actions.PHONE_NUMBER_VALIDITY:
            return { ...state, phoneNumberValidity: action.payload }
        default:
            return state
    }
}
