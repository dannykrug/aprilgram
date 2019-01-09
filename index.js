//Index.ios.js - place code in here for iOS!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import PhotoFeed from './src/components/PhotoFeed';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Aprilgram'} />
      <PhotoFeed />
    </View>
  );
};

AppRegistry.registerComponent('aprilgram', () => App);
