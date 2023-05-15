import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function API(props){
    const [imgUrl, setImgUrl] = useState('');

    const url = 'https://1dd0-35-223-238-116.ngrok.io/index';
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
            console.log(response?.data)
            setImgUrl(`data:image/jpeg;base64,${response.data}`);
            // setImgUrl(`https://4bf1-34-125-142-195.ngrok.io{response.data.url}`);
            // console.log(setImgUrl)
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
            {/* <img src={`https://024f-34-125-142-195.ngrok.io/content/static/predicted.jpg`} alt="predicted image" /> */}

        </>
    )
}

export default API;