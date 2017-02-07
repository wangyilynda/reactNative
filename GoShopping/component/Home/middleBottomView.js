import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native';

var Dimensions=require("Dimensions");
var {width}=Dimensions.get('window');

var CommonView=require("./middleCommonView");

var Home_D4=require("../../LocalData/XMG_Home_D4.json");
var MiddleBottomView=React.createClass({
	getDefaultProps(){
		return {
			popTopHome:null
		}
	},
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.topViewStyle}>
					{this.renderTopView()}
				</View>
				<View style={styles.bottomViewStyle}>
					{this.renderBottomItem()}
				</View>
			</View>
		);
	},
	renderTopView(){
		var itemdata=Home_D4.data[3];
		return(
			<CommonView
				title={itemdata.maintitle}
				subTitle={itemdata.deputytitle}
				rightIcon={this.dealImageSize(itemdata.imageurl)}
				titleColor={itemdata.typeface_color}
				callBackClickCell={(data)=>{this.popTopView(itemdata)}}
				tplurl={itemdata.tplurl}
				containerWidth={width}/>
			)
	},
	//下面的所有子组件
	renderBottomItem(){
		var itemArr=[];
		//拿到对应的数据
		var dataArr=Home_D4.data;
		for(var i=0;i<dataArr.length;i++){
			var itemdata=dataArr[i];
			itemArr.push(
				<CommonView
				key={i}
				title={itemdata.maintitle}
				subTitle={itemdata.deputytitle}
				rightIcon={this.dealImageSize(itemdata.imageurl)}
				titleColor={itemdata.typeface_color}
				callBackClickCell={(data)=>{this.popTopView(itemdata)}}
				tplurl={itemdata.tplurl}/>
			);
		}
		return itemArr;
	},
	dealImageSize(url){
		if(url.search('w.h') == -1){
			return url;
		}else{
			return url.replace('w.h','120.90');
		}
	},
	popTopView(data){
		this.props.popTopHome(data);
	}
});

const styles = StyleSheet.create({
	container: {
		marginTop:20,
	},
	topViewStyle:{

	},
	bottomViewStyle:{
		flexDirection:'row',
		flexWrap:'wrap'
	}


});

module.exports=MiddleBottomView;