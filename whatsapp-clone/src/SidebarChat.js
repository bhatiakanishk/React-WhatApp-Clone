import React from 'react';
import { Avatar } from "@mui/material";
import './Sidebar.css';

function SidebarChat() {
  return (
    <div className="sidebar-chat">
        <Avatar />
        <div className="sidebarChat_info">
            <h2>Room Name</h2>
        </div>
    </div>
  )
}

export default SidebarChat