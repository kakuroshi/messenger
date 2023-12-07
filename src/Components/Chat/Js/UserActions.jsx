import "../Style/UserActions.css"
import SendIcon from '@mui/icons-material/Send';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { typingMes, addMesChat } from "../../../data";

const UserActions = (props) => {
    return (
        <div className="userActions">
                <button className="addFile">+</button>
                <input onChange={e => typingMes(e.target.value)} value={props.state.urMessage} className="urMessage" placeholder="Input your message..."></input>
                <button className="smileBtn"><TagFacesIcon /></button>
                <button onClick={() => addMesChat(props.state.urMessage)} className="sendMessage"><SendIcon /></button>
        </div>
    )
}

export default UserActions