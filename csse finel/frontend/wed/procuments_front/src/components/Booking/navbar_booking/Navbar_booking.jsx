import React from "react";
import "./navbar_booking.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <ul>
            <li className="name">Praneeth Dilshan</li>
            <li className="post">Procurement Stff</li>
          </ul>
          <img
            src="https://media.licdn.com/dms/image/D5635AQGhHBLOLdV8jA/profile-framedphoto-shrink_400_400/0/1688620152280?e=1698040800&v=beta&t=UeLplHb0YEaahKNomDfEBaUH6R-MP97oGnkPJT_3KNk"
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
