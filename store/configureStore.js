import { combineReducers, applyMiddleware, createStore } from 'redux';
import Thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import hotelsReducer from './reducers/hotels';

const rootReducer = combineReducers({
    hotels: hotelsReducer
});

export const store = createStore(rootReducer, applyMiddleware(Thunk, logger));
