import React from 'react';
import {View} from 'react-native';
import Header from './components/Header';
import Posts from './components/Posts';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Header />
      <Posts />
    </View>
  );
}
