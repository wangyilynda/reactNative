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
	TextInput,
	TouchableOpacity
} from 'react-native';

//触摸事件的绑定

 var TouchableDemo =React.createClass({
 getInitialState:function(){
 return{
 inputText:''
 }
 },
 getContent:function(text){
 this.setState({
 inputText:text
 })
 },
 clickbtn:function(){
 alert(this.state.inputText);
 },
 render:function(){
 return(
 <View style={styles.container}>
 <View style={styles.flex}>
 <TextInput
 style={styles.input}
 returnKeyType='search'
 placeholder='please input'
 onChangeText={this.getContent}
 ></TextInput>
 <TouchableOpacity style={styles.btn} onPress={this.clickbtn}>
 <Text style={styles.search}>搜索</Text>
 </TouchableOpacity>

  {/*<TouchableHighlight style={styles.btn} onPress={this.clickbtn}>
 <Text style={styles.search}>搜索</Text>
 </TouchableHighlight>
 <TouchableWithoutFeedback style={styles.btn} onPress={this.clickbtn}>
 <Text style={styles.search}>搜索</Text>
 </TouchableWithoutFeedback>*/}
 </View>
 </View>
 )
 }
 })

 const styles=StyleSheet.create({

 container:{
 flexDirection:'row',
 marginTop:25,
 height:45,
 },
 flex:{
 flex:1,
 flexDirection:'row',
 },
 input:{
 flex:1,
 height:45,
 borderWidth:1,
 marginLeft:5,
 paddingLeft:5,
 borderColor:'silver',
 borderRadius:4,
 },
 btn:{
 width:55,
 marginLeft:5,
 marginRight:5,
 backgroundColor:"#23BEFF",
 height:45,
 justifyContent:"center",
 alignItems:"center",
 borderRadius:4
 },
 search:{
 fontWeight:"bold",
 textAlign:"center",

 }
 });

AppRegistry.registerComponent('TouchableDemo', () => TouchableDemo);
