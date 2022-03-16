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
  TouchableOpacity

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
  //state
  // komponent olusturuldugun o komponenın ıcerısınde veri tutulacak olan 
  // objedır

  constructor() {
    super();
    this.state = {
      name: 'Orhan ince',
      year: 1996
    };
  }
  /*
    render() {
      return (//state veri getirme 1.yöntem
  
        <View style={[{ flex: 1 }]}>
  
  
           <View style={{ flex: 1}}>
            <Text>{this.state.name} {this.state.year}</Text>
          </View>
  
  
        </View>
      )
    }*/

changeState=()=> {
  this.setState({
    name:'ali veli',
    year:1991
  }, ()=>{
    alert('Bilgiler Güncellendi');
  }
  );
};

  render() {
    const { name, year } = this.state;
    return (  //state veri getirme 2.yöntem

      <View style={[{ flex: 1,paddingTop:100 }]}>

        <Text>{name} {year}</Text>

        <TouchableOpacity onPress={() => this.changeState()}>
          <Text > Değiştir</Text>
        </TouchableOpacity>




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

