import React,{useState} from "react";
import Collapsible from 'react-collapsible';
import ItemBox from "./ItemBox";

import './SubBox.css';

function genTestItems(amt){
    const testItems=[]
    for(let i = 0; i< amt;i++){
        testItems[i]=`Test Item Name Number ${i}`
    }
    return testItems
}
//Sections have array of items assigned to them

//Generate subsection tab
function subSectionTab(index){
    return(
        <button type="button" class="collapsibleButton">
                Shelf {index} ------------
            </button>
    ) 
    
}
function SubBox(props) {
    // const [sectTab, setSectTab] = useState({});
    
    const displaySubSections = props.subSections.map((subsection, index) => (
        // className = subsection + content
        <li key={index}>
            <div className="line">

            </div>
              <Collapsible open trigger= {subSectionTab(index)} lazyRender= 'false' className="">
                <div className="content">
                    {/* // {subsection}> */}
                    <ItemBox items={genTestItems(5)} />
                </div>
                </Collapsible>
        </li>
    ));
	return (
		<div className ="subBox">
            {displaySubSections}
		</div>
	)
}

export default SubBox