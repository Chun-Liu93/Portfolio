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
            // If position is halfway, reset it
            return 0;
        } else {
            // Otherwise, continue moving
            return prevPosition + 5; // Adjust the speed by changing the value
        }
        });
    }, 100); // Adjust the interval (in milliseconds) for smoother or faster animation
    }

    return () => {
    clearInterval(animationInterval); // Clear the interval when the component unmounts
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
