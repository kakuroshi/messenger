import React from "react";
import MenuBtn from "./menuBtns";
import User from "./User";
import Serega from "./sergio_de_shuklini.webp"
import '../Style/Menu.css'
import RoofingIcon from '@mui/icons-material/Roofing';
import ChatIcon from '@mui/icons-material/Chat';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TuneIcon from '@mui/icons-material/Tune';
import LogoutIcon from '@mui/icons-material/Logout';

const Menu = (props) => {

    let menuBtns = [
        {
            id: 1,
            title: "HOME",
            href: "/home",
            img: <RoofingIcon />
        },
        {
            id: 2,
            title: "CHAT",
            href: "/chat",
            img: <ChatIcon />
        },
        {
            id: 3,
            title: "CONTACTS",
            href: "/contacts",
            img: <RecentActorsIcon />
        },
        {
            id: 4,
            title: "NOTIFICATIONS",
            href: "/notifications",
            img: <NotificationsNoneIcon />
        },
        {
            id: 5,
            title: "CALENDAR",
            href: "/calendar",
            img: <CalendarMonthIcon />
        },
        {
            id: 6,
            title: "SETTINGS",
            href: "/settings",
            img: <TuneIcon />
        },
        {
            id: 7,
            title: "LOG OUT",
            href: "/log out",
            img: <LogoutIcon />
        }
    ]

    let btnsMen = menuBtns.map( prop => <MenuBtn href={prop.href} key={prop.id} id={prop.id} img={prop.img} title={prop.title} />)

    return (
            <div className='menu'>
                <User name="Сергей Шуклин" source={Serega} />

                {btnsMen}
                
            </div>
    )
}

export default Menu