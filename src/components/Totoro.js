import React, { useState, useEffect } from "react";
import totoroGif from "../assets/img/totoro.gif";

export const Totoro = () => {
const [position, setPosition] = useState(0);
const [animationStopped, setAnimationStopped] = useState(false);

useEffect(() => {
    // Use a timeout to gradually update the position
    const interval = setInterval(() => {
    if (!animationStopped) {
        setPosition((prevPosition) => prevPosition + 10); // Adjust the speed by changing the value
    }

    // Check if the position reaches half of the desired distance (e.g., 500 pixels)
    if (position >= 500) {
        setAnimationStopped(true); // Stop animation when it reaches halfway
    }
    }, 100); // Adjust the interval (in milliseconds) for smoother or faster animation

    // Clear the interval when the component unmounts or animation stops
    return () => clearInterval(interval);
}, [animationStopped]);

const gifStyle = {
    width: "100px", // Set the desired width
    height: "100px", // Set the desired height
    transform: `translateX(${position}px)`, // Initial position
    transition: "transform 5s linear", // 5 seconds linear transition
};

return (
    <div className="anime-character">
    <img src={totoroGif} alt="Anime Character" style={gifStyle} />
    </div>
);
};
