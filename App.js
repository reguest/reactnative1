/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';



export default class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  componentDidMount() {


    return fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        })

      })

      .catch((error) => {
        console.log(error)
      });
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View >
          <ActivityIndicator />
        </View>
      )
    } else {
      let movies = this.state.dataSource.map((val, key) => {
        return <View key={key} style={StyleSheet.item}>
          <Text>{val.title}</Text>
        </View>
      });
      return (
        <View >
          {movies}
        </View>
      );
    }



  }


}


const styles = StyleSheet.create({


  item: {
    flex: 1,
    alignItems: 'stretch',
    margin: 10,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  }
});





