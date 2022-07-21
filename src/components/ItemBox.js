import React,{useState} from "react";

import './ItemBox.css';

function ItemBox(props) {
    let items = props.items
    let className = "itemBox"

    const [count,setCount] = useState(0)
    //Displays an array of itmes from a call to the  
    const displayItems = items.map((item, index) => (
        
        <li key={index}>
            <div  className={className}>
                {/* <div className="itemName"> */}
                <textarea class="scrollableTextBox" name="itemName">
                    {item}
                </textarea>
                     
                {/* </div> */}
                <div className="quantField">
                   <button className="minusButton" 
                         onClick={() =>{ if (count > 0){setCount(count - 1)}else{count=0} }}> - 
                    </button> 
                   {/* <input value={item.qauntity} maxLength="5"></input> */}
                   <textbox class="quantTextBox" name="itemQnt">
                        {count} {/* Just to have a number */}
                    </textbox>
                    <button className="plusButton" 
                            onClick={() => setCount(count + 1)}> + </button>
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
