import "../Style/Btns.css";
import { NavLink } from "react-router-dom";

const MenuBtn = (props) => {
	return (
		<div className="btnSwitch" id={"btn" + props.id}>
			<NavLink
				to={props.href}
				className={({ isActive }) => (isActive ? "active" : "btnMenu")}
				id={"btn" + props.id}>
				{props.img} {props.title}
			</NavLink>
		</div>
	);
};

export default MenuBtn;
