import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screen/Login';
import Home from './Screen/Home';
import menu from './Screen/menu';


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
      name="Home"
      component={Home}
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