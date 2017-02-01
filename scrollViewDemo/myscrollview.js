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
  ScrollView,
    RefreshControl
} from 'react-native';


//scrollView组件z:实现ScrollView 的基本功能

var myscrollview=React.createClass({
  _onScrollBeginDrag:function(){
   console.log('drag start');
  },
  _onScrollEndDrag:function(){
    console.log('drag end');
  },
  _onMomentumScrollEnd:function(){
    　console.log('slide end');
  },
  _onMomentumScrollBegin:function(){
    console.log('slide start');
  },
  _onRefresh:function(){
    alert('refresh');
  },
  render:function() {
    return (
        <View style={styles.container}>
          <ScrollView style={styles.scrollview}
            showsVerticalScrollIndicator={true}
            onScrollBeginDrag={this._onScrollBeginDrag}
            onScrollEndDrag={this._onScrollEndDrag}
            onMomentumScrollEnd={this._onMomentumScrollEnd}
            onMomentumScrollBegin={this._onMomentumScrollBegin}
                      refreshControl={
                        <RefreshControl refreshing={false} tintColor='red' title='正在刷新...' onRefresh={this._onRefresh}>

                        </RefreshControl>
                      }
          >
            <View style={styles.view1}></View>
            <View style={styles.view2}></View>
            <View style={styles.view3}></View>
          </ScrollView>
        </View>
    )
  }
});


var styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'cyan',
  },
  scrollview:{
    marginTop:25,
    backgroundColor:'#CCCCCC'
  },
  view1:{
    margin:15,
    flex:1,
    backgroundColor:'pink',
    height:300//scrollview没有一个固定的高度，所以需要给一个高度
  },
  view2:{
    margin:15,
    flex:1,
    backgroundColor:'yellow',
    height:300
  },
  view3:{
    margin:15,
    flex:1,
    backgroundColor:'blue',
    height:300
  },

});

module.exports=myscrollview;
