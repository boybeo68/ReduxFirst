import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Main from './Main'

const defaultValue = {value: 19, hightLight: false};
const reducer = (state= defaultValue, action ) => {
    if (action.type === 'UP') return {value: state.value + 1, hightLight: state.hightLight};
    if (action.type === 'DOWN') return {value: state.value - 1, hightLight: state.hightLight};
    if (action.type === 'ChangeColor') return {value:state.value, hightLight: !state.hightLight};
    return state;
};
const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <Main/>
        </Provider>

    );
  }
}

