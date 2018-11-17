import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import  axios from 'axios'
export default class Food_GPS extends Component {
  render() {
    return (
      <View>
        <Text>  </Text>
      </View>
    )
  }

//  //restapi.amap.com/v3/geocode/regeo?key=您的key&location=116.481488,39.990464&poitype=商务写字楼
//  &radius=1000&extensions=all&batch=false&roadlevel=0

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(async (pos)=>  {

      var coords = pos.coords; //坐标对象
      // coords.longitude 经度      coords.latitude  纬度

     
       alert(JSON.stringify(coords))
    })

   
  }

}

const styles = StyleSheet.create({})
