import React,{useState}  from "react";

function toggle(){

    console.log('Menu Toggle')
}

function MenuIcon(){
    const [menu,toggleMenu] = useState(false)
    if (menu === false){
        return(
            <div width="40px" height="40" onclick={toggle}>
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20" rx="8"></rect>
                    <rect y="30" width="100" height="20" rx="8"></rect>
                    <rect y="60" width="100" height="20" rx="8"></rect>
                </svg>
            </div>
        )
    }else{
        return(
            <div width="40px" height="40">
            <img src="./assets/x-close-icon.svg" alt="close icon" onclick={toggle}/>
            </div>
        )
    }

}
export default MenuIcon