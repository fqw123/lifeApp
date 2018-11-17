import React, { Component } from 'react'
import { Text, StyleSheet, View,Dimensions } from 'react-native'
import SaleItem from '../../common/SaleItem'

// 引入数据
import Discounts from '../../json/Discounts.json'

let {width,height,scale}=Dimensions.get('window')
export default class Food_Sale extends Component {
  render() {
    return (
      <View style={styles.manner}>
            {/* 上面标题部分 */}
            <View  style={styles.topline}>
               <Text style={styles.leftTxt}>超值特惠</Text>
               <Text style={styles.rightTxt}>更多优惠&gt;</Text>
            </View>
            {/* 下面图片部分 */}
            <View style={styles.scaleBox}>
                {
                 Discounts.map( rem=>
                     <SaleItem pic={rem.pic}  title={rem.title}  
                     salePrice={rem.salePrice} vipPrice={rem.vipPrice}  
                     />
                    )
                }
               
            </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    manner:{
        width,
        height:height*0.3,
        backgroundColor:'#fff',
        marginTop: 8,
        flexDirection: 'column',
        
    },
    topline:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'baseline'
    },
    leftTxt:{
        fontSize:18,
        fontWeight:'bold',
        color:"#FF0000"

    },
    scaleBox:{
        flexDirection:'row',
        justifyContent:'space-around',

    }
})
