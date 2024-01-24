import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screen/Login'
import menu from './Screen/menu';
import home from './Screen/home';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Login'>

        <Stack.Screen
        name="Login"
        component={Login}
        options={{
        headerShown:false}}/>

      <Stack.Screen
      name="home"
      component={home}
      options={{
      headerShown:false}}          
          />
      
      <Stack.Screen
      name="Menu"
      component={menu}
      options={{
        headerShown:false
      }}
      />
       

      </Stack.Navigator>

    </NavigationContainer>

       
  );
}