import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "User Name",
    path: "/user",
    icon: <FaIcons.FaUserAlt />,
    cName: "nav-text",
  },
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Add Location",
    path: "/new",
    icon: <AiIcons.AiFillFileAdd />,
    cName: "nav-text",
  },
  {
    title: "Search",
    path: "/locations",
    icon: <FaIcons.FaWarehouse />,
    cName: "nav-text",
  },
  {
    title: "Sync",
    path: "/sync",
    icon: <FaIcons.FaSyncAlt />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Log Out",
    path: "/log",
    icon: <AiIcons.AiOutlineLogout />,
    cName: "nav-text",
  },
];
