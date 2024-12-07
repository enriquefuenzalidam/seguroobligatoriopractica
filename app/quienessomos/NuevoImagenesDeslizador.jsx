"use client";
import React, { useState, useEffect } from 'react';

import autoaccidenteUno from '/public/images/autoaccidenteUno.jpg';
import autoaccidenteDos from '/public/images/autoaccidenteDos.jpg';
import autoaccidenteTres from '/public/images/autoaccidenteTres.jpg';


const deslizadosImagenes = [
  autoaccidenteUno,
  autoaccidenteDos,
  autoaccidenteTres
];

const NuevoImagenesDeslizador = ({ }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate previous and next indices dynamically
  const totalImages = deslizadosImagenes.length;
  const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
  const nextIndex = (currentIndex + 1) % totalImages;

  useEffect(() => {
    // Change immediately after a short duration for the first image
    const firstTimeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % deslizadosImagenes.length);
  
      // Start regular interval for subsequent changes
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % deslizadosImagenes.length);
      }, 3600);
  
      return () => clearInterval(interval); // Clear interval on cleanup
    }, 900); // Short duration for the first transition (e.g., 1 second)
  
    return () => clearTimeout(firstTimeout); // Clear timeout on cleanup
  }, []);

  return (
    <>

      <div data-aos-once="true" data-aos="fade-down" className={` relative bg-white h-72 overflow-hidden float-none sm:float-none md:float-right lg:float-right w-3/5 sm:w-3/5 md:w-2/5 lg:w-2/5 -mb-10 sm:-mb-10 md:my-20 lg:my-20 mx-auto sm:mx-auto md:mx-6 lg:mx-6 `}>

        {!!deslizadosImagenes && (
            deslizadosImagenes.map((imagensrc, index) => (
              <img key={index}
              className={` absolute object-center object-cover w-full h-full transition-all
                ${ index === currentIndex ? ' opacity-100 scale-125 ease-in-out duration-[2.4s]'
                  : index === prevIndex 
                  ? 'opacity-0 scale-150 ease-in-out duration-[1.5s]'
                  : 'opacity-0 scale-100 '  } `} src={imagensrc.src} alt='' />
            ))
        )}

      </div>
    </>
  );
};

export default NuevoImagenesDeslizador;
