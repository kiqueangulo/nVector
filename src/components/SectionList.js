import React from "react";
const sectionArray = ["section1", "section2", "section3", "section4", "section5"]

//Generates dynamic section buttons from array
function sectionButtons(){
	let sectionButtons = []
	for(let i in sectionArray){
		let elem=sectionArray[i]
		sectionButtons.push(<button className="sectionButtons" value={elem} key={elem}>{elem}</button>)
	}
	return sectionButtons
}


function SectionList() {
	return (
		<div className="sectionList">
           {sectionButtons()}
		</div>
	)
}

export default SectionList