import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function API(props){
    const [res, setRes] = useState('');

    const url = 'https://eb9a-34-85-157-74.ngrok.io/index';
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
            // console.log(response?.data.response)
            setRes(response.data.response)
            console.log(res)
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
            {
                res != '' ?
                <h1 className='verification-text'>
                    {res}
                </h1>
                : null
            }
        </>
    )
}

export default API;