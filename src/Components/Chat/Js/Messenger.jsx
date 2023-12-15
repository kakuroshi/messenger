import React from "react";
import UserActions from "./UserActions";
import "../Style/Messenger.css"
import Recipient from "./Recipient";

const Messenger = (props) => {

    return (
        <div className="messages">
            <div className="interlocutorMesCht">

                {/* <div>{props.Elina}</div> */}

                <Recipient img={props.img} name={props.name} online={props.online} />

                <div className="dialogMessages">
                    {props.state.chatMeaages[props.ind].map((e, index) => (
                        <div key={index} className="messageInChat">
                            <h3>{e}</h3>
                        </div>
                    ))}
                </div>

                <UserActions ind={props.ind} state={props.state} />

            </div>
        </div>
    )
}




export default Messenger