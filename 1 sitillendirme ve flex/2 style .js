/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//dışarı aktarma 1 çok kullanılan bu
export default class App extends React.Component {
  
  
  render() {
    return (
      <View style={[style.welcomeArea,{backgroundColor:'blue'}]}>

        <Text style={style.welcomeText}> Merhaba</Text>

      </View>
    )
  }
}



const style = StyleSheet.create({
  welcomeArea: { paddingTop: 150,
    backgroundColor:'red',
   },

   welcomeText: { paddingTop: 10,
   color:'white',
   fontSize:20,
   }






});

