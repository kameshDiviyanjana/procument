/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Orderform from './src/Orderform'
import Homes from './src/Homes'

import {
  SafeAreaView, View,Text
 
} from 'react-native';


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Sddddddddddcreen</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();
function App() {

  return (


<NavigationContainer>
  <Stack.Navigator initialRouteName='home'>
    <Stack.Screen name='home' component={Orderform}/>
    <Stack.Screen name='login' component={Homes}/>
  </Stack.Navigator>
</NavigationContainer>


  );
}



export default App;
