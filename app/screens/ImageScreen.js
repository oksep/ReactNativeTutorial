import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

import AppStyles from '../common/styles';

export default class ImageScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ImageBackground source={{
                uri: 'https://www.toptal.com/designers/subtlepatterns/patterns/intersection.png'
            }} style={AppStyles.container}>
                <View style={{margin: 10, alignItems: 'center'}}>
                    <Image source={require('../assets/email.png')} style={{width: 110, height: 110}}/>
                    <Text style={{marginVertical: 10}}>本地图片</Text>
                </View>
                <View style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
                    <Image source={{
                        uri: 'http://assets.septenary.cn/user/1/image/5fa6de0c-b9c3-40fd-a195-0a7e7f9cd15f'
                    }} style={styles.image}/>
                    <Image source={{
                        uri: 'http://assets.septenary.cn/user/4/image/0aa31418-eb71-48bd-fdd5-1cbe0c4b8e29'
                    }} style={styles.image}/>
                </View>
                <Text style={{marginVertical: 10}}>网络图片</Text>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginHorizontal: 10
    },
});