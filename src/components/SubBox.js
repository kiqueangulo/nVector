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
        <li key={index}>
            Sub-Section: {index} ______________
                <div className={subsection}>
                    <ItemBox items={genTestItems(10)}/>
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