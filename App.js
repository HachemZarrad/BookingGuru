import React from 'react';
import { AppNavigator } from './navigation/appNavigator';
import { Provider } from 'react-redux';
import {store} from './store/configureStore';
import { init } from './db/favoriteHotels';

init()
  .then(() => {
    console.log('Initialized database');
  })
  .catch(err => {
    console.log('Initializing db failed.');
    console.log(err);
  });



export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}

