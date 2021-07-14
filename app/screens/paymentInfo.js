import React,{PureComponent} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,ScrollView} from 'react-native';
import {withNavigation} from 'react-navigation';
import {width,height} from 'react-native-dimension';

class PaymentInfo extends PureComponent{
    constructor(props){
        super(props);

        this.state = {

            paymentData : [
                {
                    title: "First Payment",
                    paymentperiod: "3 months",
                    transactiondate: "12/04/2019",
                    amount: "2000LKR",
                    paymentmethod: "Cheque",
                    status: "successful",
                    note: "sample note"
                },
                {
                    title: "Second Payment",
                    paymentperiod: "3 months",
                    transactiondate: "20/07/2019",
                    amount: "3200LKR",
                    paymentmethod: "Cheque",
                    status: "proceeding",
                    note: "sample note"
                },
                {
                    title: "Third Payment",
                    paymentperiod: "8 months",
                    transactiondate: "03/07/2019",
                    amount: "3200LKR",
                    paymentmethod: "Cheque",
                    status: "successful",
                    note: "sample note"
                }
            ]

        }
    }
    render(){
        return(
            <View style={styles.container}>
                <ScrollView indicatorStyle="white" horizontal={true} contentContainerStyle={{alignItems:'center',height:height(80)}}>
                <View style={{flexDirection:'column'}}>
                {
                    this.state.paymentData.map((item,index)=>{
                        return(
                            <View style={{width:width(100),height:height(20),backgroundColor:'#EB2F3A',borderRadius:20,borderColor:'#ffffff',borderWidth:10}}>
                                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                    <Text style={{color:'#ffffff',marginTop:20,marginLeft:10,fontSize:18,fontWeight:'800'}}>Jan 01 2019</Text>
                                    <Text style={{color:'#ffffff',marginTop:20,marginLeft:10,fontSize:18,fontWeight:'800'}}>LKR 2000.00</Text>
                                </View>
                                <Text style={{color:'#ffffff',marginTop:20,marginLeft:40,fontSize:18,fontWeight:'800'}}>Proceed</Text>
                            </View>
                        )
                    })
                }
                </View>
                {/* <View style={{width:width(80),height:height(80),backgroundColor:'#ffffff',margin:10,borderRadius:30,borderColor:'#EB2F3A',borderWidth:10}}>
                                <Text style={{color:'#000000',alignSelf:'center',marginTop:20,fontSize:20,fontWeight:'800'}}>First payment</Text>
                                <Text style={{color:'#000000',marginTop:20,marginLeft:10,fontSize:16,fontWeight:'800'}}>Payment Period</Text>
                                <Text style={{color:'#000000',marginTop:10,marginLeft:10,fontSize:12,fontWeight:'600'}}>3 months</Text>
                                <Text style={{color:'#000000',marginTop:20,marginLeft:10,fontSize:16,fontWeight:'800'}}>Transaction Date</Text>
                                <Text style={{color:'#000000',marginTop:10,marginLeft:10,fontSize:12,fontWeight:'600'}}>12/04/2019</Text>
                                <Text style={{color:'#000000',marginTop:20,marginLeft:10,fontSize:16,fontWeight:'800'}}>Amount</Text>
                                <Text style={{color:'#000000',marginTop:10,marginLeft:10,fontSize:12,fontWeight:'600'}}>2000LKR</Text>
                                <Text style={{color:'#000000',marginTop:20,marginLeft:10,fontSize:16,fontWeight:'800'}}>Payment Method</Text>
                                <Text style={{color:'#000000',marginTop:10,marginLeft:10,fontSize:12,fontWeight:'600'}}>Cheque</Text>
                                <Text style={{color:'#000000',marginTop:20,marginLeft:10,fontSize:16,fontWeight:'800'}}>Status</Text>
                                <Text style={{color:'#000000',marginTop:10,marginLeft:10,fontSize:12,fontWeight:'600'}}>successful</Text>
                                <Text style={{color:'#000000',marginTop:20,marginLeft:10,fontSize:16,fontWeight:'800'}}>Note</Text>
                                <Text style={{color:'#000000',marginTop:10,marginLeft:10,fontSize:12,fontWeight:'600'}}>sample note</Text>
                </View> */}
                </ScrollView>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    }
})

export default withNavigation(PaymentInfo)