import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./Navbar/Navbar.js";
import SaveButton from "./SaveButton"

import Logo from "./Logo"

function Header() {
    const headerStyle = {
        flexGrow: '1',
        display: 'flex',
        flexflow: 'row nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1px 5px',
        marginTop: '5px',
        marginBottom: '5px'
    };
    
	return (
		<div style={headerStyle}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/user" />
                    <Route path="/" />
                    <Route path="/new" />
                    <Route path="/locations" />
                    <Route path="/synch" />
                    <Route path="/support" />
                    <Route path="/log" />
                </Routes>
            </Router>
            <Logo />
            <SaveButton />
		</div>
	)
}

export default Header