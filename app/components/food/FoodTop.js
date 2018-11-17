import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image, Dimensions } from 'react-native'


let {width,height,scale}=Dimensions.get('window')
export default class FoodTop extends Component {
  render() {
    return (
      <View style={styles.box}>
            <View style={styles.city}>
                  <Text  style={styles.txt}>西安市 ▼</Text>
            </View>
             <View style={styles.search}>    
                 <Image source={{uri:'icon_search'}}  style={{height:25,width:25}} />
                 <Text>搜一搜，应有尽有</Text>
             </View>
          <Image source={{uri:'fme'}}  style={{height:35,width:35}}/> 
      </View>
    )
  }

   componentDidMount(){
    navigator.geolocation.getCurrentPosition(async (pos)=>  {

        var coords = pos.coords; //坐标对象
        // coords.longitude 经度      coords.latitude  纬度
  
        // alert(JSON.stringify(coords))
        // 高德地图API接口，获取周边信息
        let res = await axios.get(apiSearchPlace,{
          params:{
            key,
            location:coords.longitude+','+coords.latitude ,
            keywords:'美食',
            offset:15,
            page:1,
            extensions:'all'
          }
        }
        )
        alert(JSON.stringify(res))
      })
  
     
    }

}

const styles = StyleSheet.create({
    box:{
      width:width,
      height:60,
      backgroundColor:'#FF2741',
      flexDirection: 'row',
      justifyContent:'space-around',
      alignItems:'center'
   
    },
    city:{
        
    },

    txt:{
        color:'white',
        fontSize:17,

    },
    search:{
        width:width-20*2-50-50, //响应式搜索框,宽度=设备宽度-字体宽*2-头像宽-间隙
        height:35,
        backgroundColor:"#fff",
        flexDirection: 'row',
        alignItems:'center',
        borderRadius:18,
        paddingLeft:20,
    }
     
})
