import React, { Component } from 'react';

import {StyleSheet, Text, View} from 'react-native';
import Controller from './Controller';
import {connect} from 'react-redux'

// import styles from './styles';

 class Main  extends Component {
  render() {
    return (
        <View style={styleApp.container}>
            <View style={styleApp.header}>
                <Text style={styleApp.appName}>EXAM 1: {'\n'}APP COMPONENT</Text>
                <Text style={styleApp.value}>{this.props.myValue}</Text>
            </View>
            <Controller/>
        </View>
    );
  }
}
function mapStateToProps(state) {
    return {myValue: state.value}
}

 export default connect(mapStateToProps)(Main)
const styleApp = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingTop: 30
    },
    header: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    appName: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    value: {
        color: 'yellow',
        fontSize: 40
    }
});