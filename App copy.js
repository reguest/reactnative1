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
<<<<<<< HEAD
  Text
=======
  Text,
  StatusBar,
  TouchableOpacity

>>>>>>> f1370110aacd86f8c83b2963e5882f5e82bb5f97
} from 'react-native';



export default class App extends React.Component {

<<<<<<< HEAD
  constructor() { // 1. sırada
    super();
    this.state = {
      text: ''
    }
    console.log("Contructor Çalıştı");
  }

  componentDidMount() { //3. sraıda
    console.log('Component did mount çalıştı');

=======
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

  changeState = () => {
    this.setState({
      name: 'alis vesli',
      year: 199133
    }, () => {
      alert('Bilgiler Güncellendi');
    }
    );
  };

  render() {
    const { name, year } = this.state;
    return (  //state veri getirme 2.yöntem

      <View style={[{ flex: 1, paddingTop: 100 }]}>

        <FirstComponent changeState={this.changeState} name={name} year={year}/>

       



      </View>
    )
>>>>>>> f1370110aacd86f8c83b2963e5882f5e82bb5f97
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








