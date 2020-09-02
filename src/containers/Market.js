import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { Link } from 'react-router-dom';

import * as actions from '../actions/utility/index';

import testShirt from '../assets/images/test_shirt.png';
import '../assets/css/kiki.css';

class Market extends Component {

    render() { 

        const displayShirt = (cssAnim) => {
            return(
                <div>
                    <div className={"market-wrap moveFromBottomFade " + cssAnim}>
                        <div className="row">

                            <div className="col s4 m4">
                                <div className="market-header" />

                                <div className="shirt-text-area">
                                    <div className="top-text-box">
                                        ETH
                                        CHAIN REACTION
                                        T-SHIRT
                                    </div>
                                    <div className="bot-text-box">Limited Edition</div>
                                    <div className="divider-box">
                                        <div className="row">
                                            <div className="col s6 m6">
                                                <div className="left-box">
                                                    
                                                </div>
                                            </div>
                                            <div className="col s6 m6">
                                                
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="market-mid">
                                </div>

                            </div>

                            <div className="col s8 m8">         
                                <div className="market-header" />
                                <div className="hex-code-text"><span>&#10070;</span> 0x 1001 <span>&#10070;</span></div>                       
                                <div className="test-shirt-area moveFromBottomFade">
                                    <img src={testShirt} className="test-shirt-image" alt="" />
                                </div>
                                <div className="market-mid">
                                    <div className="market-bottom-border" />
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="market-bottom" />
                </div>
            )
        }

        return(
            <div className="kiki">
                <div className="market-page">

                    <div className="nav-bar">
                        <div className="nav-title">KIKI GFX Market</div>
                    </div>

                    {displayShirt("delay80")}
                    {displayShirt("delay100")}
                    {displayShirt("delay200")}
                    {displayShirt("delay300")}
                    {displayShirt("delay500")}
                    {displayShirt("delay500")}

                </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    // console.log("Home ->", state);
    return {
        app: state.app.data,
    }
  }
  export default connect(mapStateToProps, actions)(Market);