import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	Platform,
	Navigator
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Home from "../Home/home";
import Shop from "../Shop/shop";
import Mine from "../Mine/mine";
import More from "../More/more";
export default class Main extends Component {
	constructor(props){
		super(props);
		this.state={
			selectedTab:'home'//默认选中的tab
		};
	}
	_tabPress(title){
		this.setState({
			selectedTab:title
		})
	}
	renderTabNavItem(title, icon_name,icon_name_sel,selectedTab,componentName,Component){
		return(
			<TabNavigator.Item
				title={title}
				renderIcon={()=><Image style={styles.iconStyle} source={{uri:icon_name}}/>}
				renderSelectedIcon={()=><Image style={styles.iconStyle} source={{uri:icon_name_sel}}/>}
				selected={this.state.selectedTab===selectedTab}
				onPress={this._tabPress.bind(this,selectedTab)}
			    selectedTitleStyle={styles.selectedTitleStyle}
			    //badgeText={10}
			>
				<Navigator
					initialRoute={{name:componentName,component:Component}}
					configureScene={(route)=>{
					//这是页面之间跳转时候的动画
					return Navigator.SceneConfigs.VerticalDownSwipeJump;
				}}
					renderScene={
					(route,navigator)=>{
						let Component=route.component;
						return <Component {...route.passProps} navigator={navigator}/>
					}
				}
				/>
			</TabNavigator.Item>
		)
	}
	render() {
		return (
			<TabNavigator>
				{this.renderTabNavItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','home','首页',Home)}
				{this.renderTabNavItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','shop','商家',Shop)}
				{this.renderTabNavItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','mine','我的',Mine)}
				{this.renderTabNavItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected','More','更多',More)}
			</TabNavigator>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	iconStyle:{
		width:Platform.OS==='ios'?30:25,
		height:Platform.OS==='ios'?30:25,
	},
	selectedTitleStyle:{
		color:'orange'
	}
});