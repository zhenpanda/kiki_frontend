import React, { Component } from 'react';
import CircleLoader from "react-spinners/CircleLoader";
import PuffLoader from "react-spinners/PuffLoader";
import '../../node_modules/sweetalert2/dist/sweetalert2.css';
import $ from 'jquery';
import Swal from 'sweetalert2/src/sweetalert2.js';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions/utility/index';

import Header from '../components/Header';

import testShirt from '../assets/images/test_shirt.png';
import redShirt from '../assets/images/red_shirt.png';
import remixShirt from '../assets/images/remix_shirt.png';
import qrCode from '../assets/images/qrCode.png';
import '../assets/css/kiki.css';

class MyShirts extends Component {
    constructor(props) {
        super(props); 
        this.state = { stage: 1 } 
    }

    componentDidMount() {
        $("#myshirt-header").addClass("header-title-text")
    }

    render() { 

        const displayShirt = (stage) => {

            switch(stage) {
                case 2:
                    return(
                        <div>
                            <div className="qr-code-wrap z-depth-3" onClick={() => {
                                this.setState({stage: 3})
                            }}>
                                <img src={qrCode} alt="" className="qr-code-img flipInTop" />
                            </div>
                            <div className="qr-detail moveFromTopFade">Scanning qr codes</div>
                            <div className="continue-text">Tap qr code on screen to continue</div>
                        </div>
                    )
                    
                case 3:
                    return(
                        <div>
    
                            <div className="row">
                                <div className="col s8 m8 moveFromLeftFade delay100">             
                                    <div className="hex-code-text text-margin"><span>&#10070;</span> 0x 1001 <span>&#10070;</span></div>    
                                    <div className="test-shirt-area">
                                        <img src={testShirt} className="test-shirt-image black-area" alt="" />
                                    </div>
                                    <div className="market-mid short-mid-bar">
                                        <div className="market-bottom-border" />
                                    </div>
                                </div>
                                <div className="col s4 m4" />
                            </div>
    
                            <div className="remix-box moveFromTopFade delay300">
                                <div className="remix-with-text" onClick={() => {
    
                                    Swal.fire({
                                        title: 'Let do it!',
                                        text: "Are you ready?",
                                        icon: 'warning',
                                        showCancelButton: true,
                                        confirmButtonColor: '#3085d6',
                                        cancelButtonColor: '#8d8989',
                                        confirmButtonText: 'Yes',
                                        cancelButtonText: 'No'
                                    }).then((result) => {
                                        if(result.value) {
                                            this.setState({stage: 4})
                                        }
                                    })
    
                                }}>[ CONFIRM MIX ]</div>
                            </div>
    
                            <div className="row">
                                <div className="col s5 m5" />
                                <div className="col s7 m7 moveFromRightFade delay200">
                                <div className="hex-code-text text-margin"><span>&#10070;</span> 0x 9731 <span>&#10070;</span></div>    
                                    <div className="second-shirt">
                                        <img src={redShirt} className="test-shirt-image second-tee" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                
                case 4:
                    setTimeout(() => {this.setState({stage: 5})}, 1000)
                    return(
                        <div>
                        
                        <div className="loader-box">
                            <CircleLoader
                                size={215}
                                color={"#dfdfdf"}
                                loading={true}
                            />
                        </div>
                        <div className="loading-text">Loading Please wait...</div>
                        <div className="loading-detail">Remixing in progress.</div>
    
                        </div>
                    )
                
                case 5:
                    Swal.fire(
                        'Success!',
                        'We got a sweet new shirt!',
                        'success'
                    )
    
                    return(
                        <div>
                            <div className={"market-wrap"}>
                                <div className="row">
        
                                    <div className="col s8 m8">         
                                        <div className="market-header" />
                                        <div className="hex-code-text"><span>&#10070;</span> 0x 1002 <span>&#10070;</span></div>                       
                                        <div className="test-shirt-area white-area">
                                            <img src={remixShirt} className="test-shirt-image black-area shirt-box" alt="" />
                                        </div>
                                    </div>
        
                                    <div className="col s4 m4">
                                        <div className="market-header" />
        
                                        <div className="shirt-text-area">
                                            <div className="spacing" />
                                            <div className="spacing" />
                                            <div className="shirt-btn remix-color">REMIX</div>
                                            <div className="shirt-btn send-color"  onClick={() => {

                                                Swal.fire({
                                                    title: 'Are you sure you want to trade?',
                                                    text: "If you choose to trade this card know that this is not reversible once you confirm.",
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#8d8989',
                                                    confirmButtonText: 'Yes',
                                                    cancelButtonText: 'No'
                                                }).then((result) => {
                                                    if(result.value) {
                                                        this.setState({stage: 6})
                                                    }
                                                })

                                            }}>TRADE</div>
                                            <div className="shirt-btn redeem-color">REDEEM</div>
                                        </div>
        
                                    </div>
                                    
                                </div>
                            </div>
        
                            <div className="market-bottom" />
                        
                            {/* display shirt details */}
                            <div className="gen-detail">GEN: genesis +</div>
                            <div className="rmx-detail">RMX: 1</div>
        
                            <Link to="/">
                                <div className="restart">Restart</div>
                            </Link>
    
                        </div>
                    )

                case 6:
                    return(
                        <div>
                            <div className="qr-code-wrap z-depth-3" onClick={() => {
                                this.setState({stage: 7})
                            }}>
                                <img src={qrCode} alt="" className="qr-code-img flipInTop" />
                            </div>
                            <div className="qr-detail moveFromTopFade">Scan the qr code</div>
                            <div className="continue-text">Tap qr code on screen to scan!</div>
                        </div>
                    )

                case 7: 
                    setTimeout(() => {this.setState({stage: 8})}, 3000)
                    return(
                        <div>
                        
                        <div className="loader-box">
                            <PuffLoader
                                size={275}
                                color={"#dfdfdf"}
                                loading={true}
                            />
                        </div>
                        <div className="loading-text">Loading Please wait...</div>
                        <div className="loading-detail">Trade in progress.</div>

                        </div>
                    )

                case 8:
                    Swal.fire(
                        'Success!',
                        'Transfer Completed!',
                        'success'
                    )
                    return(
                        <div>
                            <div className={"market-wrap"}>
                                <div className="row">

                                    <div className="collection-title-text">Your collection is now empty</div>
                                    <div className="back-to-market-btn" onClick={() => {this.setState({stage: 1})}}>Back to Market</div>
                                    <div className="collection-title-text">Try Redeeming a design</div>
                                </div>
                            </div>
        
                            <div className="market-bottom" />
        
                        </div>
                    )

                case 9:
                    return(
                        <div>
                            <div className="qr-code-wrap z-depth-3" onClick={() => {
                                Swal.fire({
                                    imageUrl: 'https://media.giphy.com/media/121iTEUa2O49DG/giphy.gif',
                                    imageAlt: 'A tall image',
                                    title: 'ARE YOU SURE??',
                                    text: "SHOULD YOU CHOOSE TO ACCEPT YOU WILL BE ADDING THIS TO THE WORLD: - 90% CO2 EMISSIONS.",
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#8d8989',
                                    confirmButtonText: 'Yes',
                                    cancelButtonText: 'No'
                                }).then((result) => {
                                    if(result.value) {
                                        this.setState({stage: 10})
                                    }
                                })

                                
                            }}>
                                <img src={qrCode} alt="" className="qr-code-img flipInTop" />
                            </div>
                            <div className="qr-detail moveFromTopFade">Scan the qr code</div>
                            <div className="continue-text">Tap qr code on screen to scan!</div>
                        </div>
                    )
                
                case 10:
                    return(
                        <div>
                            <div className={"market-wrap"}>
                                <div className="row">

                                    <div className="collection-title-text">CONGRATS YOU’VE SAVED 100 DOLPHINS!</div>
                                    <img src="https://media.giphy.com/media/f9GOc2owKANqqNgUCO/giphy.gif" alt="" className="delphins-img" />

                                </div>
                            </div>
        
                            <div className="market-bottom" />

                            <Link to="/">
                                <div className="restart">Restart</div>
                            </Link>

                        </div>
                    )

                default:
                    return(
                        <div>
                            <div className={"market-wrap"}>
                                <div className="row">
        
                                    <div className="col s8 m8">         
                                        <div className="market-header" />
                                        <div className="hex-code-text"><span>&#10070;</span> 0x 1001 <span>&#10070;</span></div>                       
                                        <div className="test-shirt-area white-area">
                                            <img src={testShirt} className="test-shirt-image black-area shirt-box" alt="" />
                                        </div>
                                    </div>
        
                                    <div className="col s4 m4">
                                        <div className="market-header" />
        
                                        <div className="shirt-text-area">
                                            <div className="spacing" />
                                            <div className="spacing" />
                                            <div className="shirt-btn remix-color" onClick={() => {
    
                                                Swal.fire({
                                                    title: 'Remix Options!',
                                                    text: "How would you like to remix!",
                                                    icon: 'question',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#eb8289',
                                                    confirmButtonText: 'Scan Us!',
                                                    cancelButtonText: 'Scan Them!'
                                                }).then((result) => {
                                                    if(result) {
                                                        this.setState({stage: 2})
                                                    }
                                                })
    
                                            }}>REMIX</div>
                                            <div className="shirt-btn send-color" onClick={() => {

                                                Swal.fire({
                                                    title: 'Are you sure you want to trade?',
                                                    text: "If you choose to trade this card know that this is not reversible once you confirm.",
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#8d8989',
                                                    confirmButtonText: 'Yes',
                                                    cancelButtonText: 'No'
                                                }).then((result) => {
                                                    if(result.value) {
                                                        this.setState({stage: 6})
                                                    }
                                                })

                                            }}>TRADE</div>
                                            <div className="shirt-btn redeem-color" onClick={() => {

                                                Swal.fire({
                                                    title: 'Are you sure you want to redeem?',
                                                    text: "If you choose to redeem this card know that this is not reversible once you confirm.",
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#8d8989',
                                                    confirmButtonText: 'Yes',
                                                    cancelButtonText: 'No'
                                                }).then((result) => {
                                                    if(result.value) {
                                                        this.setState({stage: 9})
                                                    }
                                                })

                                            }}>REDEEM</div>
                                        </div>
        
                                    </div>
                                    
                                </div>
                            </div>
        
                            <div className="market-bottom" />
                        
                            {/* display shirt details */}
                            <div className="gen-detail">GEN: genesis</div>
                            <div className="rmx-detail">RMX: None</div>
        
                        </div>
                    )
            }
            
        }

        return(
            <div className="kiki">
                <div className="market-page">

                    <Header />

                    {displayShirt(this.state.stage)}

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