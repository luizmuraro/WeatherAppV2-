import React from 'react';
import { StatusBar, View } from 'react-native';
import Header from './src/components/Header'
import Home from './src/pages/Home';
import Routes from './src/routes';

function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <Routes />
    </>
  );
}

export default App;



