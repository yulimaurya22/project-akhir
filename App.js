import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { home } from "./Screen" 


const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
      initialRouteName='home'>

      <stack.Screen name="home"
            component={home}
            options={{
              headerShown:false
            }}          
          />
      </stack.Navigator>

    </NavigationContainer>

       
  );
}