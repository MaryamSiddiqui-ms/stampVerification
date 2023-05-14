import React, { useState } from 'react';
import './App.css';
import leftImage from './assets/left.jpg';
import Typewriter from "typewriter-effect";
import API from './API'
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

function App() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  
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
    // console.log(uploadedFile)
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
              <p class="roll-number">K201680</p>
              <p class="name">Owais Ali</p>
            </div>
          </div>
          <Footer /> {/* Add Footer component */}
        </div>
      </div>
      <div className="split right">
        <h1 className="main-heading">STAMP VERIFICATION</h1>
        <div className="sub-heading">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Image Segmentation\n")
                .pauseFor(1000)
                .start();
            }}
          />
        </div>
        <div>
          <p className="sub-sub-heading">Upload your image to verify its stamp</p>
        </div>
        <button onClick={handleClick} className="upload-button">Upload Image</button>
        <API image = {uploadedFile} />
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: 'none' }}
          accept="image/*"
        />
        <ImageViewModal isOpen={isModalOpen} onClose={closeModal} file={uploadedFile} />
      </div>
    </div>
  );
}

export default App;
