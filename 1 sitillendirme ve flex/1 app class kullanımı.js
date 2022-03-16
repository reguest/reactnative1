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
/* //dışarı aktarma 1 çok kullanılan bu
export default class App extends React.Component {
  render() {
    return (
      <View style={{ paddingTop: 150 }} >

        <Text> Merhaba</Text>

      </View>
    )
  }
}
*/

//dışarı aktarma 2
export const App = () => {
  return (<View style={{ paddingTop: 150 }} >

    <Text> Merhaba</Text>

  </View>)
}

export default App;


