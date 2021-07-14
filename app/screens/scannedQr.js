import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { width, height } from 'react-native-dimension';
import { withNavigation } from 'react-navigation';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { ButtonGroup } from 'react-native-elements';
import { connect } from "react-redux";
import { scanQr } from "../redux/actions/scanQrActions";

class ScannedQR extends PureComponent{
    constructor(props){
        super(props)

        this.state = {
            selectedIndex : 1
        }
    }

    onReadQr=(e)=>{
        const { scanQrCode, userId } = this.props
        console.log( "qr data", e.data )
        scanQrCode(userId,e.data)
        // this.props.navigation.navigate('Redeem')
    }

    updateIndex=(selectedIndex)=>{
        this.setState({selectedIndex:selectedIndex})
    }

    render(){
        // const items = ['Verify','Redeem']
        return(
            <View style={styles.container}>

                <QRCodeScanner
                topContent={
                    <View style={{marginBottom:20}}>

                        {/* <ButtonGroup
                        onPress={this.updateIndex}
                        buttons={items}
                        selectedIndex={this.state.selectedIndex}
                        containerStyle={{height:50,marginBottom:10,width:width(60),borderRadius:100}}
                        textStyle={{color:'#EB2F3A'}}
                        buttonStyle={{borderColor:"#EB2F3A",borderWidth:0}}
                        selectedButtonStyle={{backgroundColor:'#EB2F3A',borderColor:'#EB2F3A'}}
                        selectedTextStyle={{color:'#ffffff'}}
                        /> */}

                    </View>
                }
                onRead={this.onReadQr}
                // containerStyle={{paddingTop:10}}
                cameraStyle={{borderColor:'white'}}
                cameraType="back"
                />

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

function mapStateToProps({ signInReducer: { userId } }) {
    return {
        userId
    };
}
function mapDispatchToProps(dispatch) {
    return {
        scanQrCode : (id, qrCode) => dispatch(scanQr(id, qrCode))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNavigation(ScannedQR));
