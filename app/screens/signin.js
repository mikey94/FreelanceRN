import React,{PureComponent} from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Keyboard,TouchableWithoutFeedback,KeyboardAvoidingView} from 'react-native';
import {withNavigation} from 'react-navigation';
import {width,height} from 'react-native-dimension';
import Dialog, {  DialogContent , ScaleAnimation} from 'react-native-popup-dialog';
import { connect } from "react-redux";
import { signInUser } from "../redux/actions/signInActions";

class SignIn extends PureComponent{
    constructor(props){
        super(props)

        this.state = {
            popupvisible : false,
            email: null,
            password: null
        }

    }
    dismissKeyboard=()=>{
        Keyboard.dismiss()
    }
    onSignIn = () => {
        const {email,password} = this.state
        this.props.signIn(email,password)
    }
    render(){
        const keyboardVerticalOffset = Platform.OS === 'ios' ? -10 : 0
        return(
            <TouchableWithoutFeedback onPress={this.dismissKeyboard}>
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={keyboardVerticalOffset} style={styles.container}>
                <View style={styles.circle}>
                    <Image resizeMode="contain" style={{width:width(60),height:80}} source={require('../assets/images/logo.png')}/>
                </View>

                <TextInput onChangeText={(email)=>this.setState({email})} autoCapitalize="none" underlineColorAndroid="transparent" placeholder="username" style={styles.usernamefeild}/>
                <TextInput onChangeText={(password)=>this.setState({password})} autoCapitalize="none" underlineColorAndroid="transparent" placeholder="password" style={styles.passwordfeild}/>

                <TouchableOpacity onPress={this.onSignIn} style={styles.btn}>
                    <Text style={styles.btntext}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({popupvisible:true})} style={{alignSelf:'center',marginTop:20}}>
                <Text style={styles.forgotpasstxt}>Forgot password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf:'flex-end',marginTop:height(5)}}>
                <Text style={styles.helptxt}>Help</Text>
                </TouchableOpacity>

            <Dialog
            visible={this.state.popupvisible}
            onTouchOutside={()=>this.setState({popupvisible:false})}
            dialogAnimation={new ScaleAnimation({
                useNativeDriver: true,
                toValue: 0
            })}
            dialogStyle={{width:width(100),height:height(50),position:'absolute', top:(Platform.OS === 'ios')?0:0}}
            >
            <DialogContent>
                <View style={{width:width(100),height:height(50),justifyContent:'center',alignSelf:'center'}}>
                    <TextInput underlineColorAndroid="transparent" placeholder="email address" style={styles.forgotpassfield}/>
                    <TouchableOpacity style={styles.forgotpassbtn}>
                    <Text style={styles.btntext}>Reset password</Text>
                    </TouchableOpacity>
                </View>
            </DialogContent>    
            </Dialog>    

            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    circle:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:0,
        marginRight:0,
        marginLeft:0,
        height:height(40),
        borderBottomLeftRadius:1000,
        borderBottomRightRadius:1000,
        backgroundColor:'#EB2F3A'
    },
    usernamefeild:{
        alignSelf:'center',
        color:"black",
        //elevation:10,
        // shadowColor:'grey',
        // shadowOpacity:1,
        // shadowOffset:{width:0,height:2},
        width:width(70),
        height:50,
        borderRadius:15,
        paddingLeft:10,
        marginTop:30,
        borderColor:'grey',
        borderWidth:0.3
    },
    passwordfeild:{
        alignSelf:'center',
        color:"black",
        //elevation:10,
        // shadowColor:'grey',
        // shadowOpacity:1,
        // shadowOffset:{width:0,height:2},
        width:width(70),
        height:50,
        borderRadius:15,
        paddingLeft:10,
        marginTop:20,
        borderColor:'grey',
        borderWidth:0.3
    },
    forgotpassfield:{
        alignSelf:'center',
        shadowColor:'grey',
        shadowOpacity:1,
        shadowOffset:{width:0,height:2},
        width:width(70),
        height:50,
        borderRadius:15,
        paddingLeft:10,
        borderColor:'grey',
        borderWidth:0.4
    },
    forgotpassbtn:{
        backgroundColor:'#EB2F3A',
        width:width(60),
        height:50,
        borderRadius:30,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:60,
    },
    btn:{
        backgroundColor:'#EB2F3A',
        width:width(60),
        height:50,
        borderRadius:30,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:40
    },
    btntext:{
        color:'#ffffff',
        fontSize:18,
        fontWeight:'600'
    },
    forgotpasstxt:{
        alignSelf:'center',
        color:"#EB2F3A",
        fontSize:12,
        fontWeight:"600"
    },
    helptxt:{
       color:'#EB2F3A',
       fontSize:12,
       fontWeight:"600",
       alignSelf:'flex-end',
       marginRight:30,
    }
})
function mapStateToProps(state) {
    return {

    };
}
function mapDispatchToProps(dispatch) {
    return {
        signIn : (email, password) => dispatch(signInUser(email, password)),
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNavigation(SignIn));