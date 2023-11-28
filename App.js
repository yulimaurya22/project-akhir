import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home, {} from "./Screen/Home" 


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'>

      <Stack.Screen name="Home"
            component={Home}
            options={{
              headerShown:false
            }}          
          />
      </Stack.Navigator>

    </NavigationContainer>

       
  );
}