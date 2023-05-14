import React from 'react';
import axios from 'axios';
import './App.css';

function API(props){

    

    const url = 'https://e9ce-34-147-68-148.ngrok.io/index';
    const formData = new FormData();

    formData.append('image', props.image);

    const requestConfig = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }
    
    function query(){
        console.log(props.image)
        axios.post(url, formData, requestConfig)
        .then((response) => {
            console.log(response?.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <button className='verify-btn' onClick={query}>
            Verify
        </button>
    )
}

export default API;