import React from "react";
import "../Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <div className="header"> 

            <IconButton>
            <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>
            
            <img className="header_logo" src="https://imgur.com/ZFtfm9e.jpg" alt="" />

            <IconButton>
                <MenuIcon fontSize="large" className="header_icon" />
            </IconButton>
        </div>
    );
};

export default Header