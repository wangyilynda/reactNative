import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
} from 'react-native';

var Dimensions=require("Dimensions");
var {width}=Dimensions.get('window');
var MiddleView=React.createClass({
	getDefaultProps(){
		return{
			title:'',
			subTitle:'',
			rightIcon:'',
			titleColor:'',
			callBackClickCell:null,
			tplurl:'',
			containerWidth:''
		}
	},
	render() {
		return (
			<TouchableOpacity style={[styles.btnStyle,{width:this.props.containerWidth?this.props.containerWidth:width*0.5}]} onPress={this.clickCell.bind(this,this.props.tplurl)}>
			<View style={[styles.container,{width:this.props.containerWidth?this.props.containerWidth:width*0.5-1}]}>
				{/*left*/}
				<View>
					<Text style={[styles.title,{color:this.props.titleColor}]}>{this.props.title}</Text>
					<Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
				</View>
				{/*right*/}
				<Image style={styles.imgStyle} source={{uri:this.props.rightIcon}}/>
			</View>
			</TouchableOpacity>
		);
	},
	clickCell(data){
		if(this.props.callBackClickCell == null){
			return;
		}
		this.props.callBackClickCell(data);
	}

})

var styles = StyleSheet.create({
	btnStyle:{
		//width:width*0.5,
		height:60,
	},
	container: {
		backgroundColor:'#fff',
		//width:width*0.5-1,
		height:59,
		marginBottom:1,
		marginRight:1,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-around'
	},
	subTitleStyle:{
		fontSize:12,
		color:'gray'
	},
	title:{
		fontSize:18,
		fontWeight:'bold'
	},
	imgStyle:{
		width:64,
		height:43,
		resizeMode:'contain'
	}

});
module.exports=MiddleView;