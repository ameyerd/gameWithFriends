/* Navbar.js */

import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';


const Navbar = ({ toggle}) => {
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
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="friends">Friends</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="games">Games</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="play">Looking To Play</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="my-profile">My Profile</NavLinks>
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

