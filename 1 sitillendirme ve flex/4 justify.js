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
  //flex-direction : column
  //justify-content : flex-start , flex-and, center, space-betwen, space-around
  //align-items
  
  render() {
    return (

<View style={[{flex:1}]}>
    
 
        {/*    <View style={{flex:5,flexDirection:'row',justifyContent:'space-between',marginTop:50}}>
      <View style={[{backgroundColor:'blue',width:50,height:50}]}/>
      <View style={[{backgroundColor:'red',width:50,height:50}]}/>
            </View>

              <View style={[{flex:1,flexDirection:'row'}]}>
<View style={[style.welcomeArea,{backgroundColor:'red'}]}/>
<View style={[style.welcomeArea,{backgroundColor:'black'}]}/>
<View style={[style.welcomeArea,{backgroundColor:'green'}]}/>
              </View>*/}


              <View style={{flex:5,flexDirection:'row',justifyContent:'space-around',marginTop:50}}>
      <View style={[{backgroundColor:'blue',width:50,height:50}]}/>
      <View style={[{backgroundColor:'red',width:50,height:50}]}/>
            </View>

              <View style={[{flex:1,flexDirection:'row'}]}>
<View style={[style.welcomeArea,{backgroundColor:'red'}]}/>
<View style={[style.welcomeArea,{backgroundColor:'black'}]}/>
<View style={[style.welcomeArea,{backgroundColor:'green'}]}/>
              </View>

      </View>
    )
  }
}



const style = StyleSheet.create({
  welcomeArea: { paddingTop: 150,
    backgroundColor:'red',
    flex:1,

   },

   welcomeText: { paddingTop: 10,
   color:'white',
   fontSize:20,
   }






});

