import React from "react";

function SideBar(){
    return(
        <div id="side-bar">
            <div id="compass-btn" className="side-btn">
                <i className="fa-solid fa-compass-drafting compass-icon"></i>
            </div>
            <div id="eraser-btn" className="side-btn">
                <img className="eraser-img" src="eraser.png" />
            </div>
        </div>
    );
}

export default SideBar;
