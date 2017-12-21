import React, {Component} from 'react'
import {requireNativeComponent} from 'react-native';
import PropTypes from 'prop-types';

const RCTColorView = requireNativeComponent('RCTColorView', null);

export default class ColorView extends Component {
    render() {
        return <RCTColorView ref='customView' {...this.props}/>
    }
}

ColorView.defaultProps = {
    // color: "#08D"
    isRed: false
};

ColorView.propTypes = {
    // color: PropTypes.string.isRequired
    isRed: PropTypes.bool.isRequired
};