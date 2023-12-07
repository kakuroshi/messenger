import "../Style/Interlocutor.css"
import { selectChat } from "../../../data";

const Interlocutor = (props) => {

    let mes;
    typeof (props.lastMessage) === "string" ?
    (props.lastMessage.length > 210 ?
    mes = props.lastMessage.slice(0, 210) + "..."
    : mes = props.lastMessage)
    : mes = props.lastMessage

    let unread;

    // "interlocutorUnread"
    props.unread === 0
    ? unread = {
        display: "none"
    }
    : unread = {}

    // console.log(props.state);

    // style={props.state.selectedChat === props.id ? {backgroundColor: "blue"} : {backgroundColor: "white"} } onClick={() => selectChat(props.id)}

return (
    <div style={props.state.selectedChat === props.id ? {backgroundColor: "rgba(124, 184, 247, 1), rgba(42, 139, 242, 1)"} : {backgroundColor: "rgba(255, 255, 255, 1)"} } onClick={() => selectChat(props.id)} className="interlocutor">
        <div className="interlocutorInf">
            <img src={props.img} alt="no img" className="interlocuterImg"></img>
            <h3 className="interlocutorName">{props.name}</h3>
            <p className="interlocutorLastMesAgo">{props.lastMesAgo}</p>
            <p className="interlocutorAction">{props.action}</p>
        </div>

        <div className="interlocutorMes">
            <p className="interlocutorLastMes">{mes}</p>
            <p className="interlocutorUnread" style={unread}>{props.unread}</p>
        </div>
    </div>
)
}

export default Interlocutor