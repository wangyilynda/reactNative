import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';


export default class HomeDetail extends Component {
	_presspop(){
		const { navigator }=this.props;
		if(navigator){
			navigator.pop();
		}
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome} onPress={this._presspop.bind(this)}>
					homedetail
				</Text>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	}
});