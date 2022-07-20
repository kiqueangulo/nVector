import React from "react";

import './ItemBox.css';


function ItemBox(props) {
    let items = props.items
    let className = "itemBox"

    const displayItems = items.map((item, index) => (
        <li key={index}>
            <div  className={className}>
                {/* <div className="itemName"> */}
                <textarea class="scrollableTextBox" name="itemName">
                    {item}
                </textarea>
                     
                {/* </div> */}
                <div className="quantField">
                   <button className="minusButton"> - </button> 
                   {/* <input value={item.qauntity} maxLength="5"></input> */}
                   <textbox class="quantTextBox" name="itemQnt">
                        {index} {/* Just to have a number */}
                    </textbox>
                    <button className="plusButton"> + </button>
                </div>
                <div className="remove">
                   remove
                </div>
                
            </div>
        </li>
    ));

	return (
		<div>
            {displayItems}
		</div>
	)
}

export default ItemBox
