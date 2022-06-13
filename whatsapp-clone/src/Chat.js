import React, { useEffect, useState } from 'react';
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';

function Chat() {
    const [seed, setSeed] = useState(""); 

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

  return (
    <div className="chat">
        <div className="chat_header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            
            <div className="chat_headerInfo">
                <h3>Room Name</h3>
                <p>Last seen at...</p>
            </div>

            <div className="chat_headerRight">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>

            </div>
        </div>
        <div className="chat_body">

        </div>
        <div className="chat_footer">

        </div>
    </div>
  )
}

export default Chat