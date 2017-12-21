import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

import LifecycleScreen from './screens/LifecycleScreen';
import ImageScreen from './screens/ImageScreen';
import FlexBoxScreen from './screens/FlexBoxScreen'
import AnimationScreen from './screens/AnimationScreen'
import NetworkScreen from "./screens/NetworkScreen";
import NativeModuleScreen from './screens/NativeModuleScreen';
import ListViewScreen from './screens/ListViewScreen';

import AppStyles from './common/styles'

const HomeScreen = ({navigation}) => (
    <View style={AppStyles.container}>
        <Button onPress={() => navigation.navigate('FlexBox')} title="flexbox"/>
        <Button onPress={() => navigation.navigate('Lifecycle')} title="lifecycle"/>
        <Button onPress={() => navigation.navigate('Image')} title="Image"/>
        <Button onPress={() => navigation.navigate('Animation')} title="Animation"/>
        <Button onPress={() => navigation.navigate('ListView')} title="ListView"/>
        <Button onPress={() => navigation.navigate('Network')} title="Network"/>
        <Button onPress={() => navigation.navigate('NativeModule')} title="NativeModule"/>
    </View>
);

const App = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    FlexBox: {
        screen: FlexBoxScreen,
        navigationOptions: {
            headerTitle: 'FlexBox',
        }
    },
    Lifecycle: {
        screen: LifecycleScreen,
        navigationOptions: {
            headerTitle: 'Lifecycle',
        },
    },
    Image: {
        screen: ImageScreen,
        navigationOptions: {
            headerTitle: 'Image',
        },
    },
    Animation: {
        screen: AnimationScreen,
        navigationOptions: {
            headerTitle: 'Animation',
        },
    },
    Network: {
        screen: NetworkScreen,
        navigationOptions: {
            headerTitle: 'Network',
        },
    },
    ListView: {
        screen: ListViewScreen,
        navigationOptions: {
            headerTitle: 'ListView',
        }
    },
    NativeModule: {
        screen: NativeModuleScreen,
        navigationOptions: {
            headerTitle: 'NativeModule',
        }
    }
});

export default App;