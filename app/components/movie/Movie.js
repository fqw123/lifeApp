import React, { Component } from 'react'
import { Text, View ,Image,StyleSheet} from 'react-native'

export default class Movie extends Component {
 //配置导航图标和文字
 static navigationOptions = {
    tabBarLabel: '电影院',
    tabBarIcon: ({ tintColor }) => (
        <Image
        source={{uri: 'icon_movie'}}
        // tintColor: 图标被激活的颜色
        style={[styles.icon, {tintColor: tintColor}]}
        />
    ),
};


  render() {
    return (
      <View>
        <Text> Movie </Text>
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
