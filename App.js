import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import menu from './Screen/menu';
import Home from './Screen/home';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'>

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