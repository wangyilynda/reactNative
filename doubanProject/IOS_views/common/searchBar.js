/*
*  实现功能：封装搜索栏组件，包括文本输入框和搜索按钮
*
*  包含组件：
*
*  外部传入：
*  输入框的属性设置有外部传入，例如：palceholder，
*  onpress，onchangeText，
*  使用...this.props将外部传入的属性设置给TextInput和TouchableOpacity
*
*
*  在这里面定义组件
* */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity
} from 'react-native';

var SearchBar=React.createClass({
	render:function(){
		return(
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput style={styles.input} {...this.props}/>
				</View>
				<TouchableOpacity style={styles.btn} onPress={this.props.onPress}>
					<Text style={styles.search}>搜索</Text>
				</TouchableOpacity>
			</View>
		)
	}

});

var styles=StyleSheet.create({
	container:{
		flexDirection:"row",
		justifyContent:'flex-end',
		alignItems:'center',
		height:44,
		marginTop:10
	},
	inputContainer:{
		flex:1,
		marginLeft:5
	},
	input:{
		flex:1,
		height:44,
		borderWidth:1,
		borderRadius:4,
		borderColor:"#CCC",
		paddingLeft:5
	},
	btn:{
		width:55,
		height:44,
		marginLeft:5,
		marginRight:5,
		backgroundColor:'#23BEFF',
		borderRadius:4,
		justifyContent:'center',
		alignItems:'center'
	},
	search:{
		flex:1,
		color:"#fff",
		fontSize:15,
		fontWeight:"bold",
		textAlign:'center',
		lineHeight:44
	}


});

module.exports=SearchBar;