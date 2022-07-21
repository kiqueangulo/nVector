import React from "react";
import ItemBox from "./ItemBox";

import './SubBox.css';

function genTestItems(amt){
    const testItems=[]
    for(let i = 0; i< amt;i++){
        testItems[i]=`Test Item Name Number ${i}`
    }
    return testItems
}


function SubBox(props) {
    
    const displaySubSections = props.subSections.map((subsection, index) => (
        // className = subsection + content
        <li key={index}>
            <button type="button" class="collapsible">
                Sub-Section: {index} ______________
            </button>
                <div className={subsection}>
                    <ItemBox items={genTestItems(5)} />
                </div>
        </li>
    ));
	return (

		<div className ="subBox">
            {displaySubSections}
		</div>
	)
}

export default SubBox