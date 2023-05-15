import React, { useState, useEffect } from 'react';
import './Main.css';
import leftImage from '../assets/left.jpg';
import logo from '../assets/logo.png';
import model from '../assets/img.png';

import Typewriter from "typewriter-effect";
import Modal from 'react-modal';

function ImageViewModal(props) {
  return (
    <Modal isOpen={props.isOpen} onRequestClose={props.onClose} 
    overlayClassName="overlay"
    className="modal">
      <button onClick={props.onClose} className="close-button">X</button>
      {props.file && <img src={URL.createObjectURL(props.file)} alt="Uploaded" />}
    </Modal>
  );
}

function Footer() {
  return (
    <footer>
      <p className='Footer'>&copy; 2023 Deep Learning with Perception</p>
    </footer>
  );
}

function Main() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  useEffect(() => {
    console.log(uploadedFile)
  }, [uploadedFile])
  
  const closeModal = () => {
    // setUploadedFile(null);
    setIsModalOpen(false);
  };
  const hiddenFileInput = React.useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setUploadedFile(fileUploaded);
    setIsModalOpen(true);
    console.log(uploadedFile)
  };

  return (
    <div className="App">
      <div className="split left">
        <div className="split top">
          <div className="image-container">
            <img src={leftImage} alt="left" />
          </div>
        </div>
        <div className="split bottom">
          <Footer /> {/* Add Footer component */}
        </div>
      </div>
      <div className="split right">
        <h1 className="main-heading">bilal01/segformer-b0-finetuned-segments-stamp-verification</h1>
    <div className="sub-heading">
    <div className="logo-container">
        <img className="logo" src={logo} alt="Hugging Face logo" />
        <Typewriter
        onInit={(typewriter) => {
            typewriter
            .typeString("HUGGING FACE\n")
            .pauseFor(1000)
            .start();
        }}
        />
        </div>
        </div>
        <div>
        <p className="sub-sub-heading">Visit <a href="https://huggingface.co/bilal01/segformer-b0-finetuned-segments-stamp-verification/">the model page</a> to learn more</p>
        </div>
      </div>
        <div>
        <img className="model" src={model} alt="Hugging Face logo" />
        </div>
    </div>
  );
}

export default Main;
