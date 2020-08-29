import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

import * as actions from '../actions/utility/index';

import '../assets/css/kiki.css';

class Intro extends Component {
    constructor(props) {
        super(props); 
        this.state = { page: 1 } 
    }

    render() { 
        
        const displayIntroPages = (page) => {
            
            if(page === 1) {
                return(
                    <div>    
                        <ReactPlayer 
                            className='react-player'
                            url="https://www.youtube.com/watch?v=nyp_PczrqFE"
                        />
                        <div className="video-player-label moveFromBottomFade delay80">the Keynote</div>
    
                        <div className="spacing" />
                        <div className="divider" />
                        <div className="spacing" />
                        
                        <ReactPlayer 
                            className='react-player'
                            url="https://www.youtube.com/watch?v=3YmFNvo8tvw"
                        />
                        <div className="video-player-label moveFromBottomFade delay200">the Walkthrough</div>
    
                        <div className="spacing" />
                        <div className="spacing" />
                        <div className="divider z-depth-2" />
    
                        <div className="row">
                            <div className="col s2 m2"></div>
                            <div className="col s6 m6"></div>
                            <div className="col s4 m4 moveFromLeftFade delay500" onClick={() => this.setState({page: 2})}>
                                <div className="fa fa-arrow-right arrow-icon z-depth-1" />
                            </div>
                        </div>

                    </div>
                )
            }else{
                return(
                    <div>
                        <div className="your-turn-text">Now it's your turn...</div>

                        <Link to="/">
                            <div className="scan-in-box-wrap z-depth-3 flipInBottom">
                                <div className="scan-in-text moveFromBottomFade delay80">Scan In</div>
                            </div>
                        </Link>

                        <div className="spacing" />
                        <div className="spacing" />
                        <div className="divider z-depth-2" />

                        <div className="row">
                            <div className="col s4 m4 moveFromRightFade delay300" onClick={() => this.setState({page: 1})}>
                                <div className="fa fa-arrow-left arrow-icon-2 z-depth-1" />
                            </div>
                            <div className="col s8 m8"></div>
                        </div>

                    </div>
                )
            }
        }

        return(
            <div className="kiki">
                <div className="intro-page z-depth-3">
                    <div className="intro-wrapper flipInTop">

                        <div className="top-box">
                            <div className="top-box-text moveFromTopFade">KIKI V1 beta</div>
                        </div>

                        {displayIntroPages(this.state.page)}
                    </div>
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
  export default connect(mapStateToProps, actions)(Intro);