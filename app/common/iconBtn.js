import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,Dimensions } from 'react-native'

let {width} = Dimensions.get('window')
// 公共组件
export default class iconBtn extends Component {
//   传入组件的数据
// props： 
//      icon:string  图片名
//      iconText:string  图片下方文字
    //设置默认值
   static defaultProps={
    icon:'zlam',
    iconText:'默认字体'
   }
   
  render() {
      let {icon,iconText}=this.props;
      
    return (

      <View style={styles.banner} >
        <Image source={{uri:icon}} style={styles.imgsize}  />
        <Text>{iconText}  </Text>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    banner:{
        width: width / 5,
        height: 80,
        alignItems:'center' 
       
    },
    imgsize:{
       width:60,
       height:60
    }

})
