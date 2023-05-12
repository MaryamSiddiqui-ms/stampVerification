    import React, { Component } from 'react';
    import './App.css';
    import leftImage from './assets/left.jpg';
    import Typewriter from "typewriter-effect";

    function Footer() {
    return (
      <footer>
        <p className='Footer'>&copy; 2023 Deep Learning with Perception</p>
      </footer>
    );
    }
    function App() {
    return (
      <div className="App">
        <div className="split left">
          
          <div className="split top">
          <div className="image-container">
            <img src={leftImage} alt="left" />
            </div>
          </div>
          <div className="split bottom">
              <div class="students-container">
    <div class="student">
      <p class="roll-number">K200397</p>
      <p class="name">Mohammad Bilal Aziz</p>
    </div>
    <div class="student">
      <p class="roll-number">K200434</p>
      <p class="name">Maryam Siddiqui</p>
    </div>
    <div class="student">
      <p class="roll-number">K201080</p>
      <p class="name">Mohammad Owais</p>
    </div>
    </div>

            </div>
          <Footer /> {/* Add Footer component */}
        </div>
        <div className="split right">
          <h1 className="main-heading">STAMP VERIFICATION</h1>
          <div className= "sub-heading">
          <Typewriter 
                  onInit={(typewriter)=> {
                    typewriter
                      .typeString("Image Segmenation\n")
                      .pauseFor(1000)
                      .start();
                  }}
                /> 
    </div>
    <div>
            <p className="sub-sub-heading">Upload your image to verify its stamp</p>
            </div>
            <button className="upload-button">Upload Image</button>
        </div>

      </div>
    );
    }

    export default App;
