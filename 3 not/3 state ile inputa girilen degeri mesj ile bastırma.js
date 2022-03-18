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
  TextInput,
  StatusBar,

} from 'react-native';
//import FirstComponent from './FirstComponent';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TouchableOpacity } from 'react-native';

//dışarı aktarma 1 çok kullanılan bu
export default class App extends React.Component {
  //state
  // komponent olusturuldugun o komponenın ıcerısınde veri tutulacak olan 
  // objedır

  constructor() {
    super();
    this.state = {
      text: '',
      data: []
    }

  }
  handleSave = () => {
   const {text} = this.state;
   alert(text);
  };

  render() {
    const { text } = this.state;
    return (
      <View style={[{ flex: 1, paddingTop: 30 }]}>
        <View style={style.title}>
          <Text style={style.title_text}> To-Do App</Text>
        </View>
        <View style={{ backgroundColor: '#ccc', padding: 10, flexDirection: 'row' }}>
          <TextInput
            style={style.input}
            // onChangeText={(text)=>{}} boş olarak gönderme
            value={text}
            onChangeText={(text) => { this.setState({ text }) }}
          />
          <TouchableOpacity onPress={this.handleSave} style={style.button}>
            <Text style={style.title_text}>Ekle</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}



const style = StyleSheet.create({
  title: {
    padding: 10,
    backgroundColor: 'blue',
    color: 'white',

  },
  title_text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',


  },

  input: {
    padding: 10, backgroundColor: 'white', padding: 10,
    flex: 1,
  },
  button: {
    padding: 10, backgroundColor: 'blue', borderRadius: 5, marginLeft: 10,

  },





});

