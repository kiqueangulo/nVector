import React from "react";
import MenuIcon from "./MenuIcon"
import Logo from "./Logo"
import SectionList from "./SectionList"
import SaveButton from "./SaveButton"

function Navbar() {
	return (
		<div>
            <MenuIcon/>
            <Logo/>
			<SectionList/>
			<SaveButton/>
		</div>
	)
}

export default Navbar