import React from "react";
import MenuIcon from "./MenuIcon"
import Logo from "./Logo"
import SectionList from "./SectionList"
import SaveButton from "./SaveButton"

function Navbar() {
	return (
		<div className="headerContainer">
            <div className="header">
                <MenuIcon id="menuIcon"/>
                <Logo id="logo"/>
                <SaveButton id="saveButton"/>
            </div>
			<SectionList/>
			
		</div>
	)
}

export default Navbar