import "../Style/UserActions.css"
import SendIcon from '@mui/icons-material/Send';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { addMesChat } from "../../../data";
import { useState } from "react";

const UserActions = (props) => {

    const [mes, setMes] = useState("")

    return (
        <div className="userActions">
            <button className="addFile">+</button>
            <input onChange={e => setMes(e.target.value)} value={mes} className="urMessage" placeholder="Input your message..."></input>
            <button className="smileBtn"><TagFacesIcon /></button>
            <button onClick={() => addMesChat(mes, props.ind)} className="sendMessage"><SendIcon /></button>
        </div>
    )
}

export default UserActions