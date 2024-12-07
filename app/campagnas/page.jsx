
import Link from 'next/link';



import campagnasCover from '/public/images/campagnasCover.jpg';
import sociossabiasqueCuatro from '/public/images/sociossabiasqueCuatro.jpg';
import coverBgImageNueve from '/public/images/coverBgImageNueve.jpg';
import campagnaSeptiembre from '/public/images/campagnaSeptiembre.jpg';


export const metadata = {
    title: 'Campañas'
}
  

export default function quienessomos() {
    return (
        <main className="">
            <section className="mt-16 sm:mt-16 md:mt-16 lg:mt-24 bg-cover bg-center shadow-[rgba(0,0,0,0.6)] shadow-lg" style={{ backgroundImage: `url(${campagnasCover.src})` }}>
                <div className=" bg-black bg-opacity-30 w-full mx-auto py-48">
                    <h2 data-aos-once="true" data-aos="fade-down" className=" max-w-screen-lg mx-auto text-center text-white text-opacity-100 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase font-Poppins">Campañas</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className=" max-w-screen-lg block w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 h-0.5 bg-[#E27905] mt-12 sm:mt-12 md:mt-14 lg:mt-16 mx-auto py-0 border-none " />
                </div>
            </section>
            <section className=" max-w-screen-lg mx-auto w-full my-20 sm:my-20 md:my-24 lg:my-28 ">
                <h2 className=" text-center text-xl sm:text-xl md:text-2xl lg:text-2xl font-Poppins font-bold px-6 sm:px-6 md:px-8 lg:px-8 py-0">
                ¿Quiere saber de nuestras campañas propuestas para usted?</h2>
                <hr data-aos-once="true" data-aos="flip-left" className=" block w-1/2 sm:w-1/2 md:w-sm lg:w-sm h-0.5 bg-[#E27905] border-none my-12 sm:my-12 md:my-14 lg:my-16 mx-auto py-0" />
                <p data-aos-once="true" data-aos="fade-up" className="mx-auto max-w-3xl text-gray-600  text-center text-lg sm:text-lg md:text-xl lg:text-2xl px-6 leading-normal sm:leading-normal md:leading-relaxed lg:leading-relaxed ">
                Nuestra experiencia, nos ha permitido llegar a más clientes, es por eso que hemos seleccionado para usted precios acordes a sus necesidades mediante campañas a lo largo del año.</p>
            </section>
            <section className=" w-full my-20 sm:my-20 md:my-24 lg:my-28 ">

                    <div className=" max-w-screen-lg w-full mx-auto text-center">
                        <h3 className="mx-8 text-[#1E73BE] uppercase text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-Poppins tracking-[.25em]">Marzo</h3>
                        <p className="italic text-md sm:text-md md:text-lg lg:text-lg">Trasporte privado</p>
                    </div>
                    <div className=" max-w-screen-lg w-full mx-auto mt-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div>
                            <p data-aos-once="true" data-aos="slide-left" className="text-left my-4 bg-[#1E73BE] p-3 text-white text-lg sm:text-lg md:text-xl lg:text-2xl">Autos</p>
                            <p data-aos-once="true" data-aos="slide-left" className="text-left my-4 bg-[#1E73BE] p-3 text-white text-lg sm:text-lg md:text-xl lg:text-2xl">Camionetas</p>
                            <p data-aos-once="true" data-aos="slide-left" className="text-left my-4 bg-[#1E73BE] p-3 text-white text-lg sm:text-lg md:text-xl lg:text-2xl">Casa Rodante</p>
                            <p data-aos-once="true" data-aos="slide-left" className="text-left my-4 bg-[#1E73BE] p-3 text-white text-lg sm:text-lg md:text-xl lg:text-2xl">Minibús</p>
                            <p data-aos-once="true" data-aos="slide-left" className="text-left my-4 bg-[#1E73BE] p-3 text-white text-lg sm:text-lg md:text-xl lg:text-2xl">Motos</p>
                        </div>
                        <div className=" block sm:block md:flex lg:flex bg-[#1E73BE]">
                            <p className="relative aspect-w-5 sm:aspect-w-5 md:w-full lg:w-full aspect-h-3 sm:aspect-h-3 md:h-full lg:h-full overflow-hidden ">
                                <img className="absolute top-0 left-0 object-cover w-full h-full" src={sociossabiasqueCuatro.src} alt=""/>
                            </p>
                        </div>
                    </div>

                    <div className=" max-w-screen-lg w-full mx-auto text-center mt-24">
                        <h3 className="mx-8 text-[#E27905] uppercase text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-Poppins tracking-[.25em]">Mayo</h3>
                        <p className="italic text-md sm:text-md md:text-lg lg:text-lg">Transporte público</p>
                    </div>
                    <div className=" max-w-screen-lg w-full mx-auto mt-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div>
                            <p data-aos-once="true" data-aos="slide-left" className="text-left my-4 bg-[#E68A24] p-3 text-white text-lg sm:text-lg md:text-xl lg:text-2xl">Autos</p>
                            <p data-aos-once="true" data-aos="slide-left" className="text-left my-4 bg-[#E68A24] p-3 text-white text-lg sm:text-lg md:text-xl lg:text-2xl">Taxi ejecutivo</p>
                            <p data-aos-once="true" data-aos="slide-left" className="text-left my-4 bg-[#E68A24] p-3 text-white text-lg sm:text-lg md:text-xl lg:text-2xl">Minibús escolar</p>
                            <p data-aos-once="true" data-aos="slide-left" className="text-left my-4 bg-[#E68A24] p-3 text-white text-lg sm:text-lg md:text-xl lg:text-2xl">Minibús particular</p>
                            <p data-aos-once="true" data-aos="slide-left" className="text-left my-4 bg-[#E68A24] p-3 text-white text-lg sm:text-lg md:text-xl lg:text-2xl">Bus escolar</p>
                        </div>
                        <div className=" block sm:block md:flex lg:flex bg-[#E68A24]">
                            <p className="relative aspect-w-5 sm:aspect-w-5 md:w-full lg:w-full aspect-h-3 sm:aspect-h-3 md:h-full lg:h-full overflow-hidden">
                                <img className="absolute top-0 left-0 object-cover w-full h-full" src={coverBgImageNueve.src} alt=""/>
                            </p>
                        </div>
                    </div>

                    <div className=" max-w-screen-lg w-full mx-auto text-center mt-24">
                        <h3 className="mx-8 text-[#78C93E] uppercase text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-Poppins tracking-[.25em]">Septiembre</h3>
                        <p className="italic text-md sm:text-md md:text-lg lg:text-lg">Transporte de carga</p>
                    </div>
                    <div className=" max-w-screen-lg w-full mx-auto mt-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div>
                            <p data-aos-once="true" data-aos="slide-left" className="text-left my-4 bg-[#78C93E] p-3 text-white text-lg sm:text-lg md:text-xl lg:text-2xl">Camión</p>
                            <p data-aos-once="true" data-aos="slide-left" className="text-left my-4 bg-[#78C93E] p-3 text-white text-lg sm:text-lg md:text-xl lg:text-2xl">Tracto camión</p>
                            <p data-aos-once="true" data-aos="slide-left" className="text-left my-4 bg-[#78C93E] p-3 text-white text-lg sm:text-lg md:text-xl lg:text-2xl">Semiremolque</p>
                            <p data-aos-once="true" data-aos="slide-left" className="text-left my-4 bg-[#78C93E] p-3 text-white text-lg sm:text-lg md:text-xl lg:text-2xl">Maquina industrial</p>
                        </div>
                        <div className=" block sm:block md:flex lg:flex bg-[#78C93E]">
                            <p className="relative aspect-w-5 sm:aspect-w-5 md:w-full lg:w-full aspect-h-3 sm:aspect-h-3 md:h-full lg:h-full overflow-hidden">
                                <img className="absolute top-0 left-0 object-cover w-full h-full" src={campagnaSeptiembre.src} alt=""/>
                            </p>
                        </div>
                    </div>

            </section>

        </main>
    );
}


