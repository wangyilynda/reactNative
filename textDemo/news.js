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


var news=React.createClass({
  showalert:function(message){
    alert(message);
  },
  render:function(){
    //定义数组：用来存储设置着的text组件
    var newsComponents=[];
    //便利存储信息的数组，从外部传入,key是唯一的标识，native渲染的时候会用到
    for(var i in this.props.newscon){
      var text=(
          <Text numberOfLines={2} key={i} style={styles.content} onPress={this.showalert.bind(this,this.props.newscon[i])}>
            {this.props.newscon[i]}
          </Text>
      );
      newsComponents.push(text);
    }

    return(
        <View >
          <Text style={styles.title}>今日要闻</Text>

            {newsComponents}

        </View>
    );
  }
});

var styles=StyleSheet.create({
  title:{
    marginLeft:10,
    marginTop:10,
    color:'red',
    fontSize:20,
    fontWeight:'bold'
  },
  content:{
    marginTop:10,
    marginLeft:10,
    marginRight:10,
  },
  font:{
      fontSize:14,
  },
  flex:{
    flex:1,
  },

});

module.exports=news;