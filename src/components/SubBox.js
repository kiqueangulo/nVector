import React from "react";
import ItemBox from "./ItemBox";

function genTestItems(amt){
    const testItems=[]
    for(let i = 0; i< amt;i++){
        testItems[i]=`Test Item Name Number ${i}`
    }
    return testItems
}

function SubBox() {

	return (
		<div>
            SubBox
            <ItemBox items={genTestItems(10)}/>
		</div>
	)
}

export default SubBox