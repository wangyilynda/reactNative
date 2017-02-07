import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Platform,
	Image,
	TouchableOpacity,
	ScrollView
} from 'react-native';

var CommonCell=require('./commonCell');
export default class More extends Component {
	render() {
		return (
			<View style={styles.container}>
				{
					this.renderNavBar()
				}
				<ScrollView>
					<View style={styles.itemMargin}>
						<CommonCell title="扫一扫"/>
					</View>
					<View style={styles.itemMargin}>
						<CommonCell title="省流量模式" isSwitch={true}/>
						<CommonCell title="消息提醒"/>
						<CommonCell title="邀请好友使用码团"/>
						<CommonCell title="清除缓存" rightTitle="1.2M"/>
					</View>
					<View style={styles.itemMargin}>
						<CommonCell title="问卷调查"/>
						<CommonCell title="支付帮助"/>
						<CommonCell title="网络诊断"/>
						<CommonCell title="关于码团"/>
						<CommonCell title="我要应聘"/>
					</View>
					<View style={styles.itemMargin}>
						<CommonCell title="精品应用"/>
					</View>
				</ScrollView>

			</View>
		);
	}
	renderNavBar(){
		return(
			<View style={styles.navBarContainer}>
				<Text style={styles.navbartext}>更多</Text>
				<TouchableOpacity style={styles.settingImg}>
					<Image style={styles.imgstyle} source={{uri:"icon_mine_setting"}}/>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e8e8e8',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	imgstyle:{
		width:Platform.OS=='ios'?28:24,
		height:Platform.OS=='ios'?28:24,
	},
	navBarContainer:{
		flexDirection:'row',
		height:Platform.OS=='ios'?64:40,
		backgroundColor:"rgba(255,96,0,1)",
		alignItems:'center',
		justifyContent:'center'
	},
	navbartext:{
		color:'white',
		fontWeight:'bold',
		fontSize:18,
	},
	settingImg:{
		position:'absolute',
		bottom:15,
		right:10,
	},
	itemMargin:{
		marginTop:20
	}

});