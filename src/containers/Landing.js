import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/utility/index';

class Landing extends Component {
  render() {
      return(

        <div className="kiki">
          <div>Landing Page</div>
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
export default connect(mapStateToProps, actions)(Landing);