import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={{margin:40}}>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
                <Text style={{color:'yellow'}}>yellow</Text>
                <Text style={[styles.bigblue, {color:'green'}]}>bigblue, then green</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});