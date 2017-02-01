import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ListView,
	Image

} from 'react-native';

/*
* 展示电影列表
* 逻辑：未获得数据时，显示等待页面；获得数据时，显示电影列表页面
*
* 需要给state添加一个属性，用于记录下载状态
*
*
* */


var REQUIST_URL='https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

var MovieList=React.createClass({
	//设置初始化状态
	getInitialState:function(){
		var ds=new ListView.DataSource({
			rowHasChanged:(oldrow,newRow)=>oldrow!==newRow
		});
		return {
			loaded:false,//数据是否下载成功标识
			dataSource :ds
		}
	},
	getData:function(){
		fetch(REQUIST_URL)
		.then((response)=>{
			return response.json();
		})
		.then((responseData)=>{
			//刷新组件，重新渲染组件
			//得到新的数据，修改dataSource
			this.setState({
				loaded:true,
				dataSource:this.state.dataSource.cloneWithRows(responseData.movies)

			})
		})
		.catch((error)=>{
			alert(error)
		})

	},
	render:function(){
		if(!this.state.loaded){
			//如果为请求到数据，就显示正在加载界面
			return this.waitLoading();
		}
		return(
			<ListView
				style={styles.listView}
			dataSource={this.state.dataSource}
			initialListSize={10}
			renderRow={this._renderRow}
			renderHeader={this._renderHeader}
			renderSeparator={this._renderSeparator}/>
		)
	},
	//组件挂载完成
	componentDidMount:function(){
	//组件挂载后，开始下载数据，进行网络请求
		this.getData();

	},
	waitLoading:function(){
		return(
			<View style={styles.loadingContainer}>
				<Text style={styles.loadingText}>Loading movies ...</Text>
			</View>
		)
	},
	_renderRow:function(movie){
		return(
			<View style={styles.rowContainer}>
				<Image style={styles.thumbnail} source={{uri:movie.posters.thumbnail}}/>
				<View style={styles.textContainer}>
					<Text style={styles.title}>{movie.title}</Text>
					<Text style={styles.year}>{movie.year}</Text>
				</View>
			</View>
		)
	},
	_renderHeader:function(){
		return(
			<View style={styles.header}>
				<Text style={styles.headerText}>Movie List</Text>
				<View style={styles.headerSeparator}></View>
			</View>
		)
	},
	_renderSeparator:function(sectionID,rowID) {
		return(
			<View style={{height:1,backgroundColor:'silver'}} key={sectionID+rowID}></View>
		)
	}

});

var styles=StyleSheet.create({
	//loading
	loadingContainer:{
		flex:1,
		marginTop:25,
		backgroundColor:'cyan',
		justifyContent:'center',
		alignItems:'center'
	},
	loadingText:{
		fontSize:30,
		fontWeight:'bold',
		marginLeft:20,
		marginRight:20,
		textAlign:'center'
	},
	//listView row
	rowContainer:{
		flexDirection:'row',
		padding:5,
		alignItems:'center',
		backgroundColor:'pink',
	},
	thumbnail:{
		width:53,
		height:81,
		backgroundColor:'gray'
	},
	textContainer:{
		flex:1,
		marginLeft:10,
	},
	title:{
		marginTop:3,
		fontSize:18,
		textAlign:'center'
	},
	year:{
		marginTop:3,
		fontSize:18,
		textAlign:'center'
	},
	//header
	header:{
		marginTop:25,
		height:44,
		backgroundColor:'yellow',
	},
	headerText:{
		flex:1,
		fontSize:20,
		fontWeight:'bold',
		textAlign:'center'
	},
	headerSeparator:{
		height:1,
		backgroundColor:'silver'
	},
	listView:{
		flex:1,
		backgroundColor:'red'
	}

});

module.exports=MovieList;