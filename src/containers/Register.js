import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { Link } from 'react-router-dom';

import * as actions from '../actions/utility/index';

import '../assets/css/kiki.css';

class Register extends Component {

    render() { 

        return(
            <div className="kiki">
                <div className="register-page">


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
  export default connect(mapStateToProps, actions)(Register);