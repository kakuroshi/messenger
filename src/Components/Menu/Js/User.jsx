import '../Style/User.css'

const User = (props) => {
    return (
        <div className="user">
            <img src={props.source} className="userImg"></img>
            <h2 className="userName">{props.name}</h2>
        </div>
    )
}

export default User