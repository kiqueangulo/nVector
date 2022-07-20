import React from "react";
import SubBox from "./SubBox";

import  "./SectionBox.css";


function SectionBox(props) {
    console.log(props.subSections)
	return (
		<div className="sectionBody">
            SectionBox
            <SubBox subSections={props.subSections}/>
		</div>
	)
}

export default SectionBox