import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from "./SidebarChat";
import './Sidebar.css';
import db from "./firebase";

function Sidebar() {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc =>
                ({
                    id: doc.id,
                    data: doc.data(), 
                }))
                )
        ));
    }, []);

  return (
    <div className="sidebar">
        <div className="sidebar_header">
            <Avatar />
            <div className="sidebar_headerRight">
                <IconButton>
                    <DonutLargeIcon /> 
                </IconButton>
                <IconButton>
                    <ChatIcon /> 
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
        <div className="sidebar_search">
            <div className="sidebar_searchContainer">
                <SearchIcon />
                <input placeholder="Search or start new chat" type="text" />
            </div>
        </div>
        <div className="sidebar_chats">
            <SidebarChat addNewChat/>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
    </div>
  )
}

export default Sidebar