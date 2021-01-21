import React from 'react';
import { AppNavigator } from './navigation/appNavigator';
import { Provider } from 'react-redux';
import {store} from './store/configureStore';


export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}

