import "../Style/HomeHead.css";
import { NavLink } from "react-router-dom";

const HomeHead = () => {
	return (
		<div className="header-home">
			<h1>News</h1>

			<div className="header-home-btns">
				<button className="add-post-header-home">Add post</button>

				<NavLink to={"/profile"}>
					<button className="profile-btn-home">Profile</button>
				</NavLink>
			</div>
		</div>
	);
};

export default HomeHead;
