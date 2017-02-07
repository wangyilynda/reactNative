import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	ListView,
	ScrollView
} from 'react-native';


var SearchBar=require("./../common/searchBar");
var Util=require("./../common/util");
var ServiceURL=require("./../common/service");
var MovieWebVIew=require("./../common/customWebview");
var MovieItem=require("./movie_item");

var MovieList=React.createClass({
	getInitialState:function(){
		var ds=new ListView.DataSource({
			rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
		});
		return{
			dataSource:ds,
			show:false,
			keywords:'哈利波特'
		}
	},
	getData:function(){
		this.setState({
			show:false
		});

		var that=this;
		var url=ServiceURL.movie_search+"?count=20&q="+this.state.keywords;

		Util.getRequest(url,function(data){

			if(!data.subjects || data.subjects.length == 0){
				return alert('未找到相关电影');
			}

			var ds=new ListView.DataSource({
				rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
			})

			var movies=data.subjects;

			that.setState({
				show:true,
				dataSource:ds.cloneWithRows(movies)
			})

		},function(error){
			alert(error)
		})

	},
	componentDidMount:function(){
		this.getData();
	},
	_renderRow:function(movie){
		return <MovieItem movie={movie} onPress={this._showDetail(this,movie.title,movie.alt)}/>
	},
	_renderSepapator:function(sectionID,rowID){
		var style={
			height:1,
			backgroundColor:'#ccc'
		};
		return <View style={style} key={sectionID+rowID}/>;
	},
	_getInputText:function(text){
		this.setState({
			keywords:text
		})
	},
	_searchPress:function(){
		this.getData();
	},
	_showDetail:function(title,url){
		var detailRoute={
			component:MovieWebVIew,
			passProps:{
				backName:'电影',
				title:title,
				url:url,
			},
		};
		this.props.navigator.push(detailRoute);
	},
	render:function() {
		return (
			<ScrollView>
				<SearchBar
				placeholder="请输入电影名称"
				onPress={this._searchPress}
				onChangeText={this._getInputText}/>
				{
					this.state.show?
						<ListView
						dataSource={this.state.dataSource}
						initialListSize={10}
						renderRow={this._renderRow}
						renderSeparator={this._renderSepapator}/>
						:Util.loading
				}

			</ScrollView>
		)
	},

});

module.exports=MovieList;