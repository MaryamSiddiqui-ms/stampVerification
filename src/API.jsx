import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function API(props){
    const [imgUrl, setImgUrl] = useState('');

    const url = 'https://7a16-34-147-68-148.ngrok.io/index';
    const requestConfig = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }

    function query(){
        const formData = new FormData();
        
        formData.append('file', props.image)
        
        axios.post(url, formData, requestConfig)
        .then((response) => {
            // console.log(response?.data)
            setImgUrl(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <button className='verify-btn' onClick={query}>
                Verify
            </button>
            {imgUrl && <img src={imgUrl} alt='image' />}
        </>
    )
}

export default API;