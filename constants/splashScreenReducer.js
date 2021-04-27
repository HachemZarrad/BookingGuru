//THIS FILE HAS NO RELATION TO REDUX. THE MAIN USE IS USE REDUCER HOOK

import Actions from './splashScreenActions'


export default (state, action) => {
    switch (action.type) {
        case Actions.HOTELS_LOADING:
            return { ...state, hotelsLoading: action.payload }
        case Actions.HOTELS_ERROR:
            return { ...state, hotelsError: action.payload }

        case Actions.TRAINS_LOADING:
            return { ...state, trainsLoading: action.payload }
        case Actions.TRAINS_ERROR:
            return { ...state, trainsError: action.payload }

        case Actions.FLIGHTS_LOADING:
            return { ...state, flightsLoading: action.payload }
        case Actions.FLIGHTS_ERROR:
            return { ...state, flightsError: action.payload }

        case Actions.TAXIS_LOADING:
            return { ...state, taxisLoading: action.payload }
        case Actions.TAXIS_ERROR:
            return { ...state, taxisError: action.payload }

        case Actions.BUSES_LOADING:
            return { ...state, busesLoading: action.payload }
        case Actions.BUSES_ERROR:
            return { ...state, busesError: action.payload }

        case Actions.DESTINATIONS_LOADING:
            return { ...state, destinationsLoading: action.payload }
        case Actions.DESTINATIONS_ERROR:
            return { ...state, destinationsError: action.payload }

        case Actions.COUNTRIES_CODES_LOADING:
            return { ...state, countries_CodesLoading: action.payload }
        case Actions.COUNTRIES_CODES_ERROR:
            return { ...state, countries_CodesError: action.payload }

        default:
            return state
    }
}