import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Memory Cards</h1>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? "F15B2A" : "blue" })}
        >
          One Player
        </NavLink>
        {" | "}
        <NavLink
          to="/twoplayer"
          style={({ isActive }) => ({ color: isActive ? "F15B2A" : "blue" })}
        >
          Two Player
        </NavLink>
        {" | "}
        <NavLink
          to="/about"
          style={({ isActive }) => ({ color: isActive ? "F15B2A" : "blue" })}
        >
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;

//<NavLink
//  to="/messages"
//- style={{ color: 'blue' }}
//- activeStyle={{ color: 'green' }}
//+ style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
//>
//  Messages
//</NavLink>
