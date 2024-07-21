"use client";
import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

import coverBgImageUno from 'public/images/coverBgImageUno.jpg';
import coverBgImageDos from 'public/images/coverBgImageDos.jpg';
import coverBgImageTres from 'public/images/coverBgImageTres.jpg';
import coverBgImageCuatro from 'public/images/coverBgImageCuatro.jpg';
import coverBgImageCinco from 'public/images/coverBgImageCinco.jpg';
import coverBgImageSeis from 'public/images/coverBgImageSeis.jpg';
import coverBgImageSiete from 'public/images/coverBgImageSiete.jpg';
import coverBgImageOcho from 'public/images/coverBgImageOcho.jpg';
import coverBgImageNueve from 'public/images/coverBgImageNueve.jpg';
import coverBgImageDiez from 'public/images/coverBgImageDiez.jpg';

const coverBgImages = [
  coverBgImageUno,
  coverBgImageDos,
  coverBgImageTres,
  coverBgImageCuatro,
  coverBgImageCinco,
  coverBgImageSeis,
  coverBgImageSiete,
  coverBgImageOcho,
  coverBgImageNueve,
  coverBgImageDiez,
];

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const zoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.6);
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

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${fadeIn} 987ms ease-in-out, ${zoomIn} 28657ms forwards; 
`;


const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
`;

const preloadImages = (imageArray) => {
  imageArray.forEach((image) => {
    const img = new Image();
    img.src = image.src;
  });
};

const DynamicBackground = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    preloadImages(coverBgImages);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % coverBgImages.length);
    }, 4181); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentImage = coverBgImages[currentImageIndex];

  return (
    <>
      <GlobalStyle />
      <BackgroundContainer className="mt-16 sm:mt-16 md:mt-16 lg:mt-24 ">
        <TransitionGroup>
          <CSSTransition key={currentImageIndex} timeout={1000} classNames="fade">
            <Background style={{ backgroundImage: `url(${currentImage.src})` }} />
          </CSSTransition>
        </TransitionGroup>
        <Content className=" bg-black bg-opacity-30 py-40 ">
          {children}
        </Content>
      </BackgroundContainer>
    </>
  );
};

export default DynamicBackground;
