import React, { Component } from 'react'
import { Text, StyleSheet, View ,Dimensions,ScrollView} from 'react-native'
// ----------获取json数据-------------------
import iconJson from '../../json/FeatureData.json'
// ----------引入公共组件--------
import IconBtn from '../../common/iconBtn'

let {width,height,scale}=Dimensions.get('window')
export default class Food_IconMenu extends Component {
    constructor(p){
        super(p)
        this.state = {
            curPage: 0    //当前页数，默认是0
          },
      this.scrollEnd=this.scrollEnd.bind(this),
      this.renderPoint=this.renderPoint.bind(this)
    }
  render() {
    return (
      <View style={styles.container}>
                <ScrollView
                    style={styles.srcollVV}
                    // 水平滚动(横向滚动)
                    horizontal
                    //是否停在整数倍屏上
                    pagingEnabled
                    //去掉横向滚动条
                    showsHorizontalScrollIndicator={false}
                    //监听滚动结束事件
                    onMomentumScrollEnd={this.scrollEnd}                
                    > 
                    {
                    this.renderView()
                    }
                </ScrollView>
                {/* //小圆点 */}
              <View  style={styles.pointBox}>
                  {
                      this.renderPoint()
                  }
              </View>
              

      </View>
    )
  }
  renderView(){
    // alert(JSON.stringify(iconJson.data[1]) ) 
    let arr=[];
    for(i=0;i<iconJson.data.length;i++){
        arr.push(
            <View style={styles.scrollChildView}>
              {
                  iconJson.data[i].map( (rem)=>
                //引用公共组件  ，循环创建子组件         
             <IconBtn icon={rem.image}  iconText={rem.title}/ >      
                  )
              }         
            </View>
        )
    }
    return arr;
  }
  //一行小圆点
  renderPoint(){  
      let arr=[]
       for(let i=0;i<iconJson.data.length;i++){
          arr.push(
           
              <View style={[styles.point,
                {backgroundColor:this.state.curPage == i? '#ff3333':'gray'}]}/>
          
          ) 
       }
       return arr;
  }
  //屏幕滚动完毕，计算出当前在第几页
  scrollEnd(e){
      // 获取滑动的偏移量
    var offSetX = e.nativeEvent.contentOffset.x;
    // 通过偏移量和屏幕宽度计算第几页
    var curPage = Math.floor(offSetX/width);	//curPage从0开始（第一页为0，第二页1 一次类推

    // 改变状态
    this.setState({curPage: curPage})
  }
}

const styles = StyleSheet.create({
    
    container:{
        marginTop:8,
        width:width,
        height:180,
        marginTop:8,
        backgroundColor:'#fff'

    },
    srcollVV:{
        width:'100%',
        height:140,
       
    },
    // 循环菜单页面
    scrollChildView:{
        width, 
        height: 180,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    pointBox:{
        flexDirection:'row',
        justifyContent:"center"
    },
    point:{
        width:7,
        height:7,
        backgroundColor:"#ccc",
        borderRadius:4,
        marginLeft:5
    }

})
