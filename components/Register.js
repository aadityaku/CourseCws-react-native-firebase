import { Picker } from '@react-native-picker/picker';
import  React,{useState} from 'react';
import {View,Text,Button,StyleSheet} from "react-native";
//import DatePicker from 'react-native-date-picker';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {firebase} from "@react-native-firebase/database"


export default function Register({navigation}){
  const db = firebase.app().database("https://coursecws-default-rtdb.asia-southeast1.firebasedatabase.app/")
   const[gender,setGender]=useState('');
   const[name,setName]=useState("");
   const[father_name,setFather]=useState("");
   const[contact,setContact]=useState("");
   const[email,setEmail]=useState("");
   const[password,setPassword]=useState("");

   const data = {
       "name":name,
       "father_name":father_name,
       "contact":contact,
       "email":email,
       "gender":gender,
       "password":password,
   }

   function store(data){
    const ref = db.ref("admissions");
    const newRef = ref.push();
    newRef.set(data).then(()=>console.log("succ"));

}
   function handleSubmit(){
    store(data)
   }

   function getData(){
    db.ref('/admissions/123')
    .once('value')
    .then(snapshot => {
      console.log('User data: ', snapshot.val());
    });
   }
   
    return (
      <ScrollView>
        <View style={{backgroundColor:"white",flex:1,padding:4,alignItems:"center"}}>
          
            <View style={{backgroundColor:"white",borderRadius:19,width:"93%",marginTop:10}}>
               <View style={{marginTop:15}}>

                  <Text style={{textAlign:"center",fontWeight:"500",fontSize:24,fontFamily:"sans-serif",marginBottom:15}} >This is Register Form!</Text>

                  <View style={{padding:7}}>
                    <TextInput  style={styles.input} value={name} placeholder="Enter  Name" onChangeText={name => setName(name)}/>
                  </View>

                  <View style={{padding:7}}>
                    <TextInput  style={styles.input} placeholder="Father Name" value={father_name} onChangeText={father_name => setFather(father_name)} />
                  </View>

                  <View style={{padding:7}}>
                    <TextInput  style={styles.input} placeholder="contact" value={contact} onChangeText={contact => setContact(contact)} />
                  </View>

                  <View style={{borderRadius:10,fontSize:18,backgroundColor:"#e6e9ee",fontFamily:"sans-serif",width:"96%" ,marginLeft:8,margin:5}}>
                    <Picker  selectedValue={gender} onValueChange={currentGender => setGender(currentGender)} >
                      <Picker.Item label="Male" value="Male" />
                      <Picker.Item label="Female" value="Female" />
                      <Picker.Item label="Other" value="Other" />
                    </Picker>
                  </View>

                  <View style={{padding:7}}>
                    <TextInput    style={styles.input} placeholder="Email" value={email} onChangeText={email => setEmail(email)} />
                  </View>

                  <View style={{padding:7}}>
                    <TextInput style={styles.input} placeholder="Eneter Password" secureTextEntry={true} value={password} onChangeText={passowrd => setPassword(passowrd)}/>
                  </View>

                  <View style={{padding:8,marginBottom:35}}>
                    <Text style={styles.btn}  onPress={()=>handleSubmit()}>Register</Text>
                  </View>

                </View>
           </View>
           
        </View>
        </ScrollView>
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