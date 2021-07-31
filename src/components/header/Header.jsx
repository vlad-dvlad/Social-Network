import React from 'react';
import './header.scss';


const Header = () => {
    return (
        <header className='header header__container'>
            <div className="header__logo">
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="" />
            </div>
            <div className="header__title">
                <h1><a href="javascript:void(0);">Cool Network</a></h1>
            </div>
        </header>
    )
}

export default Header;