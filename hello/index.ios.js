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

/*export default class hello extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
        11111
      </Text>
        <Text style={[styles.text,{flex:4}]}>
          2222222
        </Text>
        <Text style={[styles.text,styles.match]}>
        333333
      </Text>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    //react-js  flex-direction
    flexDirection:'row'
    /!*flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',*!/
  },
  text: {
    fontSize:30,
    color:"#ffffff",
    backgroundColor:'#000000',
    textAlign:'center',
    width:40,
    height:40,
    margin:20

  },
  match:{
    flex:2
  }

});*/

/*

export default class hello extends Component{
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.child1}></View>
        <View style={styles.child2}></View>
      </View>

    );

  }
}

const styles=StyleSheet.create({
  container:{
    margin:30,
    width:300,
    height:500,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-end',
    backgroundColor:'pink',

  },
  child1:{
    width:20,
    height:20,
    backgroundColor:'red',
  },
  child2:{
    width:20,
    height:20,
    backgroundColor:'green',
  },
})
*/

//flex:1  组件可以撑满伏组件中所有的剩余空间
export default class hello extends Component {
  render(){
    return (
        <View style={styles.container}>
          <View style={styles.child1}></View>
          <View style={styles.child2}></View>
        </View>
    );
  }
}


const  styles = StyleSheet.create({
  container:{
    //margin:20,
    flex:1,
    backgroundColor:'pink'
  },
  child1:{
    flex:2,
    backgroundColor:'red'
  },
  child2:{
    flex:1,
    backgroundColor:'green'

  },

})

AppRegistry.registerComponent('hello', () => hello);
