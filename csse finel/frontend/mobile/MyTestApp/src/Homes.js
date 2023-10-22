import React,{useEffect,useState} from 'react';
import {SafeAreaView, View, Text,  Button,ScrollView,StyleSheet  } from 'react-native';
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

          
          <View>
            <Text key={index}>{task._id}</Text>
            <Text key={index}>{task.empID}</Text>
            <Text key={index}>{task.orderDetails}</Text>
            <Text key={index}>{task.date}</Text>
            <Text key={index}>{task.empName}</Text>
            <Button title="Update" onPress={()=>nextpage(task)} />
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
    textAlign : 'center'
  }
});
export default Homes;