"use client";
import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import sociossabiasqueUno from 'public/images/sociossabiasqueUno.jpg';
import sociossabiasqueDos from 'public/images/sociossabiasqueDos.jpg';
import sociossabiasqueTres from 'public/images/sociossabiasqueTres.jpg';
import sociossabiasqueCuatro from 'public/images/sociossabiasqueCuatro.jpg';

const images = [
  { src: sociossabiasqueUno, alt: 'sociossabiasqueUno' },
  { src: sociossabiasqueDos, alt: 'sociossabiasqueDos' },
  { src: sociossabiasqueTres, alt: 'sociossabiasqueTres' },
  { src: sociossabiasqueCuatro, alt: 'sociossabiasqueCuatro' }
];

const zoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

const GlobalStyle = createGlobalStyle`
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 1s ease-in-out;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${zoomIn} 10s forwards;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const preloadImages = (imageArray) => {
  imageArray.forEach((image) => {
    const img = new window.Image();
    img.src = image.src.src;
  });
};

const ImageSlider = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    preloadImages(images);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex];

  return (
    <>
      <GlobalStyle />
      <ImageContainer data-aos-once="true" data-aos="fade-left" className=" bg-white h-72 overflow-hidden float-none sm:float-none md:float-right lg:float-right w-3/5 sm:w-3/5 md:w-2/5 lg:w-2/5 -mb-10 sm:-mb-10 md:my-20 lg:my-20 mx-auto sm:mx-auto md:mx-6 lg:mx-6">
        <TransitionGroup>
          <CSSTransition key={currentImageIndex} timeout={1000} classNames="fade">
            <ImageWrapper>
              <img
                className="w-full h-full block object-cover"
                src={currentImage.src.src}
                alt={currentImage.alt}
                layout="fill"
              />
            </ImageWrapper>
          </CSSTransition>
        </TransitionGroup>
        {children}
      </ImageContainer>
    </>
  );
};

export default ImageSlider;
