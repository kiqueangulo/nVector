import React from "react";

import './ScrollBar.css';

function ScrollBar() {
    const sections = ['Section 1', 'Section 2', 'Section 3', 'Section 4', 'Section 5', 'Section 6', 'Section 7'];

    const displaySections = sections.map((section, index) => (
        <div key={index} className="section-item">{section}</div>
    ));

    return (
        <div className="section-wrapper">
            {displaySections}
        </div>
    );
};

export default ScrollBar;