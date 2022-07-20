import React from "react";
import SubBox from "./SubBox";



function SectionBox(props) {
    console.log(props.subSections)
	return (
		<div>
            SectionBox
            <SubBox subSections={props.subSections}/>
		</div>
	)
}

export default SectionBox