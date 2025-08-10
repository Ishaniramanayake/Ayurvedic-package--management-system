

import React from "react";
import { Link } from "react-router-dom";
import "../css/NavigationBar.css";
import "../css/Homepage.css";

function NavigationBar() {
  return (
    
    <nav className="sidebar">
    
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add Doctor</Link>
        </li>
        <li>
          <Link to="/package">Package List</Link> {/* Add this line */}
        </li>
       
        {/* Add other links as needed */}
      </ul>
    </nav>
  );
}

export default NavigationBar;