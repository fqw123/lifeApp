import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image} from 'react-native'

export default class Hotel extends Component {

     //配置导航图标和文字
     static navigationOptions = {
        tabBarLabel: '酒店',
        tabBarIcon: ({ tintColor }) => (
            <Image
            source={{uri: 'icon_hotel'}}
            // tintColor: 图标被激活的颜色
            style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };
  render() {
    return (
      <View>
        <Text> Hotel </Text>
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
