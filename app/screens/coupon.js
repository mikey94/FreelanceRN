import React , {PureComponent} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Keyboard,TouchableWithoutFeedback} from 'react-native';
import {width,height} from 'react-native-dimension';
import {withNavigation} from 'react-navigation';

class Coupon extends PureComponent{
    constructor(props){
        super(props);

        this.state = {

        }
    }
    dismissKeyboard=()=>{
        Keyboard.dismiss()
    }
    render(){
        return(
            <TouchableWithoutFeedback onPress={this.dismissKeyboard}>
            <View style={styles.container}>
               <TextInput underlineColorAndroid="transparent" placeholder="code" style={styles.codefeild}/>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Redeem')} style={styles.btncontainer}>
                    <Text style={styles.btntext}>Validate</Text>
                </TouchableOpacity>
            </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    btncontainer:{
        backgroundColor:'#EB2F3A',
        width:width(50),
        height:50,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:50,
        borderRadius:20
    },
    btntext:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:"600"
    },
    codefeild:{
        alignSelf:'center',
        // elevation:10,
        shadowColor:'grey',
        shadowOpacity:1,
        shadowOffset:{width:0,height:2},
        width:width(70),
        height:50,
        borderRadius:15,
        paddingLeft:10,
        marginTop:50,
        borderColor:'grey',
        borderWidth:0.2
    }
})

export default withNavigation(Coupon);