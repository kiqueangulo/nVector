import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import './ScrollBar.css';

function ScrollBar() {
    const { locations } = useContext(GlobalContext);

    const displaySections = locations.map((item, index) => (
        <div key={index} className="section-item">{item.section}</div>
    ));

    return (
        <div className="section-wrapper">
            {displaySections}
        </div>
    );
};

export default ScrollBar;