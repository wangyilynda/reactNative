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
  RefreshControl,
  Image,
} from 'react-native';


//从文件中读取数据
var movieData=require("./MoviesExample.json");

var movie=movieData.movies;



//scrollView组件z:实现ScrollView 的基本功能

var movieList=React.createClass({
  render:function() {
    var movieArr=[];

    for(var i in movie){
      var item=movie[i];
      var row=(
          <View key={i} style={styles.row}>
            <Image style={styles.thumbnail} source={{uri:item.posters.thumbnail}}/>
            <View style={styles.rightContainer}>
              <Text style={styles.text1}>{item.title}</Text>
              <Text style={styles.text1}>{item.year}</Text>
            </View>
          </View>
      );

      movieArr.push(row);
    }

    return (
        <View style={styles.container}>
          <ScrollView>
            {
              //数组（所有子组件）
                movieArr
            }
          </ScrollView>
        </View>
    )
  }
});


var styles=StyleSheet.create({
  row:{
    flexDirection:'row',
    padding:5,
    alignItems:"center",
    backgroundColor:'gray',
  },
  thumbnail:{
    width:50,
    height:80,
    backgroundColor:'red',
  },
  rightContainer:{
    flex:1,
    marginLeft:10,
    justifyContent:'center',
    alignItems:'center',
  },
  text1:{
    fontSize:14,
    textAlign:'center',
    marginBottom:10,
    alignItems:'center',

  },
  container:{
    flex:1,
  }



});

module.exports=movieList;
