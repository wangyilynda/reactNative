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


var CommonCell=React.createClass({
	getInitialState(){
		return{
			isOn:false
		}
	},
	changeState(){
		this.setState({
			isOn:!this.state.isOn
		})
	},
	getDefaultProps(){
		return{
			title:'',
			isSwitch:false,//开关，是否展示开关
			rightTitle:''
		}
	},
	render(){
		return (
			<TouchableOpacity>
				<View style={styles.container}>
					<Text style={styles.itemText}>{this.props.title}</Text>
					{
						this.renderRightView()
					}
					</View>
			</TouchableOpacity>
		)
	},
	renderRightText(){
		if(this.props.rightTitle && this.props.rightTitle.length>0){
			return(
				<Text style={styles.rightTitle}>{this.props.rightTitle}</Text>
			)
		}
	},
	//cell右边显示的内容
	renderRightView(){
		return (
			//判断进行返回
			this.props.isSwitch?<Switch value={this.state.isOn} onValueChange={this.changeState} style={styles.switchStyle}/>
				:<View style={styles.imgContainer}>{this.renderRightText()}<Image style={styles.iconStyle} source={{uri:'icon_cell_rightArrow'}}/></View>

		)
	}
})

var styles=StyleSheet.create({
	container:{
		backgroundColor:'#fff',
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
		marginLeft:10
	},
	switchStyle:{
		marginRight:10,
	},
	imgContainer:{
		flexDirection:'row',
		alignItems:'center'
	},
	rightTitle:{
		marginRight:10,
		color:'gray'
	}

})

module.exports=CommonCell;