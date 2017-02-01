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
  View
} from 'react-native';

export default class viewDemo extends Component{
	render(){
		return(
            <View style={[styles.container,styles.flex]}>
              <View style={[styles.item]}>
                <View style={[styles.flex,styles.center]}>
                  <Text>travel abroad</Text>
                </View>
                <View style={[styles.flex,styles.centerBorder]}>
                  <View style={[styles.flex,styles.center,styles.lineCenter]}>
                    <Text>train</Text>
                  </View>
                  <View style={[styles.flex,styles.center]}>
                    <Text>air plain</Text>
                  </View>
                </View>
                <View style={[styles.flex]}>
                  <View style={[styles.flex,styles.center,styles.lineCenter]}>
                    <Text>man</Text>
                  </View>
                  <View style={[styles.flex,styles.center]}>
                    <Text>woman</Text>
                  </View>
                </View>
              </View>
            </View>
		);
	}
}

const styles=StyleSheet.create({
	container:{
		margin:20,
	},
	flex:{
		flex:1,
	},
	center:{
		justifyContent:'center',
		alignItems:'center',
	},
	item:{
		backgroundColor:'pink',
		borderRadius:5,
		height:60,
		flexDirection:'row'
	},
	centerBorder:{
		borderLeftWidth:1,
		borderRightWidth:1,
		borderColor:'#ffffff',
	},
	lineCenter:{
		borderBottomWidth:1,
		borderColor:'#ffffff'
	},

});
AppRegistry.registerComponent('viewDemo', () => viewDemo);
