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

var Header=require("./header");
var News=require("./news");
var textDemo=React.createClass({
	render:function(){
		var newsContent=["1.新闻界斤","2.房贷首付苏打粉似懂非懂撒发生大方东方四大发生的",
			"3.是打开反馈撒地方哭了是卡德罗夫开始啦的反馈撒klyighkigiyiutyiyiyi梵蒂冈电饭锅电饭锅对方的方式割发代首个电饭锅电饭锅梵蒂冈的方式是大风刮大风伤感的方式放到电饭锅电饭锅大风刮大风hlhjljhljljghhufdrydrydrydrydrfyr的","4.但是看见疯狂的哈里发开发商啦的克己复礼看撒地方更好更健康"];
		return(
			<View style={{flex:1}}>
				<Header></Header>
				<News newscon={newsContent}></News>

			</View>
		);
	}
})

AppRegistry.registerComponent('textDemo', () => textDemo);
