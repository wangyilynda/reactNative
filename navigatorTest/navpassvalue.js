
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    TextInput
} from 'react-native';

var inputPage=React.createClass({
    getInitialState:function(){
        return{
            content:''
        }
    },
    getContent:function(inputdata){
        this.setState({
            content:inputdata
        })
    },
    pushNextPage:function(){
        var route={component:detailPage,
        passProps:this.state.content};
        this.props.navigator.push(route)
    },
    render:function(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.input}
                onChangeText={this.getContent}
                placeholder='请输入数据'
                />
                <TouchableOpacity style={styles.btn}
                                  onPress={this.pushNextPage}>
                    <Text style={styles.btntext}>点击进入下一页</Text>
                </TouchableOpacity>
            </View>
        )
    }
});
var detailPage=React.createClass({
    popFrontPage:function(){
        this.props.navigator.pop();
    },
    render:function(){
        return(
            <View style={delStyles.container}>
                <Text style={delStyles.text}>{this.props.showText}</Text>
                <TouchableOpacity style={delStyles.btn} onPress={this.popFrontPage}>
                    <Text style={delStyles.btntext}>返回上一页</Text>
                </TouchableOpacity>
            </View>
        )
    },
});

var navpassvalue=React.createClass({
    render:function(){
        var rootRoute={
            component:inputPage,
            passProps:{

            }};
        return(
            <View style={{flex:1}}>
                <Navigator
                initialRoute={rootRoute}
                configureScene={(route)=>{
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route,navigator)=>
                {
                    var Component=route.component;
                    return(
                        <Component
                        navigator={navigator}
                        route={route}
                        showText={route.passProps}
                        />
                    )
                }}
                />
            </View>
        )
    }
});

var styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    input:{
        height:30,
        borderColor:'silver',
        borderWidth:1,
    },
    btn:{
        width:180,
        height:40,
        backgroundColor:'blue',
        justifyContent:"center",
        alignItems:'center',
    },
    btntext:{
        fontSize:14,
        fontWeight:"bold",
    },

});

var delStyles=StyleSheet.create({
   container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'white',
   },
    text:{
       backgroundColor:'pink'
    },
    btn:{
        width:80,
        height:40,
        backgroundColor:'blue',
        justifyContent:"center",
        alignItems:'center',
    },
    btntext:{
        fontSize:14,
        fontWeight:"bold",
    },



});

module.exports=navpassvalue;