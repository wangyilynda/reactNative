import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Platform
} from 'react-native';

var headerdata=require("./headerdata.json");

var Header=React.createClass({
	getDefaultProps(){
		return{
			username:''
		}
	},
	render() {
		return (
			<View style={styles.container}>
				{this.renderTopView()}
				{this.renderBottomView()}
			</View>
		);
	},
	renderTopView(){
		return (
			<View style={styles.topContainer}>
				<View style={styles.topitemContainer}>
					<Image style={styles.leftImg} source={{uri:'new_friend'}}/>
					<Text style={styles.leftText}>{this.props.username}</Text>
				</View>
				<View style={styles.topitemContainer}>
					<Image style={styles.rightImg} source={{uri:'icon_cell_rightArrow'}}/>
				</View>
			</View>
		)
	},
	renderBottomView(){
		return(
			<View style={styles.bottomContainer}>
				{this.renderBottomItem()}
			</View>
		)
	},
	renderBottomItem(){
		var itemArr=[];
		for(var i=0;i<headerdata.length;i++){
			var item=headerdata[i];
			itemArr.push(
				<ItemView key={i} title={item.title} number={item.number}/>
			);
		}
		return itemArr;
	},
})

var ItemView=React.createClass({
	getDefaultProps(){
		return{
			title:'',
			number:''
		}
	},
	render(){
		return(
			<TouchableOpacity style={{flex:1}}>
				<View style={styles.itemContainer}>
					<Text style={styles.itemtexttop}>{this.props.title}</Text>
					<Text style={styles.itemText}>{this.props.number}</Text>
				</View>
			</TouchableOpacity>
		)
	}
})

const styles = StyleSheet.create({

	topContainer:{
		height: Platform.OS=='ios'?220:110,
		backgroundColor:"rgba(255,96,0,1)",
		flexDirection:"row",
		justifyContent:'space-between',
		alignItems:'center'
	},
	topitemContainer:{
		marginTop:Platform.OS=='ios'?140:20,
		flexDirection:'row'
	},
	leftImg:{
		width:40,
		height:40,
		borderRadius:15,
		marginLeft:10
	},
	rightImg:{
		width:8,
		height:13,
		marginRight:10
	},
	bottomContainer:{
		flexDirection:'row',
		backgroundColor:"rgba(255,96,0,0.6)",
		height:40
	},
	itemContainer:{
		borderRightWidth:1,
		borderRightColor:'#fff',
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	itemText:{
		color:"#fff",
	},
	itemtexttop:{
		color:"#fff",
		marginBottom:3
	},
	leftText:{
		marginTop:10,
		marginLeft:10,
		fontSize:18,
		fontWeight:'bold',
		color:"#fff"
	}

});

module.exports=Header;