import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/'>
            Home
            </NavLink>
          <NavLink to="/Quiz">
            Quiz
          </NavLink>
          <NavLink to="/Calculator">
            Calculator
          </NavLink>
          <NavLink to="/Form">
            Form
          </NavLink>
          <NavLink to="/Quotes">
            Quotes
          </NavLink>
        </NavMenu>
      </Nav> 
    </>
  )
};
  
export default Navbar;