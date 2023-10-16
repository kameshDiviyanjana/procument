import React from "react";
import Sidebar from "../../../components/Booking/sidebar_booking/Sidebar_booking"
import Navbar from "../../../components/Booking/navbar_booking/Navbar_booking";
import Menu from "../../../components/Booking/menu_booking/Menu_booking";
import AddBookingForm from "../../../components/Booking/booking_form/Bookinform";

import "./add_booking.scss";

const AddBooking = () => {
  return (
    <div className="addbooking">
      <Sidebar />
      <div className="container">
        <Navbar />
        <h1 className="title">ADD NEW DELIVERY INFORMATION </h1>

        <Menu />

        <div class="card"></div>
        <AddBookingForm />
      </div>
    </div>
  );
};

export default AddBooking;
