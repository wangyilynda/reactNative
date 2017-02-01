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
  ListView
} from 'react-native';


var movieData=require("./MoviesExample.json");
var movies=movieData.movies;

//有一个数据源，存放到state中，每次需要做的是看这条数据有没有发生改变

var myListView=React.createClass({

    getInitialState:function(){
        var data=new ListView.DataSource({
            rowHasChanged:(oldrow,newrow)=>oldrow!==newrow
        });
        return{
            dataSource:data.cloneWithRows(movies)
        }
    },
    _renderHeader:function(){
        return(
            <View style={styles.header}>
                <Text style={styles.headerText}>电影列表</Text>
            </View>
        );
    },
    _renderRow:function(movie){
        return(
            <View style={styles.row}>
                <Image style={styles.img} source={{uri:movie.posters.thumbnail}}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.textup}>{movie.title}</Text>
                    <Text style={styles.textdown}>{movie.year}</Text>
                </View>
            </View>
        );
    },
    _renderSeporator:function(sectionId,rowId){
        return(
            <View key={sectionId+rowId} style={styles.seporator}></View>
        );
    },
    render:function() {
        return(
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                renderSeparator={this._renderSeporator}
                renderHeader={this._renderHeader}
                initialListSize={10}
            >

            </ListView>
        );

    }
});


var styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:25,
    backgroundColor:'silver'
  },
  row:{
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    height:100,
    flexDirection:'row',
  },
    rightContainer:{
      flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
  textup:{
    flex:1,
    fontSize:14,
    marginTop:10,
      //marginBottom:10,
    textAlign:'center'

  },
    textdown:{
        flex:1,
        fontSize:14,
        marginBottom:10,
        textAlign:'center'
    },
    img:{
        width:53,
        height:83,
        backgroundColor:'green'
    },
    seporator:{
        height:1,
        backgroundColor:'pink'
    },
    header:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:80,
        borderBottomWidth:1,
        borderBottomColor:'pink'
    },
    headerText:{
        flex:1,
        lineHeight:80,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20
    }



});

module.exports=myListView;




























