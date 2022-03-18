import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class index extends React.Component {
    render() {
        return <View>
            <Text>{this.props.name} {this.props.age}</Text>
        </View>
    }
}

index.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number
};

index.defaultProps={
    name:'default isim buraya', //sadece bu iki satırdaki kod default degerını belırlıyor
    age:22
}