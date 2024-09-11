import React, { useState, useEffect } from "react";
import otf from "./images/sadness-otf.png";
import cry from "./images/sadness-cry.png";
import cry2 from "./images/sadness-cry-on-a-cloud-lol.png";
import flab from "./images/sadness-flabbergasted.png";
import happi from "./images/sadness-happy.png";
import peek from "./images/sadness-peeking-up.png";
import welcome from "./images/sadness-welcome.png";
import book from "./images/sadness-reading-book.png";
import shy from "./images/sadness-shy.png";
import yt from "./images/sadness-watching-yt.png";
import yay from "./images/sadness-yay.png";
import "./ImageRotate.css";

const ImageRotate = () => {
  const images = [
    welcome,
    flab,
    peek,
    happi,
    otf,
    cry2,
    cry,
    book,
    shy,
    yt,
    yay,
  ];
  const tooltips = [
    "hello, 👋🥺",
    "Me when you",
    "Is there a tooltip on my head?!",
    "Happi, happi, happi",
    "Crying (a little)",
    "Leaving the world",
    "Crying (a lot)",
    "read !#$!$^@#5",
    "hiee, 🙈",
    "Me watching yet another X-men edit",
    "Yay?",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-container">
      <img src={images[currentImageIndex]} alt="logo" className="profile" />
      <div className="tooltip">{tooltips[currentImageIndex]}</div>
    </div>
  );
};

export default ImageRotate;
