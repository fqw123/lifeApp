import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image,Dimensions} from 'react-native'

let {width,height,scale}=Dimensions.get('window')

export default class Adv extends Component {
  render() {
    return (
      <View>
        <Image source={{uri:'adv'}} style={styles.img} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    img:{
        width:width,
        height:height/2,
        marginTop:height/5 ,
    }

})
