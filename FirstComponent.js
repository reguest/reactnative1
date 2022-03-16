import React,{Component} from 'react';
import {View,Text} from 'react-native';



// 1. component cagırma yontemı
const FirstComponent = ({name,text}) => {
    return(
        <View>
            <Text>{name}    {text}</Text>
        </View>
    )
}

export default FirstComponent;


/* 2. component cagırma yontemı
export default class FirstComponent extends React.Component{

render(){
    return (
        <View>
        <Text>First Component</Text>
    </View>
    )
}
}
*/