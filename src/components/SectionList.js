import React from "react";
const sectionArray = ["section1", "section2", "section3", "section4", "section5"]
function sectionButtons(){
	let sectionButtons = []
	for(let i in sectionArray){
		sectionButtons.push(<button>{sectionArray[i]}</button>)
	}
	return(
		// <div>sectionButtons</div>
		sectionButtons
	)
}


function SectionList() {
	return (
		<div>
           {sectionButtons()}
		</div>
	)
}

export default SectionList