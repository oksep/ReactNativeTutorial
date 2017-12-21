/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import AppStyles from '../common/styles'

export class LifecycleGraph extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillReceiveProps(nextProps, nextState) {
        console.log('componentWillReceiveProps', nextProps, nextState);
        if (this.props.count && !nextProps.count) {
        }
    }

    componentDidUpdate(nextProps, nextState) {
        console.log('componentDidUpdate', nextProps, nextState);
    }

    componentWillUnmount() {
        console.log('componentWillUnMount')
    }

    render() {
        return (
            <View style={{alignItems: 'stretch'}}>
                <Text style={styles.text_mount}>
                    componentWillMount(){'\n'}
                    |{'\n'}
                    componentDidMount()
                </Text>
                <Text style={{textAlign: 'center'}}>|</Text>
                <Text style={styles.text_update}>
                    componentWillReceiveProps({this.props.count}){'\n'}
                    |{'\n'}
                    componentDidUpdate()
                </Text>
                <Text style={{textAlign: 'center'}}>|</Text>
                <Text style={styles.text_unmount}>
                    componentWillUnMount()
                </Text>
            </View>
        )
    }
}

export default class LifecycleScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <View style={AppStyles.container}>
                <Button title="Count++" onPress={this.onButtonClick.bind(this)}/>
                <LifecycleGraph count={this.state.count}/>
            </View>
        )
    }

    onButtonClick() {
        this.setState({
            count: this.state.count + 1
        })
    }
}

const styles = StyleSheet.create({
    text_mount: {
        textAlign: 'center',
        backgroundColor: '#08D',
        padding: 10,
        width: 280
    },
    text_update: {
        textAlign: 'center',
        backgroundColor: '#37dd65',
        padding: 10,
        width: 280
    },
    text_unmount: {
        textAlign: 'center',
        backgroundColor: '#f48c56',
        padding: 10,
        width: 280
    }
});