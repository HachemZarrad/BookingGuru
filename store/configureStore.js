import { combineReducers, applyMiddleware, createStore } from 'redux';
import Thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import { HotelsReducer} from './reducers/hotels';


export const store = () => {
    const rootReducer = combineReducers({
        hotels: HotelsReducer
    });
        
    createStore(rootReducer);
}
