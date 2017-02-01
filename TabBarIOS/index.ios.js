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
  View,
    TabBarIOS,
} from 'react-native';

var Tab1=React.createClass({
  render:function(){
      return (<Text style={{marginTop:30}}>tab1</Text>)
  }
});
var Tab2=React.createClass({
    render:function(){
        return (<Text style={{marginTop:30}}>tab2</Text>)
    }
});
var Tab3=React.createClass({
    render:function(){
        return (<Text style={{marginTop:30}}>tab3</Text>)
    }
});
 var TabBarIOSCom=React.createClass({
   getInitialState:function(){
     return{
       //用于记录显示页面组件对应的title
         tab:'computer'
     }
   },
     select:function(tabname){
      this.setState({
        tab:tabname
      })
     },
   render:function(){
     return(
         <TabBarIOS style={{flex:1}}>
           <TabBarIOS.Item
               title='computer'
                icon={require("./people.png")}
               onPress={this.select.bind(this,'computer')}
           selected={this.state.tab==='computer'}>
             <Tab1/>
           </TabBarIOS.Item>
           <TabBarIOS.Item
               title='shop'
           systemIcon="bookmarks"
           onPress={this.select.bind(this,'shop')}
           selected={this.state.tab === 'shop'}>
             <Tab2/>
           </TabBarIOS.Item>
           <TabBarIOS.Item
               title='people'
               icon={require("./people.png")}
               onPress={this.select.bind(this,'people')}
           selected={this.state.tab === 'people'}>
             <Tab3/>
           </TabBarIOS.Item>
         </TabBarIOS>
     )
   }
 });
AppRegistry.registerComponent('TabBarIOS', () => TabBarIOSCom);
