import React, {Component} from 'react';
import {Image, ListView, Text, TouchableOpacity, View} from 'react-native';

export default class ListViewScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }).cloneWithRows(require('../assets/data.json').docs)
        };
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#dbe1e4'}}>
                <ListView
                    style={{flex: 1}}
                    showsVerticalScrollIndicator={false}
                    enableEmptySections={true}
                    initialListSize={1}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderRow(rowData)}
                    renderSeparator={(sectionID, rowID, highlighted) => this.renderSeparator(sectionID, rowID, highlighted)}
                />
            </View>
        );
    }

    renderRow(data, sectionID, rowID) {
        return (
            <Row data={data} index={rowID}/>
        );
    }

    renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
        return <View key={`${sectionID}-${rowID}`} style={{height: 1, backgroundColor: '#F1F1F1'}}/>;
    }
}

class Row extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.data;
        return (
            <TouchableOpacity style={{backgroundColor: '#FFFFFF', flex: 1}} onPress={() => {
            }}>
                <View style={{flexDirection: 'row', padding: 5}}>
                    <Image source={{uri: data.avatar}} style={{width: 50, height: 50}}>

                    </Image>
                    <Text style={{
                        flex: 1,
                        lineHeight: 20,
                        marginHorizontal: 10,
                        fontSize: 14,
                        color: '#76767a'
                    }}>{data.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}