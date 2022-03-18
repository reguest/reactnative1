/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  View,
  Text
} from 'react-native';



export default class App extends React.Component {

  constructor() { // 1. sırada
    super();
    this.state = {
      text: ''
    }
    console.log("Contructor Çalıştı");
  }

  componentDidMount() { //3. sraıda
    console.log('Component did mount çalıştı');

  }
  shouldComponentUpdate() {
   // console.log('Component shouldComponentUpdate çalıştı');
   return true;
  }
  componentDidUpdate() {
    console.log('Component DidUpdate çalıştı');
  }
  componentWillUnmount() {
    console.log('Component un mount çalıştı');
  }
  render() { //2. sırada
    console.log('Render çalıştı');
    return (<View>
      <TouchableOpacity onPress={()=>this.setState({text:'a'})}>
        <Text>Değiştir</Text>
      </TouchableOpacity>
    </View>)
  }


}








