import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	ScrollView
} from 'react-native';

var MineCommon=require("./commonMyCell");
var MyMiddleView=require("./middleVIew");
var Header=require("./header");
export default class Mine extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ScrollView
				contentInset={{top:-110}}
				contentOffset={{y:110}}
				>
					<Header username="lynda"/>
				<View>
					<MineCommon leftTitle='我的订单' leftIconName='collect' rightTitle="查看全部订单"/>
					<MyMiddleView />
				</View>
				<View style={{marginTop:20}}>
					<MineCommon leftTitle='我的钱包' leftIconName='draft' rightTitle='账户余额：¥1234'/>
					<MineCommon leftTitle='抵用券' leftIconName='like' rightTitle='10张'/>
				</View>
				<View style={{marginTop:20}}>
					<MineCommon leftTitle='积分商城' leftIconName='card'/>
				</View>
				<View style={{marginTop:20}}>
					<MineCommon leftTitle='今日推荐' leftIconName='new_friend' rightIconName="me_new"/>
				</View>
				<View style={{marginTop:20}}>
					<MineCommon leftTitle='我要合作' leftIconName='pay' rightTitle="轻松开店，招财进宝"/>
				</View>
				</ScrollView>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e8e8e8',
	},

});