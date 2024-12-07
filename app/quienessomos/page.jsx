



import bannerexperiencia from '/public/images/bannerexperiencia.jpg';
import misionvision from '/public/images/misionvision.png';

import NuevoImagenesDeslizador from './NuevoImagenesDeslizador';

export const metadata = {
    title: 'Quiénes Somos'
}
  

export default function quienessomos() {
    return (
        <main className="">
            <section className="mt-16 sm:mt-16 md:mt-16 lg:mt-24 bg-cover bg-center shadow-[rgba(0,0,0,0.6)] shadow-lg" style={{ backgroundImage: `url(${bannerexperiencia.src})` }}>
                <div className=" bg-black bg-opacity-30 w-full mx-auto py-48">
                    <h2 data-aos-once="true" data-aos="fade-down" className=" max-w-screen-lg mx-auto text-center text-white text-opacity-100 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase font-Poppins">Quienes Somos</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className=" max-w-screen-lg block w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 h-0.5 bg-[#E27905] mt-12 sm:mt-12 md:mt-14 lg:mt-16 mx-auto py-0 border-none " />
                </div>
            </section>
            <section className=" w-full my-20 sm:my-20 md:my-24 lg:my-28 ">
                <div className=" max-w-screen-lg w-full mx-auto">
                    <p className="text-justify indent-5 hyphens-auto text-gray-600 text-lg sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-6 md:px-8 lg:px-8 leading-normal sm:leading-normal md:leading-relaxed lg:leading-relaxed ">
                        Somos una empresa de larga trayectoria en el Mercado de Seguros, concentrándonos principalmente en la V Región, otorgando un excelente servicio en atención al cliente, asesorándolos y contando con un equipo altamente capacitado con el objetivo de que nuestros clientes se sientan seguros al momento de optar por nuestros servicios.
                    </p>
                    <p data-aos-once="true" data-aos="fade-up" className=" text-justify indent-5 hyphens-auto  text-gray-600 text-lg sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-6 md:px-8 lg:px-8 leading-normal sm:leading-normal md:leading-relaxed lg:leading-relaxed mt-4 sm:mt-4 md:mt-8 lg:mt-10 ">
                        Además, le brindamos al cliente una variedad de alternativas para pagar, ya sea directamente por nuestra página web, facilitando mayor acceso económico, o a través de nuestros locales comerciales, de acuerdo con las necesidades de nuestros clientes.
                    </p>
                </div>
            </section>

            <section className=" my-24 sm:my-24 md:my-24 lg:my-28 ">
                <div className=" max-w-screen-lg mx-auto w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 sm:gap-20 md:gap-6 lg:gap-6">
                    <div className=" flex flex-col items-start text-left mx-6 sm:mx-6 md:ml-6 lg:ml-6">
                        <h2 data-aos-once="true" data-aos="fade-down" className=" inline-block border-b-4 boder-solid border-[#E27905] pb-2 mb-4 text-xl sm:text-xl md:text-2xl lg:text-2xl uppercase font-bold">Misión</h2>
                        <p data-aos-once="true" data-aos="fade-down" className=" mb-2 uppercase font-bold text-lg sm:text-lg md:text-lg lg:text-xl leading-normal sm:leading-normal md:leading-relaxed lg:leading-relaxed">“Siempre preocupados por satisfacer sus necesidades”</p>
                        <p data-aos-once="true" data-aos="fade-down" className="  text-gray-600 text-lg sm:text-lg md:text-lg lg:text-xl leading-normal sm:leading-normal md:leading-relaxed lg:leading-relaxed">Nuestra misión es ofrecer a nuestros clientes y nuestros socios, confianza mediante soluciones rápidas, servicio de calidad, y alternativas en precios.</p>
                        <h2 data-aos-once="true" data-aos="fade-down" className=" inline-block border-b-4 boder-solid border-[#E27905] pb-2 mt-8 mb-4 text-xl sm:text-xl md:text-2xl lg:text-2xl uppercase font-bold">Visión</h2>
                        <p data-aos-once="true" data-aos="fade-down" className="  text-gray-600 text-lg sm:text-lg md:text-lg lg:text-xl leading-normal sm:leading-normal md:leading-relaxed lg:leading-relaxed">Nuestra visión es continuar extendiéndonos en el mercado de las aseguradoras, generando y fortaleciendo alianzas con nuestros socios, y continuar consolidando nuestro compromiso para nuestros clientes otorgando seguridad, confianza y precios accesibles.</p>
                    </div>
                    <div className=" flex items-center justify-center mx-4 sm:mx-4 md:mx-0 lg:mx-0">
                        <img data-aos-once="true" data-aos="fade-down" className=" w-10/12 sm:w-10/12 md:w-full lg:w-full" src={misionvision.src} alt="misionvision" />
                    </div>
                </div>
            </section>
            
            <section className=" max-w-screen-lg mx-auto my-24 sm:my-24 md:my-24 lg:my-28 ">
                <NuevoImagenesDeslizador/>
                <div className=" w-11/12 sm:w-11/12 md:w-2/3 lg:w-2/3 bg-[#F68F2A] pt-20 sm:pt-20 pb-12 sm:pb-12 md:py-12 lg:py-12 mx-auto sm:mx-auto md:mx-8 lg:mx-8">
                    <div data-aos-once="true" data-aos="fade-down" className=" mx-6 sm:mx-6 md:ml-6 lg:ml-6 text-white ">
                        <h2 className="  mb-4 text-xl sm:text-xl md:text-2xl lg:text-2xl uppercase font-extrabold">¿Sabía que…</h2>
                        <p className=" mb-4 text-lg sm:text-lg md:text-lg lg:text-xl leading-normal text-justify indent-5 hyphens-auto  ">La importancia de contar con el Seguro Obligatorio SOAP se basa en dos principales aspectos: la obligación legal de tener contratada esta póliza y el respaldo económico que significa en caso de sufrir un accidente vial con daños personales.</p>
                        <p className=" mb-4 text-lg sm:text-lg md:text-lg lg:text-xl leading-normal text-justify indent-5 hyphens-auto  ">Podrás recibir una indemnización en caso de que tu vehículo se vea involucrado en un siniestro en el que hayan resultado personas lesionadas o fallecidas y te evitará la aplicación de multas en caso de ser fiscalizado por Carabineros.</p>
                        <p className=" text-lg sm:text-lg md:text-lg lg:text-xl leading-normal indent-5 hyphens-auto  ">Fuente: HDI Seguros</p>
                    </div>
                </div>
            </section>
            <section className=" max-w-screen-lg mx-auto my-24 sm:my-24 md:my-24 lg:my-28 ">
                <div className="w-full aspect-w-16 aspect-h-9">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/uN1M-X-PAeA?si=ea780JsDMworhivB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </section>

            <section className=" max-w-screen-lg mx-auto my-24 sm:my-24 md:my-24 lg:my-28 ">
                <h3 className="mx-8 inline-block border-b-4 boder-solid border-[#E27905] pb-4 mb-4 text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold font-Poppins">Preguntas frecuentes SOAP</h3>
                <h4 className="mx-8 mt-4 sm:mt-4 md:mt-5 lg:mt-6 font-bold text-lg sm:text-lg md:text-lg lg:text-xl text-[#E27905]">¿Qué es el Seguro Obligatorio de Accidentes Personales (SOAP)?</h4>
                <p className="mx-8 mt-2 sm:mt-2 md:mt-3 lg:mt-4 font-normal text-lg sm:text-lg md:text-lg lg:text-xl text-gray-600 text-justify indent-5 hyphens-auto ">El Seguro Obligatorio de Accidentes Personales (SOAP) es un seguro exigido por Ley para transitar por las vías públicas del territorio nacional, que debe ser contratado por todo propietario de un vehículo motorizado, remolque, acoplados, casas rodantes u otros similares, al momento de adquirir su Permiso de Circulación.</p>
                <h4 className="mx-8 mt-4 sm:mt-4 md:mt-5 lg:mt-6 font-bold text-lg sm:text-lg md:text-lg lg:text-xl text-[#E27905] ">¿Qué cubre el SOAP?</h4>
                <p className="mx-8 mt-2 sm:mt-2 md:mt-3 lg:mt-4 font-normal text-lg sm:text-lg md:text-lg lg:text-xl text-gray-600 text-justify indent-5 hyphens-auto ">El SOAP otorga cobertura en caso de muerte y lesiones corporales que sean consecuencia directa de accidentes en los cuales intervenga el vehículo asegurado.</p>
                <p className="mx-8 mt-2 sm:mt-2 md:mt-3 lg:mt-4 font-normal text-lg sm:text-lg md:text-lg lg:text-xl text-gray-600 text-justify indent-5 hyphens-auto ">También cubre los gastos médicos relativos a la atención pre hospitalaria y el transporte sanitario, la hospitalización, la atención médica, quirúrgica, dental, prótesis, implantes, los gastos farmacéuticos y de rehabilitación de las víctimas.</p>
                <h4 className="mx-8 mt-4 sm:mt-4 md:mt-5 lg:mt-6 font-bold text-lg sm:text-lg md:text-lg lg:text-xl text-[#E27905]">¿Qué se debe hacer en caso de accidente?</h4>
                <p className="mx-8 mt-2 sm:mt-2 md:mt-3 lg:mt-4 font-normal text-lg sm:text-lg md:text-lg lg:text-xl text-gray-600 text-justify indent-5 hyphens-auto ">1.— Concurrir a un Servicio de Urgencia para ser atendido por sus lesiones físicas (conductor, pasajero, peatón, ciclista, motorista), especificando que es un accidente de tránsito.</p>
                <p className="mx-8 mt-2 sm:mt-2 md:mt-3 lg:mt-4 font-normal text-lg sm:text-lg md:text-lg lg:text-xl text-gray-600 text-justify indent-5 hyphens-auto ">2.— Realizar la denuncia en Carabineros de Chile. Para ello, debe conocer la patente del vehículo, ya que sin este dato no será posible identificar el vehículo involucrado.</p>
                <p className="mx-8 mt-2 sm:mt-2 md:mt-3 lg:mt-4 font-normal text-lg sm:text-lg md:text-lg lg:text-xl text-gray-600 text-justify indent-5 hyphens-auto ">3.— Solicitar certificado otorgado por el Tribunal competente o el Ministerio Público, en el cual se consignen los datos del accidente de tránsito, de acuerdo al parte enviado al tribunal competente.</p>
                <p className="mx-8 mt-2 sm:mt-2 md:mt-3 lg:mt-4 font-normal text-lg sm:text-lg md:text-lg lg:text-xl text-gray-600 text-justify indent-5 hyphens-auto ">4.— Denunciar el siniestro ante la compañía de seguros.</p>
                <p className="mx-8 mt-2 sm:mt-2 md:mt-3 lg:mt-4 font-normal text-lg sm:text-lg md:text-lg lg:text-xl text-gray-600 text-justify indent-5 hyphens-auto ">5.— Guardar todas las boletas de los gastos médicos que haya incurrido y todos los certificados médicos que tenga a raíz del accidente. Éstos, junto con el certificado de accidente, deberán ser presentados a la aseguradora para el reembolso de los gastos médicos.</p>
                <h4 className="mx-8 mt-4 sm:mt-4 md:mt-5 lg:mt-6 font-bold text-lg sm:text-lg md:text-lg lg:text-xl text-[#E27905] ">¿Cuál es el plazo para reclamar el pago de las indemnizaciones cubiertas por el SOAP?</h4>
                <p className="mx-8 mt-2 sm:mt-2 md:mt-3 lg:mt-4 font-normal text-lg sm:text-lg md:text-lg lg:text-xl text-gray-600 text-justify indent-5 hyphens-auto ">En general, el plazo es de un año contado desde la fecha en que ocurrió el accidente o a partir de la muerte del accidentado, según sea el caso.</p>
                <p className="mx-8 mt-2 sm:mt-2 md:mt-3 lg:mt-4 font-normal text-lg sm:text-lg md:text-lg lg:text-xl text-gray-600 text-justify indent-5 hyphens-auto ">En caso de incapacidad permanente, el plazo es de un año desde la fecha de emisión del certificado médico, el cual no podrá presentarse luego de dos años desde la el cual no podrá presentarse luego de dos años desde la fecha del accidente.</p>
            </section>
        </main>
    );
}


