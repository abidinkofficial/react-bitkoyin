import React from 'react';
import './Header.css'

function Header(props) {
    return (
        <header className='Header'>
            <a href='/' className='Header-logo'>bit<span className='Header-logo-bold'>koyin!</span></a>
            <form className='Header-search-box'>
                <input className='Header-search-text' type='text' placeholder='Ara' onChange={props.handleSearchChange}></input>
                <button className='Header-search-button' onClick={props.fetchSearch}><i className='material-icons'>search</i></button>
            </form>
        </header>
    );
}

export default Header;