import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDimensionsBasics extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 3, backgroundColor: 'powderblue'}} >
                    <View style={{width: 50, height: 50, backgroundColor: 'orange'}} />
                    <View style={{width: '50%', height: 50, backgroundColor: 'green'}} />
                    <View style={{width: 150, height: 50, backgroundColor: 'red'}} />
                </View>
                <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                <View style={{flex: 1, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}