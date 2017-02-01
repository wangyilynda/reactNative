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
  View,
  Navigator,
  TouchableOpacity,
  TextInput
} from 'react-native';


var nav=require('./navpassvalue');
//var nav=require("./navnormal");
AppRegistry.registerComponent('navigatorTest', () => nav);
