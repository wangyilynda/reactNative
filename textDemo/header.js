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


//组件
var Header=React.createClass({
  render:function(){
    return(
        <View style={styles.item}>
          <Text style={styles.font}>
            <Text style={styles.font1}>
              网易
            </Text>
            <Text style={styles.font2}>
              新闻
            </Text>
            <Text>
              大比拼
            </Text>
          </Text>
        </View>
    )
  }
});

//样式
const styles=StyleSheet.create({
  item:{
    marginTop:25,
    height:40,
    borderBottomWidth:1,
    borderColor:'black',
    alignItems:'center',
  },
  font:{
    fontSize:25,
    fontWeight:'bold',
  },
  font1:{
    color:'red',
  },
  font2:{
    backgroundColor:'red',
    color:'white'
  }
});

//导出模块

module.exports=Header;
