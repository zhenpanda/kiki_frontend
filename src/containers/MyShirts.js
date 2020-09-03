import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../../node_modules/sweetalert2/dist/sweetalert2.css';
import $ from 'jquery';

import * as actions from '../actions/utility/index';

import Header from '../components/Header';

import testShirt from '../assets/images/test_shirt.png';
import '../assets/css/kiki.css';

class MyShirts extends Component {

    componentDidMount() {
        $("#myshirt-header").addClass("header-title-text")
    }

    render() { 

        const displayShirt = (cssAnim) => {
            return(
                <div>
                    <div className={"market-wrap " + cssAnim}>
                        <div className="row">


                            <div className="col s8 m8">         
                                <div className="market-header" />
                                <div className="hex-code-text"><span>&#10070;</span> 0x 1001 <span>&#10070;</span></div>                       
                                <div className="test-shirt-area white-area">
                                    <img src={testShirt} className="test-shirt-image black-area" alt="" />
                                </div>
                                <div className="market-mid">
                                    <div className="market-bottom-border" />
                                </div>
                            </div>

                            <div className="col s4 m4">
                                <div className="market-header" />

                                <div className="shirt-text-area">
                                    <div className="spacing" />
                                    <div className="spacing" />
                                    <div className="shirt-btn remix-color">REMIX</div>
                                    <div className="shirt-btn send-color">SEMD</div>
                                    <div className="shirt-btn redeem-color">REDEEM</div>
                                </div>
                                <div className="market-mid">
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

                    <Header />

                    {displayShirt()}

                    {/* display shirt details */}
                    
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
export default connect(mapStateToProps, actions)(MyShirts);