import React from 'react';
import './Header.css'

function Header() {
    return (
        <header className='Header'>
            <a href='/' className='Header-logo'>bit<span className='Header-logo-bold'>koyin!</span></a>
            <div className='Header-search-box'>
                <input className='Header-search-text' type='text' placeholder='Ara'></input>
                <button className='Header-search-button'><i className='material-icons'>search</i></button>
            </div>
        </header>
    );
}

export default Header;