import React, {Component} from 'react';
import {ActivityIndicator, InteractionManager, ScrollView, Text, View} from 'react-native';

export default class NetworkScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: null
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => this.fetchData())
    }

    fetchData() {
        setTimeout(() => {
            NetworkScreen.requestDoubanBook().then(result => {
                this.setState({
                    isLoading: false,
                    data: JSON.stringify(result)
                });
            });
        }, 500)
    }

    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: '#dbe1e4'}}>
                {
                    this.state.isLoading ?
                        <View style={{alignItems: 'center'}}>
                            <ActivityIndicator color={'#08D'} size="large" style={{width: 44, height: 44}}/>
                            <Text>正在加载...</Text>
                        </View> :
                        <Text>
                            {this.state.data}
                        </Text>
                }
            </ScrollView>
        );
    }


    static async saveUserName(account: String) {
        let key = '@key-user-name';
        try {
            await AsyncStorage.setItem(key, account);
        } catch (error) {
            console.warn(error)
        }
    };

    static async getUserName() {
        let key = '@key-user-name';
        try {
            return await AsyncStorage.getItem(key);
        } catch (error) {
            console.warn(error)
        }
        return null;
    };

    static async requestDoubanBook() {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let response = await fetch('https://api.douban.com/v2/book/25862578');
            let obj = await response.json();
            return obj;
        } catch (error) {
            console.error(error);
        }
    }
}