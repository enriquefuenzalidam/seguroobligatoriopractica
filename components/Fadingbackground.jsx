"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import { PRECIO } from '@/lib/urls';

import coverBgImageUno from '/public/images/coverBgImageUno.jpg';
import coverBgImageDos from '/public/images/coverBgImageDos.jpg';
import coverBgImageTres from '/public/images/coverBgImageTres.jpg';
import coverBgImageCuatro from '/public/images/coverBgImageCuatro.jpg';
import coverBgImageCinco from '/public/images/coverBgImageCinco.jpg';
import coverBgImageSeis from '/public/images/coverBgImageSeis.jpg';
import coverBgImageSiete from '/public/images/coverBgImageSiete.jpg';
import coverBgImageOcho from '/public/images/coverBgImageOcho.jpg';
import coverBgImageNueve from '/public/images/coverBgImageNueve.jpg';
import coverBgImageDiez from '/public/images/coverBgImageDiez.jpg';


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

const Fadingbackground = ({ }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate previous and next indices dynamically
  const totalImages = coverBgImages.length;
  const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
  const nextIndex = (currentIndex + 1) % totalImages;

  useEffect(() => {
    // Change immediately after a short duration for the first image
    const firstTimeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % coverBgImages.length);
  
      // Start regular interval for subsequent changes
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % coverBgImages.length);
      }, 5300);
  
      return () => clearInterval(interval); // Clear interval on cleanup
    }, 900); // Short duration for the first transition (e.g., 1 second)
  
    return () => clearTimeout(firstTimeout); // Clear timeout on cleanup
  }, []);

  return (
    <>

      <section data-aos-once="true" data-aos="fade" className={` relative mt-16 lg:mt-24 overflow-hidden shadow-[0_0.5rem_2rem_0.3rem_rgba(0,0,0,0.6)] `}>

        {!!coverBgImages && (
            coverBgImages.map((bgImg, index) => (
              <img key={index}
              className={` absolute object-center object-cover w-full h-full transition-all
                ${ index === currentIndex ? ' opacity-100 scale-125 ease-in-out duration-[5.3s]'
                  : index === prevIndex 
                  ? 'opacity-0 scale-150 ease-in-out duration-[3.8s]'
                  : 'opacity-0 scale-100 '  } `} src={bgImg.src} alt='' />
            ))
        )}

        <div className={` absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 `} />

        <div className={` relative w-full h-[calc(100vh-8rem)] lg:h-[calc(100vh-12rem)] flex items-center `}>
          <div className=" max-w-screen-lg w-full mx-auto ">
            <h2 data-aos-once="true" data-aos="fade-up" className=" mx-6 sm:mx-6 md:mx-6 lg:mx-3 text-white text-opacity-100 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase font-Poppins">Seguro Obligatorio</h2>
            <p data-aos-once="true" data-aos="fade-up" className=" mx-6 sm:mx-6 md:mx-6 lg:mx-3 mt-2 text-white text-md text-lg sm:text-lg md:text-xl lg:text-2xl">Experiencia en el mercado de seguros</p>
            <p data-aos-once="true" data-aos="fade-up" className=" mx-6 sm:mx-6 md:mx-6 lg:mx-3  "><Link className=" inline-block text-white text-sm uppercase border-solid border-2 rounded-full border-opacity-60 py-1 px-10 hover:border-4 mt-8 hover:mt-7 hover:font-extrabold transition-all duration-300" href={PRECIO}>Compra aquí</Link></p>
          </div>
        </div>

      </section>
    </>
  );
};

export default Fadingbackground;
