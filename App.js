import * as React from 'react';
import { Button, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Logo from './components/Logo';
import Login from './components/Login';
import Register from './components/Register';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Approve from './components/Approve';
import Course from './components/Course';
import PaymentTable from './components/PaymentTable';
import CourseDetails from './components/CourseDetails';
const Stack = createStackNavigator();

function RegisterDrawer(){
  const Drawer=createDrawerNavigator();
  return(
  <Drawer.Navigator>
      <Drawer.Screen name='Home' component={Logo} options={{ headerShown: false }} />
     
       <Drawer.Screen name='Course' component={Course}  />
      
       
  </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
     
    
      <Stack.Screen name='Root' component={RegisterDrawer}  options={{ headerShown: false }} />
      <Stack.Screen name='Register' component={Register}/>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Approve' component={Approve} />
      <Stack.Screen name='CourseDetails' component={CourseDetails}/>
    </Stack.Navigator>
  
    </NavigationContainer>
  );
};

export default App;
