import React, { useEffect, useState } from 'react';
import { Avatar } from "@mui/material";
import './Sidebar.css';

function SidebarChat() {
    const [seed, setSeed] = useState(''); 
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])
  return (
    <div className="sidebar-chat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className="sidebarChat_info">
            <h2>Room Name</h2>
            <p>Last message...</p>
        </div>
    </div>
  )
}

export default SidebarChat