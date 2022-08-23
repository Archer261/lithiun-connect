import logo from '../images/logo1.png';
import whiteLogo from '../images/white_logo1.png';
import React from 'react';
const Nav = ({minimal, setShowModal, showModal, setIsSignUp}) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken = false;

    return (
        <nav>
        <div className="logo-container">
            <img className='logo' alt='mainLogo' src={minimal ? logo : whiteLogo} />
        </div>
        

        {!authToken && !minimal && <button 
        className='nav-button' onClick={handleClick} disabled={showModal}>Log in</button>}
        </nav>
    )
}

export default Nav