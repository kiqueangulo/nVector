import React from "react";

import Logo from '../components/Logo'
import "./Search/Search.css";
function Home() {
    const logoStyle ={
        width: "25px",
        height: "auto"
    }
 
  return (
    <div className="bgBox">
      <div className="container">
        <div className="outline">
          <Logo/>
        </div>
        </div>
        <div className="container">
            <div className="outline">
                <h2 id="welcome">Welcome!</h2>
                <h1 id="CTA"> Select Your Section! </h1>
            </div>
        </div>
    </div>
  );
}

export default Home;
