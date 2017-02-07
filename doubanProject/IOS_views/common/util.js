/*
* 实现功能：定义多个属性，在项目中会使用一些功能。包括：获取屏幕尺寸。loading组件。GEt请求
* 包含组件：
* 外部传入：
* GET请求方法需要从外部传入url，请求成功的回调函数，请求失败的回调方法
*
* 在这里面定义对象
* */


import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Dimensions,//用于获取屏幕宽高
	ActivityIndicator//一个加载的组件，转圈圈

} from 'react-native';

var Util={
	windowSize:{
		width:Dimensions.get("window").width,
		height:Dimensions.get("window").height
	},

	//基于fetch的get方法  只负责下载数据 下载后的处理操作再回调方法中实现
	//successCallback: 数据下载成功的回调方法，在组件中实现
	//failCallback:数据下载失败的回调方法，在组件中实现

	getRequest:function(url,successCallback,failCallback){
		fetch(url)
		.then((response)=>{
			return response.json();
		})
		.then((responseText)=>{
			successCallback(responseText);
		})
		.catch((error)=>{
			failCallback(error);
		})
	},
	//loading
	loading:<ActivityIndicator style={{marginTop:200}}/>
};
module.exports=Util;