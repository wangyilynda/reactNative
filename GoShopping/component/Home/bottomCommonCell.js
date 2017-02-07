import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native';

var BottomCommonCell=React.createClass({

	getDefaultProps(){
		return{
			leftIcon:'',
			leftTitle:'',
			rightTitle:'',
		}
	},
	render() {
		return (
			<View style={styles.container}>
				{/*left*/}
				<View style={styles.leftViewStyle}>
					<Image style={styles.leftImgStyle} source={{uri:this.props.leftIcon}}/>
					<Text style={styles.leftTextStyle}>{this.props.leftTitle}</Text>
				</View>
				{/*right*/}
				<View style={styles.rightViewStyle}>
					<Text style={styles.rightTextStyle}>{this.props.rightTitle}</Text>
					<Image source={{uri:'icon_cell_rightArrow'}} style={styles.rightImgStyle}/>
				</View>

			</View>
		);
	}
})

const styles = StyleSheet.create({
	container: {
		height:44,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between',
		backgroundColor:'#fff',
		//下边框
		borderBottomWidth:1,
		borderBottomColor:'#e8e8e8'
	},
	leftViewStyle:{
		flexDirection:'row',
		alignItems:'center',
	},
	rightViewStyle:{
		flexDirection:'row',
		alignItems:'center',
	},
	leftImgStyle:{
		width:24,
		height:24,
		marginLeft:10
	},
	leftTextStyle:{
		marginLeft:10,
		fontSize:17
	},
	rightTextStyle:{
		marginRight:10,
		color:'gray'
	},
	rightImgStyle:{
		width:8,
		height:13,
		marginRight:10
	}


});
module.exports=BottomCommonCell;