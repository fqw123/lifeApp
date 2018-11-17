import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image} from 'react-native'
// 引入子组件-------------------------
import  FoodTop from './FoodTop'
import  Food_IconMenu  from './Food_IconMenu'
import  FoodGps  from './Food_GPS'
import Food_Sale from './Food_Sale'

// --------------------------------------
export default class Food extends Component {
 //配置导航图标和文字
 static navigationOptions = {
    tabBarLabel: '美食',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={{uri: 'icon_food'}}
        // tintColor: 图标被激活的颜色
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
};
// --------------------------
  render() {
    return (
      <View>
           {/* 顶部搜索栏 */}
          <FoodTop/> 
           {/* //滑动菜单 */}
          <Food_IconMenu/> 
           {/* 更多优惠 */}
          < Food_Sale />  
           {/* 周边搜索 */}
         <FoodGps/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26
    }
})
