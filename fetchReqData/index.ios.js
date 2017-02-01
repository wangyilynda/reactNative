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

//var fetchReqData=require("./getData");
var fetchReqData=require("./movieList");
AppRegistry.registerComponent('fetchReqData', () => fetchReqData);
