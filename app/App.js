import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

// 引入子组件
import Adv from './components/adv/Adv'
import Main from './components/main/Main'

export default class App extends Component {
   constructor(p){
       super(p)
       this.state={
           isShowAdv:false,  //true为显示
           timeout:2000
       }
   }


  render() {
    return (
      <View>
       
        {
         this.state.isShowAdv?<Adv/>:<Main/>   
        }  
       
      </View>
    )
  }
   componentDidMount(){
         setTimeout(() => {  //几秒后显示广告为false，页面渲染<Main/> 
              this.setState({
                isShowAdv:false,  
              })
         }, this.state.timeout);
   }

}

const styles = StyleSheet.create({})
