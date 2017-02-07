import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Platform,
	ScrollView,
	ListView,
} from 'react-native';

var Dimensions=require("Dimensions");
var {width}=Dimensions.get('window');

//引入外部的json数据

var TopMenu=require("./../../LocalData/TopMenu.json");
var TopListView=require("./topListView");
var TopView=React.createClass({
	getInitialState(){
		return{
			page:0
		}
	},
	render() {
		return (
			<View style={styles.container}>
				{/*内容部分*/}
				<ScrollView horizontal={true}
				pagingEnabled={true}
				showsHorizontalScrollIndicator={false}
				onMomentumScrollEnd={this.onScrollAnimationEnd}>
					{this.renderScrollItem()}
				</ScrollView>
				{/*页码部分*/}
				<View style={styles.pageStyle}>
					{this.renderIndicator()}
				</View>
			</View>
		);
	},
	//当一针滚动结束的时候调用
	onScrollAnimationEnd(e){
		//当前页码
		var currentPage=Math.floor(e.nativeEvent.contentOffset.x/width);
		//更新状态机
		this.setState({
			page:currentPage
		})
	},
	renderScrollItem(){
		//组件数组
		var itemArr=[];

		//颜色数组
		var dataArr=TopMenu.data;
		//便利创建组件
		for(var i=0;i<dataArr.length;i++){
			itemArr.push(
				<TopListView
					key={i}
				dataArr={dataArr[i]}/>
			);
		}
		//return


		return itemArr;

	},
	renderIndicator(){
		var indicatorArr=[],color;
		for(var i=0;i<2;i++){
			color=(this.state.page===i)?'orange':'gray';
			indicatorArr.push(
				<Text key={i} style={[styles.pageTextStyle,{color:color}]}>&bull;</Text>
			);
		}
		return indicatorArr;
	}


})


const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'white'
	},
	pageStyle:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	pageTextStyle:{
		fontSize:25
	}


});

module.exports=TopView;