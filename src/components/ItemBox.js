import React from "react";

import './ItemBox.css';


function ItemBox(props) {
    let items = props.items
    let className = "itemBox"

    const displayItems = items.map((item, index) => (
        <li key={index}>
            <div  className={className}>
                <div className="itemName">
                    {item}
                </div>
                <div className="quantField">
                    -
                    {item.qauntity}
                    +
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
