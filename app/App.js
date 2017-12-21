/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

import AppStyles from './common/styles';
import {multiply, sum} from "./util/calculator";
import ColorView from './widget/ColorView';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const config = Platform.select({
    ios: require('./common/config.ios'),
    android: require('./common/config.android')
}).default;

export default class App extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

    }

    componentDidUpdate() {

    }

    componentWillUnMount() {

    }

    componentDidUnMount() {

    }

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={AppStyles.container}>
                <Image source={pic} style={{width: 193, height: 110}} />
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
                <TouchableOpacity style={AppStyles.button} onPress={() => {
                    sum(3, 4, (value) => {
                        window.alert(value)
                    })
                }}>
                    <Text>3 + 4 = ?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={AppStyles.button} onPress={() => {
                    multiply(3, 4).then((value) => {
                        window.alert(value)
                    });
                    console.warn(config)
                }}>
                    <Text>3 x 4 = ?</Text>
                </TouchableOpacity>

                <ColorView style={{width: 30, height: 30}} color='#0088DD'/>
                <ColorView style={{width: 30, height: 30}} color='#DD0088'/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
