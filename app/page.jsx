
import Link from 'next/link';
import Image from 'next/image';
import DynamicBackground from 'components/DynamicBackground';





export default function Page() {
    return (
        <main className="">
            <DynamicBackground>
                <section className=" max-w-screen-lg w-full mx-auto">
                    <h2 className=" mx-6 sm:mx-6 md:mx-6 lg:mx-3 text-white text-opacity-100 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase font-Poppins">Seguro Obligatorio</h2>
                    <p className=" mx-6 sm:mx-6 md:mx-6 lg:mx-3 mt-2 text-white text-md text-lg sm:text-lg md:text-xl lg:text-2xl">Experiencia en el mercado de seguros</p>
                    <p className=" mx-6 sm:mx-6 md:mx-6 lg:mx-3 mt-8"><Link className="inline-block text-white text-sm uppercase border-solid border-2 rounded-full border-opacity-60 py-1 px-10" href="/precios">Compra aquí</Link></p>
                </section>
            </DynamicBackground>
            <section>
                <div className=" max-w-screen-lg w-full mx-auto">
                    <p className=" text-center text-lg sm:text-lg md:text-xl lg:text-2xl py-32 px-6 sm:px-6 md:px-8 lg:px-8 leading-normal sm:leading-normal md:leading-relaxed lg:leading-relaxed ">
                        <span className=" uppercase font-bold font-Lato">Seguro Obligatorio</span> es una empresa consolidada con más de 25 años en el mercado, que ofrece seguros obligatorios y seguros generales a particulares y empresas de todo el país. Mantenemos alianzas con las mejores compañías de seguros, lo que nos permite ofrecer el mejor precio a cada uno de nuestros clientes. Nuestros colaboradores brindan la asesoría para que las personas obtengan el Seguro más adecuado a sus necesidades.
                    </p>
                </div>
            </section>
        </main>
    );
}

