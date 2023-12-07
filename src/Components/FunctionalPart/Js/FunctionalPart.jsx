import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatElements from "../../Chat/Js/ChatElements";
import Home from "../../Home/Js/Home";
import Contact from "../../Contacts/Js/Contact";
import Notifications from "../../Notifications/Js/Notifications";
import Calendar from "../../Calendar/Js/Calendar";
import Settings from "../../Settings/Js/Settings";
import LogOut from "../../LogOut/Js/LogOut";
import Menu from "../../Menu/Js/Menu";
import Profile from "../../Profile/Js/Profile";

const FunctionalPart = (props) => {
	let routes = [
		{
			id: 1,
			path: "/chat",
			component: () => <ChatElements state={props.state} />,
		},
		{
			id: 2,
			path: "/home",
			component: () => <Home />,
		},
		{
			id: 3,
			path: "/contacts",
			component: () => <Contact />,
		},
		{
			id: 4,
			path: "/notifications",
			component: () => <Notifications />,
		},
		{
			id: 5,
			path: "/calendar",
			component: () => <Calendar />,
		},
		{
			id: 6,
			path: "/settings",
			component: () => <Settings />,
		},
		{
			id: 7,
			path: "/log out",
			component: () => <LogOut />,
		},
		{
			id: 8,
			path: "/profile",
			component: () => <Profile state={props.state} />,
		},
	];

	let routesAdd = routes.map((prop) => (
		<Route key={prop.id} path={prop.path} Component={prop.component} />
	));

	return (
		<BrowserRouter>
			<Menu />
			<div className="functionalPart">
				<Routes>{routesAdd}</Routes>
			</div>
		</BrowserRouter>
	);
};

export default FunctionalPart;
