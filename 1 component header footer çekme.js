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
import FirstComponent from './FirstComponent';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//dışarı aktarma 1 çok kullanılan bu
export default class App extends React.Component {
  //flex-direction : column
  //justify-content : flex-start , flex-and, center, space-betwen, space-around
  //align-items
  //flex-wrap //sıgmayanı asagı alır

  render() {
    return (

      <View style={[{ flex: 1 }]}>


        {/* column içerisindeki view'ı sona alır flex-end, center */}
        <View style={{ flex: 1}}>
           <FirstComponent 
             name={"Orhan ince"} 
             text={"Hoşgeldiniz"}
           />
        </View>


      </View>
    )
  }
}



const style = StyleSheet.create({
  welcomeArea: {
    paddingTop: 150,
    backgroundColor: 'red',
    flex: 1,

  },

  welcomeText: {
    paddingTop: 10,
    color: 'white',
    fontSize: 20,
  }






});

