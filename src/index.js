import React from 'react';
import { StatusBar, View } from 'react-native';
import Home from './scenes/home'

const App: () => React$Node = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle='light-content'/>
      <Home />
    </View>
  )
}

export default App;
