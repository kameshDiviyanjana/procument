import React from "react";
import "./menu_booking.scss";
import { Link, NavLink, Outlet } from "react-router-dom";



const Menu = () => {
  return (
   <>
  
     <nav className="menu">
            <Link to="" className="AddBooking">DELIVERY RECODS</Link>
            <Link to="as/dfa"  className="AddBooking">ADD NEW DELIVERY INFORMATION</Link>
            <Link to="as/addbokinh"  className="AddBooking">ORDER DETAILS </Link>
     </nav>
    <Outlet/>
   </>
  );
};

export default Menu;
