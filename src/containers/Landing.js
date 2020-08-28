import React, { Component } from 'react';
import {connect} from 'react-redux';
import Typewriter from 'typewriter-effect';

import * as actions from '../actions/utility/index';

import '../assets/css/kiki.css';

class Landing extends Component {

  render() {    
    const firstLine = 
    `
    <string>Starting MS-DOS...</string>
    <br/>
    <br/>
    <div>DOSDATA.SYS : ▓▓▓▒▒▒</div>
    `;
    const secondLine = `
    <div>Expanded Memory Manager 386 V7.5</div>
    <div>Total Memory Available to QEMM386: 16000K</div>
    <br/>
    `;
    const thirdLine = `
    <div>CTX System Blockchain (v1.01) enabled</div>
    <div>_ _ Base I/O Addx = 220 hex</div>
    <br/>
    `;
    const terminalOne = `<div>C:SET App decentrailized.<div>`;
    const terminalTwo = `<div>C:SET Ethereum Config=C:TCP.CFG</div>`;
    const terminalFour = `<div>C:...access granted</div>`;

    const welcomeOne = `
    <br/>
    <br/>
    <div style=text-align: center;>
    ▒▒▒▒▒▒▒▒▓█▇▅▂▂ [ You are in ] ▂▂▅▇█▓▒▒▒▒▒▒▒▒</div>
    <br/>
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒</div>
    <div>
    </br/>
    `
    const welcomeTwo = `
    ---== ( Welcome to KIKI Clothing Shop ) ==---</div>
    <br/>
    </br>
    <br/>
    <div>▂▅▇ Tap Any where on screen to continue ▇▅▂</div>
    <br/>
    <div>|:_ </div>
    </br>
    `

    return(
        <div className="kiki">
          {/* onclick navigate to next page */}
          <div className="landing-page">
          <Typewriter
            options={{
              autoStart: true,
              delay: 20,
              loop: true
            }}
            onInit={(typewriter) => {
              typewriter.typeString(firstLine)
              .pasteString(secondLine)
              .pasteString(thirdLine)
              .pasteString(terminalOne)
              .pasteString(terminalTwo)
              .pasteString(terminalFour)
              .typeString(welcomeOne)
              .pasteString(welcomeTwo)

              .start()
              .pauseFor(500000)
            }}
          />
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
export default connect(mapStateToProps, actions)(Landing);