import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UppBookingForm from "./components/Booking/booking_update/UppBookingForm"
import AddBookingForm from "./components/Booking/booking_form/Bookinform"
import Dash from "./components/Booking/bookingDash/Dash"
import Menu from "./components/Booking/menu_booking/Menu_booking"
import Navbar from './components/Booking/navbar_booking/Navbar_booking'
function App() {

  return (
    <div className="App">
     
      <Navbar/>
      <Dash/>
        <Router>
        <Routes>
          
          <Route path='' element={<Menu/>}  >

            <Route path='' element={<UppBookingForm />}  />
            <Route path='as/addbokinh' element={<AddBookingForm />}  />
            <Route path='as/dfa' element={<AddBookingForm />}  />


          </Route>
          
          
        </Routes>
        </Router>
        
    
     
     
    
           
    </div>
  );
}

export default App;
