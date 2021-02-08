import React from 'react';
import { AppNavigator } from './navigation/appNavigator';
import { Provider } from 'react-redux';
import {store} from './store/configureStore';
import { init, fetchFavorites, addFavorite, deleteFavorites, deleteFavorite} from './db/favoriteHotels';

init()
  .then(() => {
    console.log('Initialized database');
  })
  .catch(err => {
    console.log('Initializing db failed.');
    console.log(err);
  });

  // deleteFavorites()
  //   .then(() => {
  //     console.log('data deleted');
  //   })
  //   .catch((err) =>{
  //     console.log('dont touch that',err);
  //   } )

  // deleteFavorite('463496764676')
  //   .then((result) => {
  //     console.log('your result', result);
  //     console.log('data deleted');
  //   })
  //   .catch((err) =>{
  //     console.log('dont touch that',err);
  //   } )

// addFavorite('463496764676','new fav1', 'thumbnailUrl', 4, 'new address', 7.5 , '$521', 'new features')
//   .then((favorite) => {
//     console.log('my favorite',favorite);
//     console.log('easy peasy lemon squeezy');
//   })
//   .catch((err) => {
//     console.log('ass kicked',err);
//   })

fetchFavorites()
  .then((db) => {
    console.log('lahna',db);
  })
  .catch(err =>{
    console.log('error type 2',err);
  });

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}

