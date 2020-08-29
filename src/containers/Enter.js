import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions/utility/index';

import '../assets/css/kiki.css';

class Enter extends Component {
    render() { 
        return(
            <div className="kiki">
                <div className="enter-page">

                    <div className="password-box-wrap z-depth-3 flipInBottom">
                        <div className="password-box">

                            <div className="enter-password-text moveFromBottomFade delay80">Enter Password...</div>
                            <input className="password-input" type="password"></input>
                                
                            <Link to="intro">
                                <div className="go-btn moveFromTopFade delay100">GO</div>
                            </Link>

                        </div>
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
  export default connect(mapStateToProps, actions)(Enter);