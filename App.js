import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Greeting = ({name}) => <Text>Hello {name}!</Text>;

export default class GreetPeople extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doeName: 'Doe'
        };
    }

    componentDidMount(){
        setTimeout(
            () => this.setState({doeName:'Alex'}),
            3000
        )
    }

    render() {
        const janesName = 'Jane';
        return (
            <View style={{marginTop:40, marginLeft:20}}>
                <Greeting name='John' />
                <Greeting name={janesName} />
                <Greeting name={this.state.doeName} />
            </View>
        );
    }
}