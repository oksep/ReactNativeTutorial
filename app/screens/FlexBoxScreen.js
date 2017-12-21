import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export default class FlexBoxScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>

                {this.renderJustifyContent()}
                {this.renderAlignItems()}
                {this.renderFlexWrap()}
            </ScrollView>
        );
    }

    renderJustifyContent() {
        return (
            <View>
                <Text style={{marginLeft: 5, marginTop: 5}}>flex-start</Text>
                <View style={[styles.container, {justifyContent: 'flex-start'}]}>
                    {this.renderItems()}
                </View>

                <Text style={{marginLeft: 5, marginTop: 5}}>flex-end</Text>
                <View style={[styles.container, {justifyContent: 'flex-end'}]}>
                    {this.renderItems()}
                </View>

                <Text style={{marginLeft: 5, marginTop: 5}}>center</Text>
                <View style={[styles.container, {justifyContent: 'center'}]}>
                    {this.renderItems()}
                </View>

                <Text style={{marginLeft: 5, marginTop: 5}}>space-between</Text>
                <View style={[styles.container, {justifyContent: 'space-between'}]}>
                    {this.renderItems()}
                </View>

                <Text style={{marginLeft: 5, marginTop: 5}}>space-around</Text>
                <View style={[styles.container, {justifyContent: 'space-around'}]}>
                    {this.renderItems()}
                </View>
            </View>
        )
    }

    renderAlignItems() {
        return (
            <View>
                <Text style={{marginLeft: 5, marginTop: 55}}>stretch</Text>
                <View style={[styles.container2, {alignItems: 'stretch'}]}>
                    {this.renderItems2()}
                </View>

                <Text style={{marginLeft: 5, marginTop: 5}}>flex-start</Text>
                <View style={[styles.container2, {alignItems: 'flex-start'}]}>
                    {this.renderItems2()}
                </View>

                <Text style={{marginLeft: 5, marginTop: 5}}>flex-end</Text>
                <View style={[styles.container2, {alignItems: 'flex-end'}]}>
                    {this.renderItems2()}
                </View>

                <Text style={{marginLeft: 5, marginTop: 5}}>center</Text>
                <View
                    style={[styles.container2, {alignItems: 'center'}]}>
                    {this.renderItems2()}
                </View>
            </View>
        )
    }

    renderFlexWrap() {
        return (
            <View>
                <Text style={{marginLeft: 5, marginTop: 55}}>nowrap</Text>
                <View style={[styles.container, {flexWrap: 'nowrap'}]}>
                    {this.renderItems(15)}
                </View>

                <Text style={{marginLeft: 5, marginTop: 5}}>wrap</Text>
                <View style={[styles.container, {flexWrap: 'wrap'}]}>
                    {this.renderItems(15)}
                </View>
            </View>
        )
    }

    renderItems(count: number = 5) {
        let items = [];
        for (let i = 0; i < count; i++) {
            items[i] = (
                <Text key={i}
                      style={{
                          textAlign: 'center',
                          width: 50,
                          paddingVertical: 20,
                          backgroundColor: '#08D',
                          borderWidth: 1,
                          borderColor: '#26dd8f'
                      }}>
                    {i}
                </Text>
            )
        }
        return items
    }

    renderItems2() {
        let items = [];
        items.push(
            <Text key={1}
                  style={[styles.item, {paddingVertical: 30}]}>
            </Text>
        );

        items.push(
            <Text key={2}
                  style={styles.item}>
            </Text>
        );

        items.push(
            <Text key={3}
                  style={[styles.item, {paddingVertical: 50}]}>
            </Text>
        );
        return items
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 5,
        backgroundColor: '#8fa9dd',
        padding: 5
    },
    container2: {
        flexDirection: 'row',
        margin: 5,
        backgroundColor: '#8fa9dd',
        padding: 5,
        justifyContent: 'space-around',
        height: 130
    },
    item: {
        textAlign: 'center',
        width: 50,
        paddingVertical: 20,
        backgroundColor: '#08D',
        borderWidth: 1,
        borderColor: '#26dd8f'
    }
});
