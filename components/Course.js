import {View,StyleSheet,Image,Text} from "react-native";
import React from "react"
import { ScrollView } from "react-native-gesture-handler";
const Course = ({navigation}) => {
    return (
        <>
        
        <View style={{margin:10,borderLeftWidth:2}}><Text style={{fontSize:18,padding:3}}>Our Courses</Text></View>
        <View style={styles.container} >
            <ScrollView horizontal={true}>
            <View style={styles.card}>
                <View style={styles.cardBody}>
                    <View style={styles.img}>
                        <Image source={{uri: 'https://codewithsadiq.com/public/images/course/1639911906.jpg'}} style={{width:115,height:115}}></Image>
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.heading}>Python With Data Structure</Text>
                    </View>
                    <View style={styles.duration}>
                        <Text style={styles.fotter}>Duration: 2 Months</Text>
                    </View>
                    <View style={styles.title}>
                        <Text style={{backgroundColor:"green",textAlign:"center",borderRadius:10,padding:5,marginTop:3}} onPress={()=>navigation.navigate('CourseDetails')}>View Course</Text>
                    </View>
                </View>
                
            </View>
            <View style={styles.card}>
                <View style={styles.cardBody}>
                    <View style={styles.img}>
                        <Image source={{uri: 'https://codewithsadiq.com/public/images/course/1639911906.jpg'}} style={{width:115,height:115}}></Image>
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.heading}>Python With Data Structure</Text>
                    </View>
                    <View style={styles.duration}>
                        <Text style={styles.fotter}>Duration: 2 Months</Text>
                    </View>
                    <View style={styles.title}>
                        <Text style={{backgroundColor:"green",textAlign:"center",borderRadius:10,padding:5,marginTop:3}} onPress={()=>navigation.navigate('CourseDetails')}>View Course</Text>
                    </View>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.cardBody}>
                    <View style={styles.img}>
                        <Image source={{uri: 'https://codewithsadiq.com/public/images/course/1639911906.jpg'}} style={{width:115,height:115}}></Image>
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.heading}>Python With Data Structure</Text>
                    </View>
                    <View style={styles.duration}>
                        <Text style={styles.fotter}>Duration: 2 Months</Text>
                    </View>
                    <View style={styles.title}>
                        <Text style={{backgroundColor:"green",textAlign:"center",borderRadius:10,padding:5,marginTop:3}} onPress={()=>navigation.navigate('CourseDetails')}>View Course</Text>
                    </View>
                </View>
            </View>
            </ScrollView>
        </View>
        <View style={{marginBottom:20}}>
            <View style={styles.card}>
                <View style={styles.cardBody}>
                    
                </View>
            </View>
        </View>
        </>
    )
}

const styles=StyleSheet.create({
  container:{
    flexGrow:1,
    flexDirection:"row",
  },
  card:{
    margin:10,
    padding:5,
    backgroundColor:"white",
    flex:1,
    height:220,
    borderRadius:10,
    elevation:7,
    justifyContent:"center",
    alignItems:"center",
    
 },
 cardBody:{
    padding:9,

 },
 img:{
   flexGrow:1,
   marginLeft:13,
 },
 
 title:{
     marginTop:3,  
 },
 duration:{
    
   padding:6,
   borderRadius:7,
   marginTop:7,
   backgroundColor:"#ddd", 
 },
 heading:{
   textAlign:"center",
   fontSize:12,
 },
 fotter:{
   textAlign:"center",
   fontWeight:"bold",
 }
 
});

export default Course;