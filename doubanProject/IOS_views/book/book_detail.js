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

var Header = require("./../common/header");
var ServiceUrl = require("./../common/service");
var Util = require("./../common/util");
var BookItem = require("./bookItem");


var BookDetail = React.createClass({
	getInitialState: function () {
		return {
			bookData: null//图书详情对象
		}
	},
	getData:function(){
		var that=this;
		var url=ServiceUrl.book_detail_id+this.props.bookID;

		Util.getRequest(url,function(data){
			//success
			that.setState({
				bookData:data
			})
		},function(error){
			alert(error);
		})
	},
	componentDidMount:function () {
		this.getData();
	},
	render: function () {
		return (
			<ScrollView style={styles.container}>
				{
					this.state.bookData ?
						<View>
							<Header
								initObj={{backName:"图书",barTitle:this.state.bookData.title}}
								navigator={this.props.navigator}
							/>
							<BookItem book={this.state.bookData}/>
							<View>
								<Text style={styles.title}>图书简介</Text>
								<Text style={styles.text}>{this.state.bookData.summary}</Text>
							</View>
							<View style={{marginTop:10}}>
								<Text style={styles.title}>作者简介</Text>
								<Text style={styles.text}>{this.state.bookData.author_intro}</Text>
							</View>
							<View style={{height:55}}></View>
						</View>
						: Util.loading
				}
			</ScrollView>
		)
	}
})

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFF",
	},
	title: {
		fontSize: 16,
		marginTop: 10,
		marginLeft: 10,
		marginBottom: 10,
		fontWeight: 'bold'
	},
	text: {
		marginLeft: 10,
		marginRight: 10,
		color: "#000"
	}
})
module.exports = BookDetail;