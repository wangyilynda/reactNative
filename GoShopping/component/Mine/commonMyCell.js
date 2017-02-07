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
	Switch
} from 'react-native';


var CommonMyCell=React.createClass({
	getDefaultProps(){
		return{
			leftIconName:'',
			leftTitle:'',
			rightIconName:'',
			rightTitle:''
		}
	},
	render(){
		return (
			<TouchableOpacity activeOpacity={0.6}>
				<View style={styles.container}>
					<View style={styles.leftViewContainer}>
						<Image style={styles.leftimg} source={{uri:this.props.leftIconName}}/>
						<Text style={styles.itemText}>{this.props.leftTitle}</Text>
					</View>
					<View style={styles.imgContainer}>
						{this.renderRightText()}
						<Image style={styles.iconStyle} source={{uri:'icon_cell_rightArrow'}}/>
					</View>

				</View>
			</TouchableOpacity>
		)
	},
	renderRightText(){
		if(this.props.rightTitle && this.props.rightTitle.length>0){
			return(
				<Text style={styles.rightTitle}>{this.props.rightTitle}</Text>
			)
		}else{
			if(this.props.rightIconName){
				return(
					<Image style={styles.rightimg} source={{uri:this.props.rightIconName}}/>
				)
			}
		}
	},
})

var styles=StyleSheet.create({
	container:{
		backgroundColor:'#FFF',
		height:Platform.OS=='ios'?40:30,
		borderBottomWidth:1,
		borderBottomColor:'#ddd',
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center'
	},
	iconStyle:{
		width:8,
		height:13,
		marginRight:10,
	},
	itemText:{
		marginLeft:10,
		fontSize:16
	},
	switchStyle:{
		marginRight:10,
	},
	leftViewContainer:{
		flexDirection:'row',
		alignItems:'center',

	},
	leftimg:{
		width:24,
		height:24,
		marginLeft:10,
		borderRadius:12
	},
	rightimg:{
		width:24,
		height:24,
		marginRight:10
	},
	imgContainer:{
		flexDirection:'row',
		alignItems:'center',
	},
	rightTitle:{
		marginRight:10,
		color:'gray',
		fontSize:14
	},

})

module.exports=CommonMyCell;