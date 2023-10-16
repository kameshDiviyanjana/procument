import React,{useState,useEffect} from 'react';
import {SafeAreaView, View, Text, TextInput, Button,ScrollView,StyleSheet  } from 'react-native';
import axios from "axios";

const Orderform =()=>{

    const [orderDetais,setorderDetais] = useState([])
    const [email, setEmail] = useState('');
    const [date,setdate] =useState('')
    const [empID,setempID] =useState('')
    const [empName,setempName] =useState('') 
    const [orderDetails,setorderDetails] =useState('')
   const number = '0'
   
    function displyeorder(){
                 
        try {
            
            const response =  axios.post('http://10.0.2.2:3000/order/add', {
                number,
                date,
                empID,
                empName,
                orderDetails

            });
      
            if (response.status === 200) {
              console.log('Login successful:', response.data);
      
              // Handle success, e.g., navigate to the next screen
             
      
      
            }
          } catch (error) {
            console.error('Login error:', error);
      
            // Handle login error, e.g., show an error message to the user
          }
        
    }
    useEffect(()=>{
        axios.get("http://10.0.2.2:3000/order/").then((response) => {
            setorderDetais(response.data.data)
        }).catch((error) => {
            console.error('Request failed:', error.data.data);
          });
    },[])


    return(
        <View>
              <Text style={styles.io}>Order Request</Text>
           
       <ScrollView>
       <View>
        {
         orderDetais?.map((task,index)=>(

          
          <View>
            <Text key={index}>{task._id}</Text>
            <Text key={index}>{task.ID}</Text>
            <Text key={index}>{task.empID}</Text>
            <Text key={index}>{task.orderDetails}</Text>
            <Text key={index}>{task.date}</Text>
            <Text key={index}>{task.empName}</Text>
            
            </View>
          
         ))
        }
       </View>
        
<View >
<Text style={styles.label}>Emplyee Name</Text>
<TextInput
        style={styles.input}
        placeholder="Name"
       
        onChangeText={setempName}
       
      />
</View>
<View >
<Text style={styles.label}>Email</Text>
<TextInput
        style={styles.input}
        placeholder="Email"
       
        onChangeText={setEmail}
       
      />
</View>

<View >
<Text style={styles.label}>employee Id</Text>
<TextInput
        style={styles.input}
        placeholder="Employee Id"
       
        onChangeText={setempID}
       
      />
</View>

<View >
<Text style={styles.label}>date</Text>
<TextInput
        style={styles.input}
        placeholder="date"
        
        onChangeText={setdate}
       
      />
</View>
<View >
<Text style={styles.label}>Order Detils</Text>
<TextInput
        style={styles.input}
        placeholder="Order Detils"
      
        onChangeText={setorderDetails}
       
      />
</View>

<View style={styles.mybut}>
<Button title="Register"  onPress={displyeorder}/>
</View>

</ScrollView>
      
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      fontSize: 16,
      marginBottom: 10,
      color: 'blue',
    },
    input: {
      width: 300,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      left :10
    },

    io :{
        textAlign : 'center',
        color: 'blue',
        fontSize: 26,
    },

    mybut :{
                
        marginTop : 50

    }
  });
export default Orderform