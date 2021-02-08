import { combineReducers, applyMiddleware, createStore } from 'redux';
import Thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import hotelsReducer from './reducers/hotels';
import favoritesReducer from './reducers/favorites';

const rootReducer = combineReducers({
    hotels: hotelsReducer,
    favorites: favoritesReducer
});

export const store = createStore(rootReducer, applyMiddleware(Thunk));
