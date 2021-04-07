/* Navbar.js */

import React, { useState} from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
 
/* TO DO

- need to make nav items clickable
    - needs to send user to correct page
*/


const Navbar = ({ toggle}) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        gameWithFriends
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu click={click}>
                        <NavItem>
                            <NavLinks to="/"> 
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/friends">Friends</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/games">Games</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/my-profile">My Profile</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;

