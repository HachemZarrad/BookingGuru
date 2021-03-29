import { combineReducers, applyMiddleware, createStore } from 'redux';
import Thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import hotelsReducer from './reducers/hotels';
import popularDestinationsReducer from './reducers/popularDestinations'
import flightsReducer from './reducers/flights'
import trainsReducer from './reducers/trains'
import busesReducer from './reducers/buses'
import taxisReducer from './reducers/taxis'
// import foodReducer from './reducers/food'
import favoritesReducer from './reducers/favorites';
import countriesReducer from './reducers/countriesAndCodes';

const rootReducer = combineReducers({
    hotels: hotelsReducer,
    popularDestinations: popularDestinationsReducer, 
    flights: flightsReducer,
    trains: trainsReducer,
    buses: busesReducer,
    taxis: taxisReducer,
    // food: foodReducer,
    favorites: favoritesReducer,
    countriesAndCodes: countriesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(Thunk));
