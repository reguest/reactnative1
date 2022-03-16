import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';


/*
// 1. component cagırma yontemı
const FirstComponent = ({ name, year,changeState }) => {
    return (
        <View>
            <Text>{name}    {year}</Text>
            <TouchableOpacity onPress={changeState}>
               <Text>Değiştir</Text>
           </TouchableOpacity>
        </View>
    )
}

export default FirstComponent;*/

export default class FirstComponent extends React.Component {
    render() {
 
        const { name, year, changeState } = this.props;
        return (
            <View>
                <Text>{name}   {year}</Text>
                <TouchableOpacity onPress={changeState}>
                    <Text>Değiştir</Text>
                </TouchableOpacity>
            </View>



         
        )
    }
}