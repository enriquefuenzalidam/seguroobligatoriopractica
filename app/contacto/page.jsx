"use client";
import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';

import contactofondo from '/public/images/contactofondo.jpg';

export default function Quienessomos() {
    /*
    const [state, handleSubmit] = useForm("mldrnqzn");
    if (state.succeeded) {
        return (

            <main className=" bg-cover bg-left-top shadow-[rgba(0,0,0,0.6)] shadow-lg" style={{ backgroundImage: `url(${contactofondo.src})` }}>
                <section className="bg-black bg-opacity-30 mt-16 sm:mt-16 md:mt-16 lg:mt-24">
                    <div className=" w-full mx-auto pt-48 pb-20 ">
                        <h2 data-aos-once="true" data-aos="fade-down" className=" max-w-screen-lg mx-auto text-center text-white text-opacity-100 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase font-Poppins">Contacto</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className=" max-w-screen-lg block w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 h-0.5 bg-[#E27905] mt-12 sm:mt-12 md:mt-14 lg:mt-16 mx-auto py-0 border-none " />
                    </div>
                </section>
                <section className={` bg-black bg-opacity-30 pb-0 sm:pb-0 md:pb-20 lg:pb-20 w-full `}>
                    <p className={` text-center text-2xl font-bold py-8 mx-auto w-full max-w-3xl bg-[#b79a76] p-4 bg-opacity-70 md:rounded-xl md:shadow-lg md:shadow-black lg:rounded-xl lg:shadow-lg lg:shadow-black `}>
                        Gracias por su mensaje.
                    </p>
                </section>

            </main>
        );
    } */
    return (
        <main className=" bg-cover bg-left-top " style={{ backgroundImage: `url(${contactofondo.src})` }}>
            <section className="bg-black bg-opacity-30 mt-16 sm:mt-16 md:mt-16 lg:mt-24">
                <div className=" w-full mx-auto py-48">
                    <h2 data-aos-once="true" data-aos="fade-down" className=" max-w-screen-lg mx-auto text-center text-white text-opacity-100 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase font-Poppins">Contacto</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className=" max-w-screen-lg block w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 h-0.5 bg-[#E27905] mt-12 sm:mt-12 md:mt-14 lg:mt-16 mx-auto py-0 border-none " />
                </div>
            </section>
            {/*
            <section className=" w-full my-0 sm:my-0 md:my-0 lg:my-28 ">
                <div className=" max-w-screen-lg w-full mx-auto aspect-w-16 aspect-h-9 ">
                    <iframe data-aos="fade-down" className="w-full h-full  " src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6688.334300471738!2d-71.602486!3d-33.052066!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e0c2244c3e03%3A0x7e05ab00cee04df2!2sAv.%20Col%C3%B3n%203992%2C%20Valpara%C3%ADso!5e0!3m2!1ses-419!2scl!4v1721815658147!5m2!1ses-419!2scl"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            */}
            <section className="bg-black bg-opacity-30 pb-0 sm:pb-0 md:pb-12 lg:pb-12 w-full">
                    <form data-aos="fade-up" data-aos-once="true" className={` py-8 mx-auto w-full max-w-3xl bg-[#b79a76] p-4 bg-opacity-70 md:rounded-xl md:shadow-lg md:shadow-black lg:rounded-xl lg:shadow-lg lg:shadow-black `}
                    acceptCharset="utf-8" action="https://formspree.io/f/mldrnqzn" method="post"
                     > {/* onSubmit={handleSubmit} */}
                        <p className="">
                            <label className=" block text-base font-bold" htmlFor="nombre">Nombre</label>
                            <input className=" block w-full border-2 border-solid border-gray-300 p-2 bg-white" type="text" id="nombre" name="nombre" />
                        </p>
                        <p className="mt-8">
                            <label className=" block text-base font-bold" htmlFor="correo">Correo electrónico</label>
                            <input className=" block w-full border-2 border-solid border-gray-300 p-2 bg-white bg-opacity-70" type="email" id="correo" name="correo" />
                        </p>
                        <p className="mt-8">
                            <label className=" block text-base font-bold" htmlFor="telefono">Teléfono</label>
                            <input className=" block w-full border-2 border-solid border-gray-300 p-2 bg-white bg-opacity-70" type="tel" id="telefono" name="telefono" />
                        </p>
                        <p className="mt-8">
                            <label className=" block text-base font-bold" htmlFor="consultaTipo">Motivo de la consulta</label>
                            <select className=" block w-full border-2 border-solid border-gray-300 p-2 bg-white bg-opacity-70 appearance-none bg-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiNiYmIiPjxwYXRoIGQ9Ik02IDlsNiA2IDYtNiIvPjwvc3ZnPg==)] bg-no-repeat bg-right " id="consultaTipo" name="consultaTipo" >
                                <option className="uppercase" value="Seleccione...">Seleccione...</option>
                                <option className="uppercase" value="Cotización de seguro obligatorio">Cotización de seguro obligatorio</option>
                                <option className="uppercase" value="Cotización de seguro general">Cotización de seguro general</option>
                                <option className="uppercase" value="Duplicado">Duplicado</option>
                                <option className="uppercase" value="Quiero vender">Quiero vender</option>
                            </select>
                        </p>
                        <p className="mt-8">
                            <label className=" block text-base font-bold" htmlFor="asunto">Asunto</label>
                            <input className=" block w-full border-2 border-solid border-gray-300 p-2 bg-white bg-opacity-70" type="text" id="asunto" name="asunto" />
                        </p>
                        <p className="mt-8">
                            <label className=" block text-base font-bold" htmlFor="mensaje">Mensaje</label>
                            <textarea className=" text-base block w-full border-2 border-solid border-gray-300 p-2 bg-white bg-opacity-70 appearance-none" ype="text" id="mensaje" name="mensaje" rows="10"></textarea>
                        </p>
                        <p className="mt-8">
                            <input className=" cursor-pointer px-6 py-2 font-bold text-black uppercase text-center inline-block bg-gray-200 hover:bg-gray-300 transition-all ease duration-300" type="submit" id="enviar" name="enviar" value="Enviar" 
                            /> {/* disabled={state.submitting} */}
                        </p>
                    </form>
            </section>

        </main>
    );
}


