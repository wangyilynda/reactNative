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
//第一个页面，一个button，点击进入下一级页面
var firstPage=React.createClass({
 pressPush:function(){
 var next={component:secondPage};
 this.props.navigator.push(next);
 },
 render:function(){
 return(
 <View style={[styles.container,{backgroundColor: 'green'}]}>
 <TouchableOpacity style={styles.btn}onPress={this.pressPush}>
 <Text style={styles.text}>点击推出下一个界面</Text>
 </TouchableOpacity>
 </View>)
 }
 });


 var secondPage=React.createClass({
 pressPop:function(){
 var rev={component:firstPage};
 this.props.navigator.pop(rev);
 },
 render:function(){
 return(
 <View style={[styles.container,{backgroundColor: 'pink'}]}>
 <TouchableOpacity style={styles.btn}onPress={this.pressPop}>
 <Text style={styles.text}>点击返回前一个界面</Text>
 </TouchableOpacity>
 </View>)
 }
 });
 var anvigator=React.createClass({

 render:function(){
 var rootRoute={
 component:firstPage
 };
 return (
 //initialRoute-->默认的界面，也就是启动app之后看到的界面
 //对象的属性是自定义的，这个对象中的内容会在renderScene方法中处理（必须包含的属性即component，表示需要渲染的页面组件）
 <Navigator
 initialRoute={rootRoute}
 configureScene={(route)=>{
 return Navigator.SceneConfigs.PushFromRight;
 }}
 renderScene={(route, navigator)=>{
 var Component=route.component;
 return(
 <Component navigator={navigator} route={route}/>
 )
 }}/>
 )
 }
 });


 var styles=StyleSheet.create({
 container:{
 flex:1,
 marginTop:25,
 justifyContent:'center',
 alignItems:'center',
 },
 btn:{
 backgroundColor:'blue',
 width:200,
 height:50,
 borderWidth:1,
 borderColor:'silver'
 },
 text:{
 flex:1,
 lineHeight:50,
 fontSize:16,
 textAlign:'center',
 },
 });

 module.exports=anvigator;