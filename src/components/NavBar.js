import React from "react";
import MenuIcon from "./MenuIcon"
import Logo from "./Logo"
import SectionList from "./SectionList"
import SaveButton from "./SaveButton"

function Navbar() {
	return (
		<div>
            <header>
                <MenuIcon/>
                <Logo/>
                <SaveButton/>
            </header>
			<SectionList/>
			
		</div>
	)
}

export default Navbar