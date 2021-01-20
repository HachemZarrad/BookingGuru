import React from 'react';
import { AppNavigator } from './navigation/appNavigator';
import { Provider } from 'react-redux';
// import { store } from './store/configureStore';

import { combineReducers, applyMiddleware, createStore } from 'redux';
import Thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import hotelsReducer from './store/reducers/hotels';

const rootReducer = combineReducers({
  hotels: hotelsReducer
});

 const store = createStore(rootReducer, applyMiddleware(Thunk));


export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}

