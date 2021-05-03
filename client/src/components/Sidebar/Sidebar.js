
import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SideBarRoute} from "./SidebarElements";


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/friends" onClick={toggle}>
                        Friends
                    </SidebarLink>
                    <SidebarLink to="/games" onClick={toggle}>
                        Games
                    </SidebarLink>
                    <SidebarLink to="/lfg" onClick={toggle}>
                        Looking To Play
                    </SidebarLink>
                    <SidebarLink to="/my-profile" onClick={toggle}>
                        My Profile
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SideBarRoute to="/login">
                        Log In
                    </SideBarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
