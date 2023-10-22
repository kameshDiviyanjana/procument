import React ,{useState}from 'react'
import {SafeAreaView, View, Text, TextInput, Button,ScrollView,StyleSheet  } from 'react-native';
function UpdateDeat({route }) {

    const { orderDeta } = route.params;

    const [email, setEmail] = useState('');
    const [date,setdate] =useState('')
    const [empID,setempID] =useState('')
    const [empName,setempName] =useState('') 
    const [orderDetails,setorderDetails] =useState('')
   const number = '0'


  

    const name = orderDeta.empName
     const gg=    orderDeta.date
     const ord = orderDeta.orderDetails
     const eida = orderDeta.empID
     
    
   
  return (
  <View>
     <View >
<Text style={styles.label}>Emplyee ID</Text>

<TextInput
        style={styles.input}
        placeholder="Name"
       value={eida}
        onChangeText={setempName}
       
      />
</View>
   <View >
<Text style={styles.label}>Emplyee Name</Text>

<TextInput
        style={styles.input}
        placeholder="Name"
       value={name}
        onChangeText={setempName}
       
      />
</View>


<View >
<Text style={styles.label}>date of order</Text>
<TextInput
        style={styles.input}
        placeholder="date"
        value= {gg}
        onChangeText={setdate}
       
      />
</View>
<View >
<Text style={styles.label}>Order Detils</Text>
<TextInput
        style={styles.input}
        placeholder="Order Detils"
        value= {ord}
        onChangeText={setorderDetails}
       
      />
</View>

<View style={styles.mybut}>
<Button title="Register"  />
</View>

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
export default UpdateDeat