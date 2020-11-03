import React, { Component } from 'react';
import {connect} from 'react-redux';
import Swal from 'sweetalert2/src/sweetalert2.js'
import '../../node_modules/sweetalert2/dist/sweetalert2.css';
import $ from 'jquery';

import * as actions from '../actions/utility/index';

import Header from '../components/Header';

import testShirt from '../assets/images/test_shirt.png';
import '../assets/css/kiki.css';

class Market extends Component {

    componentDidMount() {
        $("#market-header").addClass("header-title-text")
    }

    render() { 

        const displayDesign = (num) => {
            return(
                <div>
                    <div className={"market-wrap"}>
                        <div className="row">

                            <div className="col s5 m5">
                                <div className="market-header" />

                                <div className="shirt-text-area">
                                    <div className="top-text-box moveFromLeftFade delay100">
                                        ETH
                                        CHAIN REACTION
                                        DESIGN
                                    </div>
                                    <div className="bot-text-box">Limited Edition</div>
                                    <div className="divider-box">
                                        <div className="row">
                                            <div className="col s12 m12">
                                                <div className="left-box">
                                                    <div className="buy-btn moveFromBottomFade" onClick={() => {

                                                        Swal.fire({
                                                            title: 'Are you sure?',
                                                            text: "You won't be able to revert this!",
                                                            icon: 'warning',
                                                            showCancelButton: true,
                                                            confirmButtonColor: '#3085d6',
                                                            cancelButtonColor: '#d33',
                                                            confirmButtonText: 'Yes, Buy it!'
                                                        }).then((result) => {
                                                            if (result.value) {
                                                                Swal.fire({
                                                                icon: 'success',
                                                                title:'Design Purchased!',
                                                                text:'Yay!'
                                                                }).then((result) => {
                                                                    // console.log(result);
                                                                    if(result) {
                                                                        window.location.replace("/mydesign")
                                                                    }
                                                                })
                                                            }
                                                        })

                                                    }}>BUY</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="col s7 m7">         
                                <div className="market-header" />
                                <div className="hex-code-text"><span>&#10070;</span> {"0x 100"+num} <span>&#10070;</span></div>                       
                                <div className="test-shirt-area">
                                    <img src={testShirt} className="test-shirt-image" alt="" />
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

                    {displayDesign(1)}
                    
                    {displayDesign(2)}
                    {displayDesign(3)}
                    {displayDesign(4)}
                    {displayDesign(5)}
                    {displayDesign(6)} 
                   

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