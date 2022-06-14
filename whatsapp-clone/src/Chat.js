import React, { useEffect, useState } from 'react';
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import { useParams } from 'react-router-dom';
import db from './firebase';

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState(""); 
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(() =>{
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    useEffect(() => {
        if(roomId) {
            db.collection("rooms").doc(roomId).onSnapshot((snapshot) => 
                setRoomName(snapshot.data().name));
        }
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed >>> ", input);
        setInput("");
    };
    console.log(roomName)
  return (
    <div className="chat">
        <div className="chat_header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            
            <div className="chat_headerInfo">
                <h3>{roomName}</h3>
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
            <p className={`chat_message ${true &&  "chat_receiver"}`}>
            <span className="chat_name">Kanishk</span>
            Hey guys
            <span className="chat_timestamp"> 4:20 pm</span>
            </p>
            
        </div>
        <div className="chat_footer">
            <InsertEmoticonIcon />
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
                <button onClick={sendMessage} type="submit">Send a message</button>
            </form>
            <MicIcon />
        </div>
    </div>
  )
}

export default Chat