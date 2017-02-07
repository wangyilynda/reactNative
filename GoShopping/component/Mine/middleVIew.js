import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native';

var data=require("./data.json");
var MiddleView =React.createClass({
	render() {
		return (
			<View style={styles.container}>
				{this.renderAllItem()}
			</View>
		);
	},
	renderAllItem(){
		//定义组件数组
		var itemArr=[];
		for(var i=0;i<data.length;i++){
			var item=data[i];
			//创建组件装入数组
			itemArr.push(<InnerView key={i} iconName={item.iconName} title={item.title}/>);
		}
		return itemArr;

	}
})

var InnerView=React.createClass({
	getDefaultProps(){
		return{
			iconName:'',
			title:''
		}
	},
	render(){
		return(
			<View style={styles.itemContainer}>
				<Image style={styles.innerImg} source={{uri:this.props.iconName}}/>
				<Text style={styles.innerText}>{this.props.title}</Text>
			</View>
		)
	}
})
const styles = StyleSheet.create({
	container: {
		flexDirection:'row',
		flex: 1,
		height:64,
		backgroundColor:'#fff',
		justifyContent:'space-around',
		alignItems:'center'
	},
	innerImg:{
		width:30,
		height:20,
		marginBottom:5,
	},
	innerText:{
		textAlign:'center',
		color:'gray',
		fontSize:14
	},
	itemContainer:{
		width:90,
		height:64,
		justifyContent:'center',
		alignItems:'center'
	}



});
module.exports=MiddleView;