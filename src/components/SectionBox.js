import React from "react";
import SubBox from "./SubBox";

import  "./SectionBox.css";


function SectionBox(props) {
	// const { locations } = useContext(GlobalContext);
    console.log(props.subSections)
	return (
		<div className="sectionBody">
            <SubBox subSections={props.subSections}/>
		</div>
	)
}

export default SectionBox