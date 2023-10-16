import React from 'react';
import { useState } from "react"
import Swal from "sweetalert2"
import { useEffect } from "react";
import axios from 'axios'
import "./bookingform.scss";

 const AddBookingForm  = () =>{
    
    const [ID, setID] = useState('');
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [tele, setTele] = useState('');
    const [address, setAddress] = useState('');
    const [day, setDay] = useState('');
    const [msg, setMsg] = useState('');
    
    const [emptyFields, setEmptyFields] = useState([]);
    const[error,setError] = useState(null);

  //localStorage.clear();
      
   const handleSubmit = async (e)=> {

    e.preventDefault();
    
        const emptyFields = [];
        if (!ID) {
          emptyFields.push("ID");
        }
        if (!name) {
          emptyFields.push("name");
        }
        if (!tele) {
          emptyFields.push("tele");
        }
        if (!address) {
          emptyFields.push("address");
        }          
        if (!mail) {
          emptyFields.push("mail");
        }
        if (!day) {
          emptyFields.push("day");
        }
        if (!msg) {
          emptyFields.push("msg");
        }
        if(emptyFields.length > 0) {
          setEmptyFields(emptyFields);
          return;
        }
    const booking = {
        ID,
        name,
        mail,
        tele,
        address,
        day,
        msg}

        const  response = await axios.post('http://localhost/:3000/deleivary/Adddelivary',booking).then(()=>{
                      
        }).catch(()=>{

        })

     const json = await response.json()
     if (!response.ok){
       setError(json.error)
     }

     if (response.ok){
        setID('');
        setName('');
        setMail('');
        setTele('');
        setAddress('');
        setDay('');
        setMsg('');
        setError(null)

        console.log('New Information Details Added',json)
     }
     Swal.fire("Done!", "New Information Details Added Successfull!", "success");
   };

return(

    <form className="create"  onSubmit={handleSubmit}>

      <h3> ADD NEW DELIVERY INFORMATION  </h3>

     
      
        <label> Delivery ID   </label>
        <input
             type ="text"
             placeholder='Enter Delivery ID ' required
             onChange={(e)=> setID(e.target.value)}
            value={ID}
        />


        <label> Supplier Name   </label>
        <input
             type ="text"
             placeholder='Enter Name ' required
             onChange={(e)=> setName(e.target.value)}
            value={name}
        />
        {emptyFields.includes("name") && (
              <div className="error">*Please enter Name*</div>
        )}


<label> Email  </label>
        <input
             type ="email"
             unique = "true"
             placeholder=' Enter Email' required
             onChange={(e)=> setMail(e.target.value)}
            value={mail}
        
        />
        {emptyFields.includes("mail") && (
              <div className="error">*Please enter Email*</div>
        )}


         <label> Contact Number:</label>
            <input
            type="tel"
            pattern="^[0-9]{10}$"
            placeholder="Enter Contact Number"
            required
            onChange={(e) => setTele(e.target.value)}
            value={tele}
            />
        {emptyFields.includes("tele") && (
              <div className="error">*Please enter Phone No*</div>
        )}


        <label> Address </label>
        <input
             type ="text"
             placeholder='Enter Address ' required
             onChange={(e)=> setAddress(e.target.value)}
            value={address}
        
        />
        {emptyFields.includes("address") && (
              <div className="error">*Please enter Address1*</div>
        )}

         <label> Check In Date  </label>
        <input
             type ="date"
             min={new Date().toISOString().slice(0, 10)}
             onChange={(e)=> setDay(e.target.value)}
            value={day}
        
        /> 
        {emptyFields.includes("checkin") && (
              <div className="error">*Please enter Check In Date*</div>
        )}



<label>Massege  </label>
        <input
             type ="text"
             placeholder=' Enter Massege' required
             onChange={(e)=> setMsg(e.target.value)}
            value={msg}
        
        />
        {emptyFields.includes("msg") && (
              <div className="error">*Please enter State*</div>
        )}


        {/* <button type="submit">Submit</button> <br/> <br/>    
        

        <button onClick={() => window.location.reload()}> CANCEL </button> */}

<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <button type="submit">Submit</button>
  <button onClick={() => window.location.reload()} style={{ marginLeft: '50px' }}>CANCEL</button>
</div>

        {error && <div className ="error">{error}</div>}


    </form>
    
     )
  
 }
  export default AddBookingForm;
