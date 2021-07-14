import React,{PureComponent} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,ScrollView} from 'react-native';
import {withNavigation} from 'react-navigation';
import {width,height} from 'react-native-dimension';
import {PieChart} from 'react-native-svg-charts';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from "react-redux";

class DealInfo extends PureComponent{
    constructor(props){
        super(props);

        this.state = {

            deals : [
                {
                    dealname : "deal451",
                    unitsold : "200",
                    redeem :  "2141",
                    earnedtodate : "100000LKR"
                },
                {
                    dealname : "deal341",
                    unitsold : "150",
                    redeem :  "4241",
                    earnedtodate : "130000LKR"
                },
                {
                    dealname : "deal480",
                    unitsold : "500",
                    redeem :  "141",
                    earnedtodate : "80000LKR"
                }
            ]
        }
    }

    render(){
        const data = [ 50, 10, 40 ]
        const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)
        const pieData = data
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))
        const { selectedDeal } = this.props
        return(
            <ScrollView>
            <View style={styles.container}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'column',margin:20}}>
                        <Text style={{fontSize:width(2)*3,fontWeight:'600'}}>{selectedDeal.deal_name}</Text>
                        {/* <Text style={{fontSize:width(2)*2}}>Kandy(location)</Text> */}
                    </View>
                    {/* <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginRight:width(10)}}>
                            <Text style={{alignSelf:'center',fontSize:width(2)*3,marginRight:10,color:'#000000'}}>Live</Text> 
                            <View style={{width:15,height:15,backgroundColor:'#39ff14',borderRadius:100}}></View> 
                    </View> */}
                </View>

                <View style={{alignSelf:'flex-start',margin:20,flexDirection:'row'}}>

                    <View style={{flexDirection:"column"}}>
                        <PieChart
                            style={ { height: height(20)  } }
                            data={ pieData }
                        />
                        <View style={{flexDirection:'column',marginRight:30,alignContent:'center',marginTop:20}}>
                        
                        <View style={{flexDirection:'row',alignItems:'center',marginBottom:5}}>
                            <View style={{width:15,height:15,backgroundColor:randomColor(),borderRadius:100,marginLeft:10,marginRight:5}}></View> 
                            <Text style={{alignSelf:'center',fontSize:width(2)*2,marginRight:10,color:'#000000'}}>Redeemed  </Text> 
                        </View>
                        
                        <View style={{flexDirection:'row',alignItems:'center',marginBottom:5}}>
                            <View style={{width:15,height:15,backgroundColor:randomColor(),borderRadius:100,marginLeft:10,marginRight:5}}></View> 
                            <Text style={{alignSelf:'center',fontSize:width(2)*2,marginRight:10,color:'#000000'}}>Unredeemed</Text> 
                        </View>
                        
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={{width:15,height:15,backgroundColor:randomColor(),borderRadius:100,marginLeft:10,marginRight:5}}></View> 
                            <Text style={{alignSelf:'center',fontSize:width(2)*2,marginRight:10,color:'#000000'}}>Expired  </Text> 
                        </View>
                        
                        </View>
                    </View>

                    <View style={{flexDirection:'column',justifyContent:'center'}}>

                        <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',marginLeft:10,marginTop:10,height:80,width:width(40),paddingBottom:10,borderColor:'#EB2F3A',borderWidth:0.5,shadowColor:'#EB2F3A',shadowOffset:{width:0,height:1},shadowOpacity:1,shadowRadius:2,backgroundColor:'#ffffff'}}>
                            <Text style={{fontSize:width(2)*3,fontWeight:'600'}}>538</Text>
                            <Text style={{fontSize:width(2)*2}}>Redeemed</Text>
                        </View>

                        <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',marginLeft:10,marginTop:10,height:80,width:width(40),paddingBottom:10,borderColor:'#EB2F3A',borderWidth:0.5,shadowColor:'#EB2F3A',shadowOffset:{width:0,height:1},shadowOpacity:1,shadowRadius:2,backgroundColor:'#ffffff'}}>
                            <Text style={{fontSize:width(2)*3,fontWeight:'600'}}>716</Text>
                            <Text style={{fontSize:width(2)*2}}>Unit Sold</Text>
                        </View>

                    </View>

                </View>

                <View style={{flexDirection:'row'}}>
                        <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',marginLeft:20,marginTop:10,height:80,width:width(40),paddingBottom:20,paddingLeft:10}}>
                            <Text style={{fontSize:width(2)*3,fontWeight:'600'}}>Total Earned</Text>
                        </View>
                        <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',marginLeft:20,marginTop:10,height:80,width:width(40),paddingLeft:10}}>
                            <Icon type="FontAwesome" name="money" size={30} color="rgb(134, 65, 244)" />
                            <Text style={{fontSize:width(2)*3,fontWeight:'600'}}>$753.57</Text>
                            <Text style={{fontSize:width(2)*2}}>Today</Text>
                        </View>
                </View>

                <View style={{justifyContent:'center',alignSelf:'center',alignItems:'flex-start',borderColor:'#EB2F3A',borderWidth:1,width:width(70),height:height(20),paddingLeft:20,marginTop:10}}>
                    <Text style={{fontSize:width(2)*2,fontWeight:'600',paddingBottom:10}}>Status: {selectedDeal.status}</Text>
                    <Text style={{fontSize:width(2)*2,fontWeight:'600',paddingBottom:10}}>Launch Date: {selectedDeal.start_date}</Text>
                    <Text style={{fontSize:width(2)*2,fontWeight:'600',paddingBottom:10}}>End Date: {selectedDeal.end_date}</Text>
                </View>
                

            </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    }
})

function mapStateToProps({ dealsAndPackagesReducer: { selectedDealData } }) {
    return {
        selectedDeal: typeof selectedDealData !== "undefined" ? selectedDealData.deal : null
    };
}
function mapDispatchToProps(dispatch) {
    return {
        // getEveryPackages: () => dispatch(getPackages())
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNavigation(DealInfo));