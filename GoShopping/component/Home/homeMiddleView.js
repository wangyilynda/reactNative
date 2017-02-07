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
//引入外部的组件类
var CommonView=require("./middleCommonView");
var TopMiddleData=require("../../LocalData/HomeTopMiddleLeft.json");
var MiddleView=React.createClass({
	render() {
		return (
			<View style={styles.container}>
				{/*left*/}
				{this.renderLeftView()}

				{/*right*/}
				{this.renderRightView()}
			</View>
		);
	},
	renderLeftView(){
		//data
		var data=TopMiddleData.dataLeft[0];

		return(
			<TouchableOpacity onPress={()=>{}}>
				<View style={styles.leftViewStyle}>
					<Image source={{uri:data.img1}} style={styles.leftImgStyle}/>
					<Image source={{uri:data.img2}} style={styles.leftImgStyle}/>
					<Text>{data.title}</Text>
					<View style={styles.midLeftBotContainer}>
						<Text style={styles.midLeftBotText}>{data.price}</Text>
						<Text style={styles.midLeftBotText2}>{data.sale}</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	},
	renderRightView(){
		//组件数组
		var itemArr=[];
		var rightData=TopMiddleData.dataRight;
		for(var i=0;i<rightData.length;i++){
			//取出单独的数据
			var data=rightData[i];
			itemArr.push(
				<CommonView key={i}
				title={data.title}
				subTitle={data.subTitle}
				rightIcon={data.rightImage}
				titleColor={data.titleColor}/>
			);
		}
		return(
			<View>
				{itemArr}
			</View>
		)
	}
})

const styles = StyleSheet.create({
	container: {
		marginTop:20,
		flexDirection:'row'
	},
	leftViewStyle:{
		width:width*0.5,
		height:119,
		backgroundColor:'#fff',
		marginRight:1,
		alignItems:'center',
		justifyContent:'center'
	},
	leftImgStyle:{
		width:100,
		height:30,
		//内容模式
		resizeMode:'contain'
	},
	midLeftBotContainer:{
		flexDirection:'row',
		marginTop:5
	},
	midLeftBotText:{
		color:'blue',
		marginRight:5
	},
	midLeftBotText2:{
		color:'orange',
		backgroundColor:'yellow'
	}


});
module.exports=MiddleView;