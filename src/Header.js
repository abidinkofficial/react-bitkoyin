import React from 'react';
import './Header.css'

function Header() {
    return(
        <header className='Header'>
            <a href='/' className='header-logo'>bit<span className='header-logo-bold'>koyin!</span></a>
            <button className='header-search-button'><i className='material-icons'>search</i></button>
        </header>
    );
}

export default Header;