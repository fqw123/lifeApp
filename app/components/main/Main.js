import React, { Component } from 'react'
import { Text, StyleSheet, View ,Dimensions} from 'react-native'
// -----------引入导航组件-----------
import {TabNavigator} from 'react-navigation'

// -----------引入子组件--------------
import Hotel from '../hotel/Hotel'
import Food  from '../food/Food'
import Bank from '../bank/Bank'
import Movie from '../movie/Movie'

let {width,height,scale}=Dimensions.get('window')

export default class Main extends Component {
  render() {
    return (
      <View style={styles.conner}>
           <MyApp/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  conner:{
    width:width,
    height:height
  }

})

const MyApp = TabNavigator({
  food: {
    screen: Food,
  },
  bank: {
    screen: Bank,
  },
  movie: {
    screen: Movie,
  },
  hotel: {
    screen: Hotel,
  }
}, {
  //TabBar配置信息
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    //图标和label被激活后的颜色
    activeTintColor: '#FF0000',
    //默认图标和label的颜色
    inactiveTintColor: '#333333',
    //tabbar样式
    style: {
      backgroundColor: '#F7F7F7',
      height: 80
    },
    //是否显示图标
    showIcon: true,
    //下面一条线的样式
    indicatorStyle: {
      height: 0
    }
  },
});


