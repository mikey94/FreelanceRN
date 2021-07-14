import React , {PureComponent} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { width,height } from 'react-native-dimension';
import { connect } from "react-redux";
import { redeemDeal } from "../redux/actions/dealsAndPackagesActions";

class Redeem extends PureComponent{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    redeemQr = () => {
        const { userId, couponId, redeem } = this.props
        console.log("userId", userId)
        console.log("couponId", couponId)
        redeem(userId,couponId)
    }

    render(){
        return(
            <View style={styles.container}>

                <View style={styles.imageContainer}>
                    <Image style={styles.image} resizeMode={"repeat"} source={require('../assets/images/image.jpeg')}/>
                </View>

                <View style={{flexDirection:'row',marginLeft:10,marginTop:20}}>
                <Text style={{fontWeight:'700'}}>DEAL NAME  </Text>
                <Text>DEAL SUBNAME</Text>
                </View>

                <View style={{flexDirection:'row',alignSelf:'center',marginTop:20}}>
                    <View style={{flexDirection:'column',margin:10}}> 
                        <Text style={{fontWeight:'600',marginBottom:20}}>Code</Text>
                        <Text>{this.props.couponCode}</Text>
                    </View>
                    <View style={{flexDirection:'column',margin:10}}> 
                        <Text style={{fontWeight:'600',marginBottom:20}}>Expires at</Text>
                        <Text>{this.props.expiryDate}</Text>
                    </View>
                    <View style={{flexDirection:'column',margin:10}}> 
                        <Text style={{fontWeight:'600',marginBottom:20}}>Status</Text>
                        <Text style={{fontWeight:'500',color:'green'}}>Active</Text>
                    </View>
                </View>

                <View style={{flexDirection:'column',alignSelf:'center',marginTop:40}}>
                    <View style={{flexDirection:'row',marginBottom:10,justifyContent:'space-between'}}>
                        <Text style={{fontWeight:'600',textAlign:'left',marginRight:10}}>Original Value  </Text>
                        <Text>Rs. 2500.00</Text>
                    </View>
                    <View style={{flexDirection:'row',marginBottom:10,justifyContent:'space-between'}}>
                        <Text style={{fontWeight:'600',textAlign:'left',marginRight:10}}>Discount</Text>
                        <Text>10%</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontWeight:'600',textAlign:'left',marginRight:10}}>Redeemed</Text>
                        <Text>Rs. 1350.00</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={()=>this.redeemQr()} style={styles.redeemBtn}>
                    <Text style={styles.btnTxt}>Redeem</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imageContainer:{
        height:height(25),
        width:width(100),
        backgroundColor:"grey"
    },
    image:{
        height:height(25)
    },
    redeemBtn:{
        width:width(60),
        height:50,
        borderRadius:30,
        backgroundColor:'#EB2F3A',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        marginTop:height(10)
    },
    btnTxt:{
        fontSize:18,
        fontWeight:'600',
        color:'#ffffff'
    }
})

function mapStateToProps({ signInReducer: { userId }, scanQrReducer: { data } }) {
    return {
        userId,
        couponId : typeof data !== "undefined" ? data.coupon['0'].id : null,
        couponCode : typeof data !== "undefined" ? data.coupon['0'].qr_code : null,
        expiryDate : typeof data !== "undefined" ? data.coupon['0'].expiry_date : null,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        redeem: (id,couponId) => dispatch(redeemDeal(id,couponId))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNavigation(Redeem));
