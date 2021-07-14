import React,{PureComponent} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,ScrollView,StatusBar} from 'react-native';
import {withNavigation} from 'react-navigation';
import {ButtonGroup} from 'react-native-elements';
import {width,height} from 'react-native-dimension';
import { connect } from "react-redux";
import { getAllDeals, getSingleDeal } from "../../redux/actions/dealsAndPackagesActions";

class Info extends PureComponent{
    constructor(props){
        super(props);

        this.state = {
            selectedIndex : 1,
            dataDeals : [],
            dataPayments : [
                {
                    id : 1 , value : " First deal - payment info"
                },
                {
                    id : 2 , value : " Second deal - payment info"
                },
                {
                    id : 3 , value : " Third deal - payment info"
                }
            ],

        }
    }
    componentDidMount(){
        const { getEveryDeals, userId } = this.props
        getEveryDeals(userId)
    }
    componentDidUpdate(prevProps){
        const { deals } = this.props
        console.log("deals", deals)
        if ( deals !== prevProps.deals ) {
            this.setState({ dataDeals: Object.values(deals) })
        }
        console.log("state deals", this.state.dataDeals)
        console.log("state payments", this.state.dataPayments)
    }
    getSelectedDealDetails=(dealId)=>{
        console.log("pressing", dealId)
        const { getSelectedDeal } = this.props
        getSelectedDeal(dealId)
    }
    showDeals=()=>{
        const { isDealsFetched } = this.props
        const { dataDeals } = this.state
        if(isDealsFetched) {
        return(

            dataDeals.map((item,index) => {
                return(
                    <TouchableOpacity onPress={()=>this.getSelectedDealDetails(item.id)}>  
                    <View style={{height:height(25),width:width(80),margin:10,alignSelf:"center",backgroundColor:"#ffffff",borderColor:"#EB2F3A",borderWidth:2,borderRadius:10,justifyContent:'center'}}>
                        <Image style={{width:width(70),height:height(12),alignSelf:'center',marginBottom:5}} source={require('../../assets/images/image.jpeg')}/>  
                        <Text style={{color:'#000000',fontSize:width(2)*2,fontWeight:'600',paddingLeft:10}}>{item.deal_name}</Text>
                        <Text style={{color:'#000000',fontSize:width(2),fontWeight:'600',paddingLeft:12}}>LKR {item.op_cutdown_price}</Text>
                        <Text style={{color:'#000000',fontSize:width(2),fontWeight:'600',paddingLeft:12}}>LKR {item.op_discounted_price} {item.op_discount_note}</Text>
                    </View>
                    </TouchableOpacity>
                )
            })

        )
        }
        else {
            return null
        }   
    }

    showPayments=()=>{
        const { dataPayments } = this.state
        return(

            dataPayments.map((item,index)=>{
                return(
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('PaymentInfo')}>
                    <View style={{height:height(20),width:width(80),margin:10,alignSelf:"center",backgroundColor:"#ffffff",borderRadius:10,justifyContent:'center',paddingLeft:10,borderWidth:2,borderColor:'#EB2F3A'}}>
                        
                        <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                        <Text style={{color:'#000000',fontSize:width(2)*2,fontWeight:'600',marginBottom:10}}>{item.value}</Text>
                        <Image style={{marginRight:20,width:20,height:25}} source={require('../../assets/images/notification.png')}/>
                        </View>

                        <Text style={{color:'#000000',fontSize:width(2)*3,fontWeight:'800',alignSelf:'center'}}>LKR .51,607.18</Text>
                        <Text style={{color:'#000000',fontSize:width(2)*2,fontWeight:'600',alignSelf:'center'}}>Total | earn</Text>

                    </View>
                    </TouchableOpacity>
                )
            })

        )
    }

    updateIndex=(selectedIndex)=>{
        this.setState({selectedIndex:selectedIndex})
    }

    render(){
        const items = ['Deals','Payments']
        const { dataDeals, dataPayments } = this.state
        var Render = this.state.selectedIndex == 0 ? this.showDeals : this.showPayments

        return(
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                        <ButtonGroup
                        onPress={this.updateIndex}
                        buttons={items}
                        selectedIndex={this.state.selectedIndex}
                        containerStyle={{height:50,marginTop:20,marginBottom:10,width:width(60),borderRadius:100,alignSelf:'center'}}
                        textStyle={{color:'#EB2F3A'}}
                        buttonStyle={{borderColor:"#EB2F3A",borderWidth:0}}
                        selectedButtonStyle={{backgroundColor:'#EB2F3A',borderColor:'#EB2F3A'}}
                        selectedTextStyle={{color:'#ffffff'}}
                        />
                        <ScrollView>
                        
                        <Render/> 
                    
                        </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})

function mapStateToProps({ signInReducer: { userId }, dealsAndPackagesReducer: { data, isDealsFetched } }) {
    return {
        userId,
        deals: typeof data !== "undefined" ? data.deals : null,
        isDealsFetched
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getProfile: (id) => dispatch(getProfileDetails(id)),
        getEveryDeals: (id) => dispatch(getAllDeals(id)),
        getSelectedDeal : (id) => dispatch(getSingleDeal(id))
        // getEveryPackages: () => dispatch(getPackages())
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNavigation(Info));
