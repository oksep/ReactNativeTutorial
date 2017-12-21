import React, {Component} from 'react';
import {Animated, Easing, Image, View} from 'react-native';
import AppStyles from '../common/styles'

export default class AnimationScreen extends Component {
    render() {
        return (
            <View style={AppStyles.container}>
                <FadeInView>
                    <Image style={{width: 300, height: 300}} source={require('../assets/doge.png')}>
                    </Image>
                </FadeInView>
            </View>
        );
    }
}


class FadeInView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rotateValue: new Animated.Value(0)
        };
    }

    componentDidMount() {
        this.startAnimation()
    }

    startAnimation() {
        this.state.rotateValue.setValue(0);
        Animated.timing(this.state.rotateValue, {
            toValue: 1,
            duration: 800,
            easing: Easing.linear
        }).start(() => this.startAnimation());
    }

    render() {
        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    transform: [{
                        rotateZ: this.state.rotateValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '360deg']
                        })
                    }]
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}