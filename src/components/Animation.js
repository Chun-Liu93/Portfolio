import React, { useState, useEffect } from "react";
import totoroGif from "../assets/img/totoro.gif";

export const Totoro = () => {
const [position, setPosition] = useState(0);
const [animationStopped, setAnimationStopped] = useState(false);

useEffect(() => {
    let animationInterval;
    if (!animationStopped) {
    animationInterval = setInterval(() => {
        setPosition((prevPosition) => {
        if (prevPosition >= 50) {
            return 0;
        } else {
            return prevPosition + 5; 
        }
        });
    }, 100); 
    }

    return () => {
    clearInterval(animationInterval); 
    };
}, [animationStopped]);

const gifStyle = {
    width: "400px", 
    height: "400px", 
    transform: `translateX(${position}px)`, 
    transition: "transform 5s linear", 
};

return (
    <div className="anime-character">
    <img src={totoroGif} alt="Anime Character" style={gifStyle} />
    </div>
);
};
