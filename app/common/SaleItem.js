import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image,Dimensions} from 'react-native'


let {width,height,scale}=Dimensions.get('window')

export default class SaleItem extends Component {
    // 公共组件中的静态一定要写，调用的时候即使没有传入数据也可以显示
    static defaultProps={
        pic:'lemon',
        title:"柠檬私语主食",
        salePrice : 130,
        vipPrice : 68
    }
  render() {
    let   {pic,title,salePrice,vipPrice}=this.props

    return (
      <View style={styles.Box}>
         <Image source={{uri:pic}} style={styles.img} />
         <View style={styles.alltxt}>
                <Text style={styles.tit}>{title}</Text>
                <View style={styles.txt}>
                        <Text style={styles.price}>￥{salePrice}</Text>
                        <Text  style={styles.vip}>￥{vipPrice}</Text>
                </View>        
         </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    Box:{
      width:width/3-6,
     

    },
    img:{
        height:80,
        width:width/3-6
    },
    
    tit:{
     fontSize:17,

    },
    
    alltxt:{
     flexDirection:'column',
     justifyContent:"space-between",
    //  backgroundColor:'red',
     height:60
    },
    txt:{
     flexDirection:'row',
     alignItems: 'baseline'

    
    },
    price:{
     fontSize:14,
     color:'#FF0000'
    },
    vip:{
       
        textDecorationLine: 'line-through',
        fontSize:12,
        marginLeft:2
    }

})
