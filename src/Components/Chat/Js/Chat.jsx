import React from "react";
import "../Style/Chats.css"
import SearchIcon from '@mui/icons-material/Search';
import { addUser } from "../../../data";
import { changeDialogs } from "../../../data";

const Chat = (props) => {

    return (
        <div className='chatHead'>
            <div className="chatsTxt">
                <h1 className="chatsH">Chats</h1>
            </div>
            <div>
                <button onClick={addUser} className="crChatBtn">+ Create New Chat</button>
            </div>
            <div className="searchChatDiv">
                <SearchIcon className="searchIcon" />
                <input onChange={changeDialogs} value={props.state.searchInput} className="searchChat" placeholder='Search'></input>
            </div>
        </div>
    )
}

export default Chat