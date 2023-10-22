/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Orderform from './src/Orderform'
import Homes from './src/Homes'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import UpdateDeat from './src/UpdateDeat'

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


//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function App() {

  return (


  /*<NavigationContainer>
  <Stack.Navigator initialRouteName='home'>
    <Stack.Screen name='home' component={Orderform}/>
    <Stack.Screen name='login' component={Homes}/>
     <Stack.Screen  name="updates" component={UpdateDeat}/>
  </Stack.Navigator>
</NavigationContainer>
*/

<NavigationContainer>
<Tab.Navigator initialRouteName='home'   >
      <Tab.Screen name="home" component={Orderform}  options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={'#e91e63'} size={20} />
          ),
        }}/>
      <Tab.Screen name="login" component={Homes} options={{
          tabBarLabel: 'View',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="facebook" color={'#e91e63'} size={30} />
          ),
        }} />
         <Tab.Screen name="updates" component={UpdateDeat}  />
        
         
    </Tab.Navigator>
    
</NavigationContainer>



  );
}



export default App;
