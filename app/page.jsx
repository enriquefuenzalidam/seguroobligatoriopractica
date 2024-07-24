
import Link from 'next/link';
import Image from 'next/image';


import styled from 'styled-components';
import DynamicBackground from 'components/DynamicBackground';

import aliansabciseguros from 'public/images/aliansabciseguros.jpg';
import aliansamutualdesegurosdechile from 'public/images/aliansamutualdesegurosdechile.png';
import bannerexperiencia from 'public/images/bannerexperiencia.jpg';
import bannerseguridad from 'public/images/bannerseguridad.jpg';
import bannerconfianza from 'public/images/bannerconfianza.jpg';
import campagnasmayo from 'public/images/campagnasmayo.jpg';
import campagnasmarzo from 'public/images/campagnasmarzo.jpg';
import campagnasseptiembre from 'public/images/campagnasseptiembre.jpg';
import contactofondo from 'public/images/contactofondo.jpg';



export default function Page() {
    return (
        <main className="">
            <DynamicBackground>
                <div className=" max-w-screen-lg w-full mx-auto">
                    <h2 data-aos="fade-right" className=" mx-6 sm:mx-6 md:mx-6 lg:mx-3 text-white text-opacity-100 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase font-Poppins">Seguro Obligatorio</h2>
                    <p data-aos="fade-left" className=" mx-6 sm:mx-6 md:mx-6 lg:mx-3 mt-2 text-white text-md text-lg sm:text-lg md:text-xl lg:text-2xl">Experiencia en el mercado de seguros</p>
                    <p data-aos="fade-right" className=" mx-6 sm:mx-6 md:mx-6 lg:mx-3 mt-8"><Link className=" inline-block text-white text-sm uppercase border-solid border-2 rounded-full border-opacity-60 py-1 px-10" href="/precios">Compra aquí</Link></p>
                </div>
            </DynamicBackground>
            <section className=" w-full my-20 sm:my-20 md:my-24 lg:my-28 ">
                <div className=" max-w-screen-lg w-full mx-auto">
                    <p data-aos="fade-up" className=" text-gray-600 text-center text-lg sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-6 md:px-8 lg:px-8 leading-normal sm:leading-normal md:leading-relaxed lg:leading-relaxed ">
                        <span className=" uppercase font-bold font-Lato text-black">Seguro Obligatorio</span> es una empresa consolidada con más de 25 años en el mercado, que ofrece seguros obligatorios y seguros generales a particulares y empresas de todo el país. Mantenemos alianzas con las mejores compañías de seguros, lo que nos permite ofrecer el mejor precio a cada uno de nuestros clientes. Nuestros colaboradores brindan la asesoría para que las personas obtengan el Seguro más adecuado a sus necesidades.
                    </p>
                </div>
            </section>
            <section className=" max-w-screen-lg mx-auto w-full my-20 sm:my-20 md:my-24 lg:my-28 ">
                <h2 data-aos="fade-down" className=" text-center text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-Poppins font-light px-6 sm:px-6 md:px-8 lg:px-8 py-0">
                    Generando alianza con empresas reconocidas en el mercado</h2>
                <hr className=" block w-1/2 sm:w-1/2 md:w-sm lg:w-sm h-0.5 bg-[#E27905] border-none my-12 sm:my-12 md:my-14 lg:my-16 mx-auto py-0" />
                <p data-aos="fade-up" className=" text-gray-600  text-center text-lg sm:text-lg md:text-xl lg:text-2xl px-6 leading-normal sm:leading-normal md:leading-relaxed lg:leading-relaxed ">
                    Con el fin de ofrecerles a nuestros clientes seguridad y confianza, ofrecemos diversas alternativas de aseguradoras reconocidas en el mercado, para que nuestros clientes tengan acceso a variedad de precios y servicios.</p>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-4 md:gap-6 lg:gap-8 my-12">

                    <div className="  mt-32 flex justify-center sm:justify-center md:justify-end lg:justify-end">
                        <div data-aos="fade-down" className=" h-full text-center border-solid border-2 border-neutral-200 rounded-xl max-w-96 py-8 shadow-lg shadow-neutral-500">
                            <p data-aos="flip-right" className="-mt-32"><Image className="mx-auto" src={aliansamutualdesegurosdechile} alt=""/></p>
                            <h3 className=" font-bold text-lg sm:text-lg md:text-xl lg:text-xl px-6 uppercase font-Poppins  m-3 sm:m-3 md:m-6 lg:m-6">Mutual de Seguros</h3>
                            <p className=" font-normal text-sm sm:text-md md:text-lg lg:text-lg px-4 sm:px-4 md:px-6 lg:px-8">
                                Somos una Corporación de derecho privado, sin fines de lucro, que desde 1919 mantiene un lugar destacado en la industria aseguradora de vida en el país.</p>
                        </div>
                    </div>

                    <div className="  mt-32 flex justify-center sm:justify-center md:justify-start lg:justify-start">
                        <div data-aos="fade-down" className=" h-full text-center border-solid border-2 border-neutral-200 rounded-xl max-w-96 py-8 shadow-lg shadow-neutral-500">
                            <p data-aos="flip-right" className="-mt-32"><Image className="mx-auto" src={aliansabciseguros} alt=""/></p>
                            <h3 className=" font-bold text-lg sm:text-lg md:text-xl lg:text-xl px-6 uppercase font-Poppins m-3 sm:m-3 md:m-6 lg:m-6">BCI Seguros</h3>
                            <p className=" font-normal text-sm sm:text-md md:text-lg lg:text-lg px-4 sm:px-4 md:px-6 lg:px-8">
                                BCI Seguros, es una empresa para servir a personas y PYMES, basada en la innovación, calidad, excelencia, comprometidos y eficientes de Chile.</p>
                        </div>
                    </div>

                </div>

            </section>
            <section className=" max-w-screen-lg mx-auto w-full my-24 sm:my-24 md:my-24 lg:my-28 ">
                <div className=" grid cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-4 md:gap-0 lg:gap-0 mx-6 sm:mx-6 md:mx-3 lg:mx-0">
                    <div data-aos="flip-right" className="rounded-se-full rounded-es-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${bannerexperiencia.src})` }}>
                        <p className=" bg-black bg-opacity-30 py-10 text-center uppercase font-Poppins font-bold text-white text-3xl">Experiencia</p>
                    </div>
                    <div data-aos="flip-right" className="rounded-se-full rounded-es-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${bannerseguridad.src})` }}>
                        <p className=" bg-black bg-opacity-30 py-10 text-center uppercase font-Poppins font-bold text-white text-3xl">Seguridad</p>
                    </div>
                    <div data-aos="flip-right" className=" rounded-se-full rounded-es-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${bannerconfianza.src})` }}>
                        <p className=" bg-black bg-opacity-30 py-10 text-center uppercase font-Poppins font-bold text-white text-3xl">Confianza</p>
                    </div>
                </div>
            </section>
            <section className=" max-w-screen-lg mx-auto w-full my-24 sm:my-24 md:my-24 lg:my-28 ">
                <h2 data-aos="fade-down" className=" w-full mx-auto mb-6 text-3xl uppercase font-extrabold text-center">Campañas</h2>
                <p data-aos="fade-up" className=" w-full mx-auto font-bold text-center text-lg sm:text-lg md:text-xl lg:text-2xl px-6 leading-normal sm:leading-normal md:leading-relaxed lg:leading-relaxed">¿Quiere saber de nuestras campañas y propuestas para usted?</p>
                <p data-aos="fade-up" className=" w-full mx-auto text-gray-600  max-w-3xl text-center text-lg sm:text-lg md:text-xl lg:text-2xl px-6 leading-normal sm:leading-normal md:leading-relaxed lg:leading-relaxed">Nuestra experiencia, nos ha permitido llegar a más clientes, es por eso que hemos seleccionado para usted precios acordes a sus necesidades mediante campañas a lo largo del año.</p>
                <div className=" grid cols-1 mt-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-4 md:gap-6 lg:gap-8 mx-6 sm:mx-6 md:mx-3 lg:mx-0  ">

                    <div data-aos="fade-left" className="flex shadow-lg shadow-neutral-500 rounded-md border-2 border-solid border-black border-opacity-5  max-w-96 mx-auto">
                        <div className="uppercase text-center h-full w-full p-4 sm:p-4 md:p-3 lg:p-6">
                            <p><Image src={campagnasmarzo} alt="Campagna Mayo"/></p>
                            <h3 className="mt-6 mb-3 font-bold text-black text-xl font-Poppins">Marzo</h3>
                            <ul className="text-gray-600 text-sm sm:text-md md:text-lg lg:text-lg">
                                <li >Auto</li>
                                <li >Camioneta</li>
                                <li >Carro Arrastre</li>
                                <li >Casa Rodante</li>
                                <li >Minibus</li>
                                <li >Moto</li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="flex shadow-lg shadow-neutral-500 rounded-md border-2 border-solid border-black border-opacity-5  max-w-96 mx-auto">
                        <div className="uppercase text-center h-full w-full p-4 sm:p-4 md:p-3 lg:p-6">
                            <p><Image src={campagnasmayo} alt="Campagna Marzo"/></p>
                            <h3 className="mt-6 mb-3 font-bold text-black text-xl font-Poppins">Mayo</h3>
                            <ul className="text-gray-600 text-sm sm:text-md md:text-lg lg:text-lg">
                                <li >Taxi Básico</li>
                                <li >Taxi Colectivo</li>
                                <li >Taxi Ejecutivo</li>
                                <li >Mini Bus Escolar</li>
                                <li >Bus Particular</li>
                                <li >Bus Escolar</li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="flex shadow-lg shadow-neutral-500 rounded-md border-2 border-solid border-black border-opacity-5  max-w-96 mx-auto">
                        <div className="uppercase text-center h-full w-full p-4 sm:p-4 md:p-3 lg:p-6">
                            <p><Image src={campagnasseptiembre} alt="Campagna Septiembre"/></p>
                            <h3 className="mt-6 mb-3 font-bold text-black text-xl font-Poppins">Septiembre</h3>
                            <ul className="text-gray-600 text-sm sm:text-md md:text-lg lg:text-lg">
                                <li >Camión</li>
                                <li >Tracto Camión</li>
                                <li >Semiremolque</li>
                                <li >Máquina Industrial</li>
                            </ul>
                        </div>
                        </div>
                </div>
            </section>
            <section className="w-full shadow-inner shadow-black bg-cover bg-left bg-repeat-x" style={{ backgroundImage: `url(${contactofondo.src})` }}>
                <div className=" bg-black bg-opacity-30 w-full py-12 px-4">
                    <h3 data-aos="fade-down" className=" w-full mx-auto text-white mb-6 text-3xl uppercase font-bold  text-opacity-80 text-center">Contacto</h3>
                    <p data-aos="fade-up" className=" w-full mx-auto text-white max-w-3xl mb-6 text-opacity-80 text-center text-lg sm:text-lg md:text-xl lg:text-2xl px-6 leading-normal ">Necesitas cotizar tu Seguro Obligatorio. Déjanos tu mensaje y uno de nuestros representantes te contactará a la brevedad.</p>
                    <form data-aos-once="true" data-aos="fade-up" className="py-8 mx-auto w-full max-w-3xl bg-white p-4 rounded-xl shadow-lg shadow-black" method="post" >
                        <p className="">
                            <label className=" block text-base " htmlFor="nombre">Nombre</label>
                            <input className=" block w-full border-2 border-solid border-gray-300 p-2 bg-white" type="text" id="nombre" name="nombre" />
                        </p>
                        <p className="mt-8">
                            <label className=" block text-base" htmlFor="correo">Correo electrónico</label>
                            <input className=" block w-full border-2 border-solid border-gray-300 p-2 bg-white" type="email" id="correo" name="correo" />
                        </p>
                        <p className="mt-8">
                            <label className=" block text-base" htmlFor="telefono">Teléfono</label>
                            <input className=" block w-full border-2 border-solid border-gray-300 p-2 bg-white" type="tel" id="telefono" name="telefono" />
                        </p>
                        <p className="mt-8">
                            <label className=" block text-base" htmlFor="consultaTipo">Motivo de la consulta</label>
                            <select className=" block w-full border-2 border-solid border-gray-300 p-2 bg-white appearance-none bg-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiNiYmIiPjxwYXRoIGQ9Ik02IDlsNiA2IDYtNiIvPjwvc3ZnPg==)] bg-no-repeat bg-right " id="consultaTipo" name="consultaTipo" >
                                <option className="uppercase" value="Seleccione...">Seleccione...</option>
                                <option className="uppercase" value="Cotización de seguro obligatorio">Cotización de seguro obligatorio</option>
                                <option className="uppercase" value="Cotización de seguro general">Cotización de seguro general</option>
                                <option className="uppercase" value="Duplicado">Duplicado</option>
                                <option className="uppercase" value="Quiero vender">Quiero vender</option>
                            </select>
                        </p>
                        <p className="mt-8">
                            <label className=" block text-base" htmlFor="asunto">Asunto</label>
                            <input className=" block w-full border-2 border-solid border-gray-300 p-2 bg-white" type="text" id="asunto" name="asunto" />
                        </p>
                        <p className="mt-8">
                            <label className=" block text-base" htmlFor="mensaje">Mensaje</label>
                            <textarea className=" text-base block w-full border-2 border-solid border-gray-300 p-2 bg-white appearance-none" ype="text" id="mensaje" name="mensaje" rows="10"></textarea>
                        </p>
                        <p className="mt-8">
                            <input className=" cursor-pointer px-6 py-2 font-bold text-black uppercase text-center inline-block bg-gray-200 hover:bg-gray-300 transition-all ease duration-300" type="submit" id="enviar" name="enviar" value="Enviar" />
                        </p>
                    </form>
                </div>
            </section>
        </main>
    );
}


