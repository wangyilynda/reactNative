/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


import Main from './component/Main/main';
//var Main=require("./component/Main/main");
export default class GoShopping extends Component {
  render() {
    return (
      <Main/>
    );
  }
}



AppRegistry.registerComponent('GoShopping', () => GoShopping);
