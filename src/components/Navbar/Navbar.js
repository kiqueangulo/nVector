import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

import { SidebarData } from "./SidebarData.js";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./Navbar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const sidebarOptions = SidebarData.map((item, index) => (
    <li
      key={index}
      className={
        item.title === "User Name"
          ? `${item.cName} user-name`
          : item.title === "Support" || item.title === "Log Out"
          ? `${item.cName} bottom-options bottom-${index}`
          : item.cName
      }
    >
      <Link to={item.path}>
        {item.icon}
        <span>{item.title}</span>
      </Link>
    </li>
  ));

  return (
    <>
      <IconContext.Provider value={{ color: "#868686" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active-nav" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {sidebarOptions}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
