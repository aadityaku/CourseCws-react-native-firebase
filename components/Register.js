import { Picker } from '@react-native-picker/picker';
import  React,{useState} from 'react';
import {View,Text,Button,StyleSheet} from "react-native";
//import DatePicker from 'react-native-date-picker';
import { TextInput } from 'react-native-gesture-handler';


export default function Register({navigation}){
   const[gender,setGender]=useState('Gender');
    return (
        <View style={{backgroundColor:"white",flex:1,padding:4,alignItems:"center"}}>
            <View style={{backgroundColor:"white",borderRadius:19,width:"93%",marginTop:10}}>
               <View style={{marginTop:15}}>

                  <Text style={{textAlign:"center",fontWeight:"500",fontSize:24,fontFamily:"sans-serif",marginBottom:15}} >This is Register Form!</Text>

                  <View style={{padding:7}}>
                    <TextInput  style={styles.input} placeholder="Enter  Name" />
                  </View>

                  <View style={{padding:7}}>
                    <TextInput  style={styles.input} placeholder="Father Name" />
                  </View>

                  <View style={{padding:7}}>
                    <TextInput  style={styles.input} placeholder="contact" />
                  </View>

                  <View style={{borderRadius:10,fontSize:18,backgroundColor:"#e6e9ee",fontFamily:"sans-serif",width:"96%" ,marginLeft:8,margin:5}}>
                    <Picker  selectedValue={gender} onValueChange={currentGender => setGender(currentGender)} >
                      <Picker.Item label="Male" value="Male" />
                      <Picker.Item label="Female" value="Female" />
                      <Picker.Item label="Other" value="Other" />
                    </Picker>
                  </View>

                  <View style={{padding:7}}>
                    <TextInput    style={styles.input} placeholder="Email" />
                  </View>

                  <View style={{padding:7}}>
                    <TextInput style={styles.input} placeholder="Eneter Password" secureTextEntry={true}/>
                  </View>

                  <View style={{padding:8,marginBottom:35}}>
                    <Text style={styles.btn}  onPress={()=>navigation.navigate('Approve')}>Register</Text>
                  </View>

                </View>
           </View>
        </View>
    )
}

const styles=StyleSheet.create({
   input:{
    borderRadius:8,
    padding:12,
    fontSize:18,
    backgroundColor:"#e6e9ee",
    fontFamily:"sans-serif"
   },
   btn:{
    backgroundColor:"#010808",
    textAlign:"center",
    padding:12,
    fontSize:20,
    color:"white",
    fontWeight:"500",
    borderRadius:10,
    
}
})