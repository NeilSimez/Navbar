import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

function Navbar() {
    return (
        <>
         <Nav>
             <NavLink to="/">
                 <h1>E-comerce</h1>
             </NavLink>
             <Bars />
             <NavMenu>
                 <NavLink to="/about" activeStyle>
                     About
                 </NavLink>
                 <NavLink to="/services" activeStyle>
                     Services
                 </NavLink>
                 <NavLink to="/contact-us" activeStyle>
                     Contact Us
                 </NavLink>
                 <NavLink to="/sing-up" activeStyle>
                     Sing up
                 </NavLink>
                 <NavBtn>
                     <NavBtnLink to="/singin">Sing In</NavBtnLink>
                 </NavBtn>
             </NavMenu>
         </Nav>
        </>
    )
}

export default Navbar
