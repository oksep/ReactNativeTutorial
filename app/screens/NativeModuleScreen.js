/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import AppStyles from '../common/styles';
import {multiply, sum} from "../util/calculator";
import ColorView from '../widget/ColorView';

export default class NativeModuleScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={AppStyles.container}>
                <View style={{flexDirection: 'row'}}>
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
                    }}>
                        <Text>3 x 4 = ?</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', marginTop: 100}}>
                    <ColorView style={{width: 60, height: 60, margin: 10}} color='#0088DD'/>
                    <ColorView style={{width: 60, height: 60, margin: 10}} color='#DD0088'/>
                </View>

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
