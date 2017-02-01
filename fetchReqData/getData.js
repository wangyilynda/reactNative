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
	TouchableOpacity,

} from 'react-native';

//在Reactnative中，使用fetch实现网络请求
//使用get 和post获得网络请求


function getDataFromUrl(url){
	var opts={
		method:'GET'
	};
	fetch(url,opts)
		.then((response)=>{
			return response.text();
		})
		.then((responseText)=>{//返回一个带文本的对象
			alert(responseText);
		})
		.catch((error)=>{
			alert(error);
		})

}



function postRequest(url){
	var formdata=new FormData();
	//username=wangyi&password=111
	formdata.append('username','wangyi');
	formdata.append('password','123456');

	var opts={method:'POST',body:formdata};
	fetch(url,opts)
		.then((response)=>{
			return response.text();
		})
		.then((responseText)=>{
			alert(responseText);
		})
		.catch((error)=>{
			alert(error);
		})

}

var GetData=React.createClass({

	render:function(){
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={getDataFromUrl.bind(this,'http://project.lanou3g.com/projects/bj/reactnative/login.php?username=wangyi&password=yiyi')}>
					<View style={styles.btn}>
						<Text>GET</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity onPress={postRequest.bind(this,'http://project.lanou3g.com/projects/bj/reactnative/login.php')}>
					<View style={styles.btn}>
						<Text>POST</Text>
					</View>
				</TouchableOpacity>
			</View>
		)
	}
})

var styles=StyleSheet.create({
	container:{
		flexDirection:'row',
		flex:1,
		marginTop:25,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'gray',
	},
	btn:{
		width:60,
		height:30,
		backgroundColor:'green',
		borderWidth:1,
		borderColor:'silver',
		borderRadius:3,
		justifyContent:'center',
		alignItems:'center'
	}
})

module.exports=GetData;