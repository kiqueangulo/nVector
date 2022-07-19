import React from "react";

import Navbar from "./Navbar"
import SaveButton from "./SaveButton"

import Logo from "./Logo"

function Header() {
    const headerStyle = {
        flexGrow: '1',
        display: 'flex',
        flexflow: 'row nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1px 3px',
        marginBottom: '5px'
    };
    
	return (
		<div style={headerStyle}>
                <Navbar />
                <Logo />
                <SaveButton />
		</div>
	)
}

export default Header