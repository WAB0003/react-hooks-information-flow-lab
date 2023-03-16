//make a header function that does the same thing as before. 
//use callback function as a prop called onDarkModeClick

import React from "react";

function Header({ onDarkModeClick, isDarkMode }) {

    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {isDarkMode ? "Light" : "Dark"} Mode
            </button>
        </header>
    )
}
export default Header;