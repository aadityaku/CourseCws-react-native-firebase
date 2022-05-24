import * as React from 'react';
import {View,Text,Button,StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
const Stack = createStackNavigator();
export default function Logo({navigation}){
    const createTwoButtonAlert = () => {
    alert("Alert Title");
    }
    return (
        <View style={{justifyContent:"center",alignItems:"center",backgroundColor:"white",flexGrow:1}}>
            <View style={{backgroundColor:"white",borderRadius:10,width:"90%",marginBottom:20}}>
                <Text style={{textAlign:"center",fontWeight:"500",fontSize:27,fontFamily:"sans-serif",color:"black"}} >WelCome to Code With Sadiq</Text>
                <View style={{padding:10,marginTop:7}}>
                    <Text  style={{backgroundColor:"green",textAlign:"center",padding:12,fontSize:21,color:"white",fontWeight:"500",borderRadius:40}} onPress={() => navigation.navigate('Login')}>Login</Text>
                </View>
                <View style={{padding:10}}>
                    <Text style={styles.btn}  onPress={() => navigation.navigate('Register') }> Register</Text>
            
                    <Text style={styles.btn}  onPress={() => navigation.navigate('Register') }>Sign-in using Google</Text>
            
                    <Text style={styles.btn}  onPress={() => navigation.navigate('Register') }>Sign-in using Facebook</Text>
            
                    <Text style={styles.btn}  onPress={() => navigation.navigate('Register') }>Sign-in using Linkedin</Text>
                </View>
                <View style={{flexDirection:"row",padding:20,marginTop:20}}>
                    <Text style={{textAlign:"center",fontWeight:"500",fontSize:18}} >Don't have an account? </Text>
                    <View style={{alignItems:"flex-end",justifyContent:"flex-end",flex:1}}>
                        <Text style={{fontWeight:"500",fontSize:18,color:"green"}}>Sign up Now!</Text>
                    </View>
                    
                </View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    btn:{
        backgroundColor:"#ddd",
        textAlign:"center",
        padding:12,
        fontSize:20,
        color:"black",
        fontWeight:"500",
        borderRadius:30,
        marginTop:14
    }
})