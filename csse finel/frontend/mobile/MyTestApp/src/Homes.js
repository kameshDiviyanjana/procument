import React,{useEffect,useState} from 'react';
import {SafeAreaView, View, Text,  Button,ScrollView,StyleSheet,TouchableOpacity  } from 'react-native';
import axios from "axios";

function Homes({navigation}){

    const [orderDetais,setorderDetais] = useState([])
    function nextpage(task){
        navigation.navigate('updates',{orderDeta : task});
    }
    useEffect(()=>{
        axios.get("http://10.0.2.2:3000/order/as").then((response) => {
            setorderDetais(response.data.data)
        }).catch((error) => {
            console.error('Request failed:', error.data.data);
          });
    },[])
       
   
 return(

    <View>
        <Text style={myst.tealings}>Orders</Text>
        <ScrollView>
        <View>
        {
         orderDetais?.map((task,index)=>(

          
          <View style={myst.myvies}>
            
            <Text key={index} style={myst.word}>{task.empID}</Text>
            <Text key={index} style={myst.word}>{task.orderDetails}</Text>
            <Text key={index} style={myst.word}>{task.date}</Text>
            <Text key={index} style={myst.word}>{task.empName}</Text>
            
             <TouchableOpacity  style = {myst.mybutton}>
             <Button title="Update" onPress={()=>nextpage(task)} />
             </TouchableOpacity>
            </View>
          
         ))
        }
       </View>
        </ScrollView>
    </View>
 )
}

const myst = StyleSheet.create({

  tealings : {
    textAlign : 'center',
    fontSize : 40,
   color : 'black'
  },

  myvies :{
    width : '100px', 
    height : '40px',
   backgroundColor : '#e6f3ff',
    paddingLeft : '10px',
    
  },
  word : {
         color : 'black',
         fontSize : 20,
        
 paddingLeft : 20 },
 mybutton : {
    width : '50px',
    height : 40,
    paddingLeft : 20,
    paddingRight : 30,
    borderRadius : 20
    
 },

});
export default Homes;