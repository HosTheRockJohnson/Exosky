/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link, Navigate, replace, useNavigate } from 'react-router-dom';
import Video from '../components/Video'

import '../css/LandingPage.css'

export default function LandingPage() {

    const [videoShown, setVideoShown] = useState(false)
    let videoTime = 8;

    function videoPlayer() {
        setVideoShown(!videoShown);
        setInterval(function () {
            videoTime = videoTime - 1;
            if (!videoTime) {
                window.location.replace("http://localhost:5173/map")
            }
        }, 1000)
    }

    return (
        <>
            {
                !videoShown && (
                    <div className="landing-page">
                        <div className='landing-text text-1'><span className='smaller-text'>THE</span><span>UNIVERSE</span></div>
                        <div className='landing-text text-2'><span className='smaller-text'>LET'S</span><span>DISCOVER</span></div>
                        <button onClick={() => videoPlayer()} className="start-button">Start</button>
                    </div>)
            }
            {
                videoShown && <Video />
            }
        </>
    )
}