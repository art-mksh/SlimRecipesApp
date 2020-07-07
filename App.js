import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigations/AppNavigation';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';




async function loadAppAplication() {
    await Font.loadAsync({
      'GUERRILLA-Normal': require('./assets/fonts/GUERRILLA-Normal.otf')
    });
}

export default function App() {

  const [dataLoaded,setDataLoaded] = useState(false);


  if(!dataLoaded){
    return (
      <AppLoading
        startAsync={loadAppAplication}
        onFinish={()=> setDataLoaded(true)}
      />
    )
  }


  /*
  return (
    <View>
    <Text style={{fontFamily:'Roboto-Italic'}}>аааа</Text>
     <AppContainer />
     </View>
  );
  */

 return (
   <AppContainer />
  );
}
