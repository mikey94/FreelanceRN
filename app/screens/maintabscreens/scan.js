import React,{PureComponent} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,ScrollView,StatusBar} from 'react-native';
import {withNavigation} from 'react-navigation';
import { LineChart, Grid, YAxis } from 'react-native-svg-charts'
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconn from 'react-native-vector-icons/Fontisto';
import {width,height} from 'react-native-dimension';
import * as shape from 'd3-shape';
import { connect } from "react-redux";

class Scan extends PureComponent{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        const data = [50, 10, 40, 95, 4, -14, 45]

        var time = new Date().toLocaleString()

        return(
            <View style={styles.container}>
                <StatusBar barStyle="dark-content"/>
                <ScrollView>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:30,marginBottom:10}}>
                        <Text style={{fontSize:width(2)*4,marginLeft:20,fontWeight:'200'}}>Overview</Text>
                </View>
                

                <View style={{flexDirection:'row',marginBottom:10}}>
                        <View style={{flexDirection:'column',justifyContent:'flex-end',marginLeft:20,height:120,width:width(40),paddingBottom:20,paddingLeft:10,borderColor:'#EB2F3A',borderWidth:1,shadowColor:'#EB2F3A',shadowOffset:{width:0,height:1},shadowOpacity:1,shadowRadius:2,backgroundColor:'#ffffff'}}>
                            <Icon type="FontAwesome" name="money" size={30} color="rgb(134, 65, 244)" />
                            <Text style={{textAlign:'left',fontWeight:'800',marginTop:10,fontSize:width(2)*2}}>$225,000</Text>
                            <Text style={{fontSize:width(2)*2}}>Gross Revenue</Text>
                        </View>
                        <View style={{flexDirection:'column',justifyContent:'center',marginLeft:20,height:120,width:width(40),paddingBottom:20,borderColor:'#EB2F3A',borderWidth:1,shadowColor:'#EB2F3A',shadowOffset:{width:0,height:1},shadowOpacity:1,shadowRadius:2,backgroundColor:'#ffffff'}}>
                            <Text style={{textAlign:'center',fontWeight:'600',fontSize:width(2)*3}}>{time.split(",")[1]}</Text>
                            <Text style={{textAlign:'center',fontWeight:'400',marginTop:10,fontSize:width(2)*2}}>{time.split(",")[0]}</Text>
                        </View>
                </View>
                <View style={{flexDirection:'row'}}>
                        <View style={{flexDirection:'column',justifyContent:'flex-end',marginLeft:20,height:120,width:width(40),paddingBottom:20,paddingLeft:10,borderColor:'#EB2F3A',borderWidth:1,shadowColor:'#EB2F3A',shadowOffset:{width:0,height:1},shadowOpacity:1,shadowRadius:2,backgroundColor:'#ffffff'}}>
                            <Iconn name="person" size={30} color="rgb(134, 65, 244)" />
                            <Text style={{textAlign:'left',fontWeight:'800',marginTop:10,fontSize:width(2)*2}}>80</Text>
                            <Text style={{fontSize:width(2)*2}}>Repeat Customers</Text>
                        </View>
                        <View style={{flexDirection:'column',justifyContent:'flex-end',marginLeft:20,height:120,width:width(40),paddingBottom:20,paddingLeft:10,borderColor:'#EB2F3A',borderWidth:1,shadowColor:'#EB2F3A',shadowOffset:{width:0,height:1},shadowOpacity:1,shadowRadius:2,backgroundColor:'#ffffff'}}>
                            <Iconn name="persons" size={30} color="rgb(134, 65, 244)" />
                            <Text style={{textAlign:'left',fontWeight:'800',marginTop:10,fontSize:width(2)*2}}>300</Text>
                            <Text style={{fontSize:width(2)*2}}>Total Customers</Text>
                        </View>
                </View>
                {/* <View style={{backgroundColor:'#ffffff',marginLeft:20,marginRight:30,marginTop:10,flexDirection:'row'}}>
                <YAxis
                    data={data}
                    contentInset={{top: 20, bottom: 20}}
                    svg={{
                        fill: '#EB2F3A',
                        fontSize: 10,
                    }}
                    numberOfTicks={6}
                    formatLabel={(value) => `${value}`}
                />
                <LineChart
                style={{ height: 180, width:width(80) }}
                data={data}
                svg={{ stroke: '#EB2F3A', strokeWidth:3 }}
                contentInset={{ top: 20, bottom: 20, left:10, right:10 }}
                curve={shape.curveNatural}
                >
                <Grid svg={{stroke: '#EB2F3A', strokeWidth:0.2}} />    
                </LineChart>
                </View> */}

                
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('ScannedQr')} style={styles.btncontainer}>
                            <Text style={styles.btntext}>SCAN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('CouponCode')} style={styles.coupontxtbtn}>
                <Text style={styles.coupontxt}>Already have coupon ?</Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    qrimage:{
        alignSelf:'center',
        width:width(60),
        height:width(60),
        marginTop:height(10)
    },
    btncontainer:{
        backgroundColor:'#EB2F3A',
        width:width(40),
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        alignSelf:'center',
        marginTop:50
    },
    btntext:{
        color:'#ffffff',
        fontSize:width(2)*3,
        fontWeight:"600"
    },
    coupontxt:{
        color:'#EB2F3A',
        fontSize:width(2)*2,
        fontWeight:"600",
        
    },
    coupontxtbtn:{
        alignSelf:'center',
        marginTop:10,
    }
})

function mapStateToProps({ signInReducer: { userId } }) {
    return {
        userId
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getProfile: (id) => dispatch(getProfileDetails(id))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNavigation(Scan));
