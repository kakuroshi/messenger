import Interlocutor from "./Interlocutor"
import Chat from "./Chat"
import "../Style/ChatElement.css"
import Messenger from "./Messenger"

const Chats = (props) => {

    // if (props.state.selectedChat === '') {

    // }

    let interlocutors;
    let selectedUser = {
        img: "https://ustanovkaos.ru/wp-content/uploads/2022/02/06-psevdo-pustaya-ava.jpg",
        name: "Выберите чат",
        action: ""
    }

    if (props.state.users[0] !== undefined) {
        interlocutors = props.state.users.map(us => <Interlocutor id={us.id} state={props.state} key={us.id} img={us.img} unread={us.unread} name={us.name} lastMesAgo={us.lastMesAgo} action={us.action} lastMessage={us.lastMessage} />)

        if (props.state.selectedChat !== "") {
            selectedUser = props.state.users[props.state.selectedChat]
        }
    } else {
        interlocutors = props.state.dialogs.map(us => <Interlocutor id={us.id} state={props.state} key={us.id} img={us.img} unread={us.unread} name={us.name} lastMesAgo={us.lastMesAgo} action={us.action} lastMessage={us.lastMessage} />)

        if (props.state.selectedChat !== "") {
            selectedUser = props.state.dialogs[props.state.selectedChat]
        }
    }

    return (
        <div className="chatWindow">
            <div className="allChats">
                <Chat state={props.state} />
                {interlocutors}
            </div>
            <div style={props.state.flagMes === 0 ? { display: "none" } : { display: "block" }} className="messagesW">
                <Messenger ind={props.state.selectedChat} state={props.state} img={selectedUser.img} name={selectedUser.name} online={selectedUser.action} />
            </div>
        </div>
    )
}

export default Chats