import React,{PureComponent} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,StatusBar} from 'react-native';
import {withNavigation} from 'react-navigation';
import {width,height} from 'react-native-dimension';
import { getProfileDetails } from "../../redux/actions/profileActions";
import { connect } from "react-redux";
import navigationService from "../../navigation/NavigationService";

class Profile extends PureComponent{
    constructor(props){
        super(props);

        this.state = {

        }
    }
    componentDidMount(){
        const { getProfile, userId } = this.props
        getProfile(userId)
    }
    logOut = () => {
        navigationService.navigateWithRest("SignIn")
    }
    render(){
        return(
            <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
               <View style={styles.mainDetails}>
                    
                    <View style={styles.picContainer}>
                        <Image style={styles.profilePic} source={require('../../assets/images/profile.jpg')}/>
                    </View>

                    <View style={styles.userDetails}>
                        <Text style={styles.txtUserDetails}>Name:  {this.props.firstName} {this.props.lastName}</Text>
                        <Text style={styles.txtUserDetails}>Position:   Admin</Text>
                        <Text style={styles.txtUserDetails}>Joined:   20/07/2019</Text>
                    </View>

               </View>

               <View style={styles.btnLayout}>
                    <TouchableOpacity style={styles.contactSupportBtn}>
                        <Text style={styles.contactSupportBtnTxt}>Contact Support</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.logOut} style={styles.logoutBtn}>
                        <Text style={styles.logoutBtnTxt}>Logout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chatBtn}>
                        <Text style={styles.chatBtnTxt}>Chat</Text>
                    </TouchableOpacity>
               </View>

               <View style={styles.subDetails}>

                        <Text style={styles.subDetailsHeaderTxt}>General Information</Text>
                      
                        <Text style={styles.subDetailsTxt}>Location : Colombo , Sri Lanka</Text>
                        <Text style={styles.subDetailsTxt}>Contact : {this.props.phone}</Text>
                        <Text style={styles.subDetailsTxt}>Email : {this.props.email}</Text>

               </View>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    picContainer:{
        width:height(16),
        height:height(16),
        backgroundColor:'red',
        borderRadius:100,
        alignSelf:'flex-start',
        margin:10,
        alignItems:'center',
        justifyContent:'center'
    },
    profilePic:{
        resizeMode:'cover',
        width:height(15),
        height:height(15),
        borderRadius:100
    },
    mainDetails:{
        flexDirection:'row',
    },
    userDetails:{
        flexDirection:'column',
        justifyContent:'center'
    },
    subDetails:{
        flexDirection:'column',
        margin:20
    },
    subDetailsHeaderTxt:{
        fontWeight:'800',
        fontSize:width(2)*2,
        marginBottom:20
    },
    subDetailsTxt:{
        fontWeight:'600',
        fontSize:width(2)*2
    },
    btnLayout:{
        flexDirection:'row'
    },
    txtUserDetails:{
        fontWeight:'600',
        fontSize:width(2)*2
    },
    contactSupportBtn:{
        height:40,
        width:width(40),
        backgroundColor:'#ffffff',
        margin:10,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'blue',
        borderWidth:2,
        borderRadius:100
    },
    contactSupportBtnTxt:{
        color:'blue',
        fontSize:14,
        fontWeight:'600'
    },
    logoutBtn: {
        height:40,
        width:width(20),
        backgroundColor:'#ffffff',
        margin:10,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#EB2F3A',
        borderWidth:2,
        borderRadius:100
    },
    logoutBtnTxt:{
        color:'#EB2F3A',
        fontSize:14,
        fontWeight:'600'
    },
    chatBtn:{
        height:40,
        width:width(20),
        backgroundColor:'#ffffff',
        margin:10,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#73982892',
        borderWidth:2,
        borderRadius:100
    },
    chatBtnTxt:{
        color:'#73982892',
        fontSize:width(2)*2,
        fontWeight:'600'
    }
})
function mapStateToProps({ signInReducer: { userId }, profileReducer: { merchant, merchantEmp, user } }) {
    return {
        userId,
        firstName: typeof merchant !== "undefined" ? merchant.fastname : null,
        lastName: typeof merchant !== "undefined" ? merchant.lastname : null,
        phone: typeof merchant !== "undefined" ? merchant.bphone : null,
        email: typeof merchant !== "undefined" ? merchant.bemail : null
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
)(withNavigation(Profile));
