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
	ListView,
	TouchableOpacity,
	Platform
} from 'react-native';

var Dimensions=require('Dimensions');
var {width}=Dimensions.get('window');

var cols=5;
var cellW = Platform.OS=='ios'?70:60;
var cellH = 70;
var vMargin=(width - cellW*cols)/(cols+1);

var TopListView=React.createClass({
	getDefaultProps(){
		return{
			dataArr:[]
		}
	},
	getInitialState(){
		//创建数据源
		var ds = new ListView.DataSource({
			rowHasChanged: (oldRow, newRow) => oldRow !== newRow
		})

		return{
			dataSource:ds.cloneWithRows(this.props.dataArr)
		}
	},
	render() {
		return (
			<ListView
			dataSource={this.state.dataSource}
			renderRow={this.renderRow}
			contentContainerStyle={styles.contentViewStyle}
			scrollEnabled={false}/>
		);
	},
	//具体的cell
	renderRow(rowData){
		return(
			<TouchableOpacity style={styles.cellStyle}>
				<View style={styles.cellViewStyle}>
					<Image style={styles.imgStyle} source={{uri:rowData.image}}/>
					<Text style={styles.cellText}>{rowData.title}</Text>
				</View>
			</TouchableOpacity>
		)
	}
})

const styles = StyleSheet.create({
	imgStyle:{
		width:52,
		height:52,
	},
	cellStyle:{
		width:cellW,
		height:cellH,
		marginLeft:vMargin,
		marginTop:10
	},
	cellViewStyle:{
		width:cellW,
		height:cellH,
		justifyContent:'center',
		alignItems:'center',

	},
	contentViewStyle:{
		flexDirection:'row',
		//多个cell显示在一行
		flexWrap:'wrap',
		width:width,
	},
	cellText:{
		fontSize:Platform.OS=='ios'?14:12,
		color:'gray'
	}
});

module.exports=TopListView;

