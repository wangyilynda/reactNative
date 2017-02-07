import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Platform,
	WebView
} from 'react-native';

var ShopCenterDetail=React.createClass({
	render() {
		return (
			<View style={styles.container}>
				{this.renderNavBar()}
				<WebView automaticallyAdjustContentInsets={true}
				source={{uri:this.props.url+'?smid=4374715?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'}}
				         javaScriptEnabled={true}
				         domStorageEnabled={true}
				         decelerationRate='normal'
				         startInLoadingState={true}
				/>


			</View>
		);
	},
	renderNavBar(){
		return(
			<View style={styles.navBarContainer}>
				<TouchableOpacity style={styles.settingImgLeft} onPress={()=>{this.props.navigator.pop()}}>
					<Image style={styles.imgstyle} source={{uri:"icon_camera_back_normal"}}/>
				</TouchableOpacity>
				<Text style={styles.navbartext}>购物中心详情</Text>
				<TouchableOpacity style={styles.settingImg}>
					<Image style={styles.imgstyle} source={{uri:"icon_mine_setting"}}/>
				</TouchableOpacity>
			</View>
		)
	}
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e8e8e8',
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
	settingImgLeft:{
		position:'absolute',
		bottom:15,
		left:10,
	},
	imgstyle:{
		width:Platform.OS=='ios'?28:24,
		height:Platform.OS=='ios'?28:24,
	},
});
module.exports=ShopCenterDetail;