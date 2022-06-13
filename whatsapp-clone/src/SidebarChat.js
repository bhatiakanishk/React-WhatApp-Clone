import React, { useEffect, useState } from 'react';
import { Avatar } from "@mui/material";
import './Sidebar.css';

function SidebarChat({addNewChat}) {
    const [seed, setSeed] = useState(''); 
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");
        if (roomName) {
            // database
        }
    };

  return !addNewChat ? (
    <div className="sidebar-chat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className="sidebarChat_info">
            <h2>Room Name</h2>
            <p>Last message...</p>
        </div>
    </div>
  ): (
    <div onClick={createChat} className="sidebarChat">
        <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat