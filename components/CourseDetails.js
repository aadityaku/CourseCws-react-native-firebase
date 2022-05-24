import React from "react";
import {StyleSheet,View,Text,Image} from "react-native";

export default function CourseDetails(){
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.card}>
                    <View style={styles.cardContent}>
                        <View style={styles.title}>
                            <View><Text style={{fontSize:26,fontWeight:"500"}}>Python With Data Structure</Text></View>
                            <View style={styles.img}>
                                <Image source={{uri: 'https://codewithsadiq.com/public/images/course/1639911906.jpg'}} style={{width:155,height:155}}></Image>
                            </View>
                            <View><Text>Welcome to the Complete Data Structures and Algorithms in Python Bootcamp, the most modern, and the most complete Data Structures and Algorithms in Python course in Purnea. this is the most comprehensive course to help you ace your coding interviews and learn about Data Structures and Algorithms in Python. You will see at the top technology companies such as Apple, Amazon, Google and Microsoft and how to face Interviews with comprehensive visual which will bring you closer towards landing the tech job of your dreams! Learning Python is one of the fastest ways to improve your career prospects as it is one of the most in demand tech skills! This course will help you in better understanding every detail of Data Structures and how algorithms are implemented in high level programming language. We'll take you step-by-step through Day Basic Classes and teach you everything you need to succeed as a professional programmer. After finishing this course, you will be able to: Learn basic algorithmi</Text></View>
                            
                            <View><Text>Duration: 3 Months</Text></View>
                            <View><Text>Course Fee: ₹ 4500</Text></View>
                            <View><Text>Instrustra:Sadique Husain</Text></View>
                       
                        </View>
                        
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexGrow:1,
        backgroundColor:"#ddd",
    },
    img:{
       },
    cardContent:{
        flexDirection:"row",
        flexGrow:1,
        padding:10,
    },
    card:{
        flexGrow:1,
        margin:10,
        backgroundColor:"white",
        borderRadius:20,
    },
    title:{
        flexDirection:"column",
    },
    
      
})