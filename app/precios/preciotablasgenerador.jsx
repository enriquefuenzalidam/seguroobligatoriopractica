import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Preciotablasgenerador = ({ precioTablas }) => {
  return (
    <>
      {precioTablas.map((tabla, index) => (
        <div key={index} className=" my-20 mx-6">
          <h3 data-aos="flip-down" className="bg-sky-600 text-white text-center text-xl sm:text-xl md:text-2xl lg:text-2xl py-3 sm:py-3 md:py-4 lg:py-6 mb-6 font-bold uppercase mask-image-url mask-repeat-no mask-size-cover mask-position-center">{tabla.mes}</h3>
          <div className={` mx-auto  ${(tabla.seguros.length > 1) ? ' inline-grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2': 'grid grid-cols-1' } gap-10 justify-center `}>
            {tabla.seguros.map((seguro, seguroIndex) => (
              <div data-aos="fade-up" key={seguroIndex} className={` flex flex-col h-full w-full max-w-96 mx-auto border-solid border-2 border-neutral-100 rounded-md py-6 shadow-lg shadow-neutral-500 `}>
                <h4 className=" w-full aspect-h-1 aspect-w-4"><Image className="mx-auto w-auto h-4/5 object-center" src={seguro.nombre} alt="preciosBCISeguros" /></h4>
                <dl className=" w-full grid grid-cols-8 py-6 px-8">
                  <dt className="inline-block col-span-5 py-2 text-[#E27905] font-extrabold text-left text-lg">Tipo de vehículos</dt>
                  <dt className="inline-block col-span-3 py-2 text-[#E27905] font-extrabold text-left text-lg">Precio</dt>
                  {seguro.precios.map((precio, precioIndex) => (
                    <React.Fragment key={precioIndex}>
                      <dt className="inline-block col-span-5 py-2 text-gray-600 text-left text-md">{precio.vehiculoTipo}</dt>
                      <dd className="inline-block col-span-3 py-2 text-gray-600 text-left text-md">$ {precio.precio}</dd>
                    </React.Fragment>
                  ))}
                </dl>
                <p className="flex flex-grow w-full items-end justify-center"><Link className=" inline-block px-4 py-2 bg-transparent hover:bg-sky-600 font-bold uppercase border-2 border-solid text-sky-600 hover:text-white border-sky-600 transition-all ease-linear duration-200" href={seguro.compra} alt="">Comprar</Link></p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Preciotablasgenerador;
