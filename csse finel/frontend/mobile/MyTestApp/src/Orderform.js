import React,{useState,useEffect} from 'react';
import {SafeAreaView, View, Text, TextInput, Button,ScrollView } from 'react-native';
import axios from "axios";

const Orderform =()=>{

    const [orderDetais,setorderDetais] = useState()


    function displyeorder(){
                 
        
    }
    useEffect(()=>{
        displyeorder()
    },[])

    return(
        <SafeAreaView>
            <ScrollView>
                  <View>{
                        
                    }</View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Orderform