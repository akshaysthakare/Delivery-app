
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import DeliveryNavigator from './src/navigation/DeliveryNavigator';

//-redux code start

import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';


import authReducers from './src/stores/reducers/auth';
import orderTypesReducers from './src/stores/reducers/order_types';
import orderStatusesReducers from './src/stores/reducers/order_statuses'
import ordersReducers from './src/stores/reducers/orders'
const rootReducer = combineReducers({
  auth: authReducers,
  order_types: orderTypesReducers,
  order_statuses: orderStatusesReducers,
  orders: ordersReducers,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

//redux end here

export default function App() {
  return (
      <Provider store={store}>

      <DeliveryNavigator />
      </Provider>
  );

}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

