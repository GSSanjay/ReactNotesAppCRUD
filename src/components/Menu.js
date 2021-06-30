import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css"

const Menu = () => {
    return (
        <>
            <nav className="menu">
                {/* <Link className="menu-items" to="/counter">Counter</Link> */}
                <Link className="menu-items" to="/itemlist">Item List</Link>
            </nav>
        </>
    )
}

export default Menu;