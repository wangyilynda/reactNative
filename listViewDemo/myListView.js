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


//有一个数据源，存放到state中，每次需要做的是看这条数据有没有发生改变


var content=["bnmnmnm",
              "nmnbnb",
              "nmnmn",
              "jjkjk",
              "uyuyu",
              "vbnghgd",
              "vbxvb",
              "rtete",
              "fdgdfsd",
              "dfdfdfasfsdfdsaf"];
var myListView=React.createClass({
  getInitialState:function(){
    //创建datasourcce对象
    var ds=new ListView.DataSource({
      //通过判断决定渲染哪些组件，避免全部渲染，提高渲染效率
      rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
    });
    return {
      //设置datasource时不直接使用提供的原始数据，使用cloneWithRows对数据源进行复制
      //使用复制后的数据源是ListView ，实例化数据发生变化时，listView组件的dataSource不会改变
      dataSource:ds.cloneWithRows(content)
    }
  },
  //渲染row组件，参数时每行要显示的数据对象
  _renderRow:function(data) {
    return (

        <View style={styles.row}>
          <Text style={styles.content}>{data}</Text>
        </View>
    );
  },
  render:function() {
    return(
        <ListView
            style={styles.container}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
        ></ListView>
    );

    }
});


var styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:25,
  },
  row:{
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    height:100,
    borderBottomWidth:1,
    borderBottomColor:'silver',
  },
  content:{
    flex:1,
    fontSize:18,
    lineHeight:100,
    textAlign:'center'

  }



});

module.exports=myListView;
