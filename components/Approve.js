import * as React from 'react';
import {View,Text,Button} from "react-native";
import { TextInput } from 'react-native-gesture-handler';

export default function Approve({navigation}){
    return (
        <View style={{backgroundColor:"#ddd",flex:1,padding:4,alignItems:"center"}}>
            <View style={{backgroundColor:"white",borderRadius:10,height:180,width:"90%",marginTop:10}}>
               <View style={{marginTop:15}}>
                <Text style={{textAlign:"center",fontWeight:"500",fontSize:20}} >Your Otp send in Mobile/email</Text>

                  <View style={{padding:10}}><TextInput  style={{height:40,margin:3,borderWidth:1,borderRadius:10,padding:10}} placeholder="Eneter Otp" secureTextEntry={true}/></View>
                  <View style={{padding:10,marginBottom:35}}><Button title='Approve' onPress={()=> navigation.navigate('Course') }/>
                  
                  </View>
                 </View>
           </View>
        </View>
    )
}