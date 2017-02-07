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
	Image,
	TextInput,
	TouchableOpacity,
	Platform,
	ScrollView
} from 'react-native';

import HomeDetail from "./homeDetail";
 import TopView from "./topView";
var MiddleView=require("./homeMiddleView");
var MiddleBottomView=require("./middleBottomView");
var ShopCenter=require("./shopCenter");
var ShopCenterDetail=require("./shopCenterDetail");
var YourHobby=require("./guestYourHobbies");
export default class Home extends Component {
	_changePage(){
		const { navigator }= this.props;
		if(navigator){
			navigator.push({
				name:'详情页面',
				component:HomeDetail,
			})
		}

	}
	renderNavBar(){
		return(
			<View style={styles.navBarStyle}>
				<TouchableOpacity>
					<Text style={styles.address}>广州</Text>
				</TouchableOpacity>
				<TextInput placeholder='输入商家，品类，商圈'
				style={styles.topInputStyle}/>
				<View style={styles.imgContainer}>
					<TouchableOpacity>
						<Image source={{uri:'icon_homepage_message'}} style={styles.imgleft}/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Image source={{uri:'icon_homepage_scan'}} style={styles.imgright}/>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
	pushToDetail(data){

		this.props.navigator.push(
			{
				component:HomeDetail,
				title:'详情'
			}
		)
	}
	render() {
		return (
			<View style={styles.container}>
				{/*首页的导航*/}
				{this.renderNavBar()}
				{/*首页的主要内容*/}
				<ScrollView>
					<TopView/>
					<MiddleView/>
					<MiddleBottomView
					popTopHome={(data)=>{this.pushToDetail(data)}}/>
					{/*购物中心*/}
					<ShopCenter popToHome={(url)=>{this.showShopDetail(url)}}/>
					<YourHobby/>
				</ScrollView>
			</View>
		);
	}
	showShopDetail(url){
		//处理URL格式

		var url2=this.dealWithUrl(url);
		this.props.navigator.push({
			component:ShopCenterDetail,
			passProps:{
				url:url2
			}
		});
	}
	dealWithUrl(url){
		return url.replace('imeituan://www.meituan.com/web/?url=','');
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: 'center',
		//alignItems: 'center',
		backgroundColor: 'rgba(232,232,232,1)',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	topInputStyle:{
		marginTop:Platform.OS=='ios'?18:0,
		width:230,
		height:30,
		backgroundColor:'#FFF',
		borderRadius:15,
		//marginLeft:10
		paddingLeft:10
	},
	imgleft:{
		width:30,
		height:30,
		//marginLeft:10,
	},
	imgright:{
		width:Platform.OS=='ios'?28:24,
		height:Platform.OS=='ios'?28:24,
	},
	navBarStyle:{
		height: Platform.OS=='ios'?64:40,
		backgroundColor:'rgba(255,96,0,1)',
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-around'
	},
	imgContainer:{
		flexDirection:'row'
	},
	address:{
		fontWeight:'bold',
		fontSize:15,
		width:50,
		lineHeight:39,
		textAlign:'center',
		color:'#FFF'

	}
});

