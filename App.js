import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Layout from './containers/Layout/Layout';

import store from './store/index';

export default function App() {

    return (
        
      <Provider store={store}><Layout/></Provider>
              
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


