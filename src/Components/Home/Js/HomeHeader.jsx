import "../Style/HomeHeader.css"
import { NavLink } from "react-router-dom"
import ModalAddPostHome from "./ModalAddPostHome"
import { useState } from "react"

const HomeHeader = ({ state, posts, setPosts }) => {
    const [flag, setFlag] = useState(false)

    return (
        <div className="head-home">
            <div className="header-home">
                <h1>News</h1>
                <div className="header-home-btns">
                    <button onClick={flag === true ? () => setFlag(false) : () => setFlag(true)} className="add-post-home"><label htmlFor="">Add post</label></button>

                    <NavLink className="navlink-profile" to={"/profile"}>
                        <button className="to-profile-home"><label htmlFor="">Profile</label></button>
                    </NavLink>
                </div>
            </div>
            <div style={flag === true ? { display: "block" } : { display: "none" }}>
                <ModalAddPostHome state={state} setPosts={setPosts} />
            </div>
        </div>
    )
}

export default HomeHeader