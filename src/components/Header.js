import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import $ from 'jquery';
import colorHelper from './colorHelper';

import burgerIcon from '../assets/images/burgerIcon.png';

const Header = () => {

    const [displayMenu, setDisplayMenu] = useState(false);
    const menuOptions = ["black","dark-blue","green","teal","red","purple","brown","grey","blue","green-lite","teal-lite","oranage","pink","yellow","white"];

    useEffect(() => {
        let bgColor = localStorage.getItem('myPcColor');
        if(bgColor) {
            $("body").css({"background-color": bgColor});
            $(".market-page").css({"background-color": bgColor});
            $(".market-bottom").css({"background": bgColor});
        }
    })

    return(
        <div>
            <div className="header-bar">
                <div className="row">
                    <div className="col s10 m10">
                        <div className="header-title">K.I.K.I. GFX v1</div>
                    </div>
                    <div className="col s1 m1">
                        <img src={burgerIcon} onClick={() => {
                            if(displayMenu) setDisplayMenu(false)
                            else setDisplayMenu(true)
                        }} alt="" className="burger-icon" />
                    </div>
                    <div className="col s1 m1"></div>
                </div>
            </div>

            {
                displayMenu ?
                <div className="nav-bar">
                    <Link to="/market">
                        <div className="nav-title" id="market-header">GFX MRKT</div>
                    </Link>
                    <Link to="/mydesign">
                        <div className="nav-title" id="myshirt-header">STUDIO</div>
                    </Link>
                    <div className="nav-title">WALKTHROUGH</div>
                    <div className="nav-title">HELP</div>

                    <Dropdown className="color-dropdown">
                        <Dropdown.Toggle className="color-title">Colors</Dropdown.Toggle>

                        <Dropdown.Menu>
                            {menuOptions.map((e,ind) => {
                                return(
                                    <Dropdown.Item key={"dropdownItem"+ind}>
                                        <div className="dropdown-text card" onClick={() => colorHelper(ind+"")}>
                                            {e}
                                        </div>
                                    </Dropdown.Item>
                                )
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                :
                ""
            }


        </div>
    )
}
export default Header;