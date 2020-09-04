import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <div className="header-bar">
                <div className="header-title">KIKI GFX Market</div>
            </div>

            <div className="nav-bar moveFromTopFade delay80">
                <Link to="/market">
                    <span className="nav-title" id="market-header">SHOP SHIRTS</span>
                </Link>
                <Link to="/myshirts">
                    <span className="nav-title" id="myshirt-header">MY SHIRTS</span>
                </Link>
                <span className="nav-title">FAVORITES</span>
            </div>
        </div>
    )
}
export default Header;