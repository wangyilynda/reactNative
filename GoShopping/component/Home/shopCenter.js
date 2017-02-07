import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TouchableOpacity
} from 'react-native';

var BottomCommonCenter=require("./bottomCommonCell");
var Home_D5=require("../../LocalData/XMG_Home_D5.json");
var ShopCenter=React.createClass({
	getDefaultProps(){
		popToHome:null
	},
	render() {
		return (
			<View style={styles.container}>
				<BottomCommonCenter
				leftIcon="gw"
				leftTitle="购物中心"
				rightTitle={Home_D5.tips}/>
				{/*下部分*/}
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollStyle}>
					{this.renderAllShops()}
				</ScrollView>

			</View>
		);
	},
	renderAllShops(){
		var shopArr=[];

		var data=Home_D5.data;
		for(var i=0;i<data.length;i++){
			var item=data[i];
			shopArr.push(
				<ShopCenterItem key={i} shopImg={item.img} shopSale={item.showtext.text}
				                shopName={item.name} detailurl={item.detailurl}
				                popTopShopCenter={(url)=>{this.props.popToHome(url)}}/>
			);
		}
		return shopArr;
	}
})

var ShopCenterItem=React.createClass({
	getDefaultProps(){
		return {
			shopImg: '',
			shopSale: '',
			shopName: '',
			detailurl: null
		}
	},
	render(){
		return(
			<TouchableOpacity onPress={this.clickItem.bind(this,this.props.detailurl)}>
				<View style={styles.itemStyle}>
					<Image style={styles.shopImg} source={{uri:this.props.shopImg}}/>
					<Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
					<Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
				</View>
			</TouchableOpacity>
		)
	},
	clickItem(url){
		if(url == null){
			return;
		}
		//执行回调函数
		this.props.popTopShopCenter(url);
	}
});

const styles = StyleSheet.create({
	container: {

	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	shopImg:{
		width:120,
		height:100,
		borderRadius:8,

	},
	scrollStyle:{
		flexDirection:'row',
		backgroundColor:'#fff',
		padding:10
	},
	itemStyle:{
		margin:8,
		alignItems:'center'
	},
	shopSaleStyle:{
		position:"absolute",
		left:5,
		bottom:20,
		backgroundColor:'red',
		color:'#fff',
		padding:3,
		fontSize:12
	},
	shopNameStyle:{
		marginTop:5
	}
});
module.exports=ShopCenter;