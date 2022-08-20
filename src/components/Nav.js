import logo from '../images/logo1.png';
import whiteLogo from '../images/white_logo1.png';
import React from 'react';
const Nav = ({minimal, authToken}) => {


    return (
        <nav>
        <div className="logo-container">
            <img className='logo' alt='mainLogo' src={minimal ? logo : whiteLogo} />
        </div>
        

        {!authToken && <button className='nav-button'>Log in</button>}
        </nav>
    )
}

export default Nav