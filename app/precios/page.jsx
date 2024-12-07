
import Preciotablasgenerador from './preciotablasgenerador';

import preciosCover from '/public/images/preciosCover.jpg';
import preciosIcon from '/public/images/preciosIcon.svg';

import precioTablas from '../../data/precioTablas.json';

export const metadata = {
    title: 'Precios'
}



export default function quienessomos() {
    return (
        <main className="">

            <section className="mt-16 sm:mt-16 md:mt-16 lg:mt-24 bg-cover bg-center shadow-[rgba(0,0,0,0.6)] shadow-lg" style={{ backgroundImage: `url(${preciosCover.src})` }}>
                <div className=" bg-black bg-opacity-30 w-full mx-auto py-48">
                    <h2 data-aos-once="true" data-aos="fade-down" className=" max-w-screen-lg mx-auto text-center text-white text-opacity-100 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase font-Poppins">Precios</h2>
                    <p className=" text-center">
                        <img className=" mx-auto w-24 mt-12 hover:translate-y-4 hover:transition-all hover:duration-300 translate-y-0 transition-all duration-300 " src={preciosIcon.src} alt="Precios Icon" />
                    </p>
                </div>
            </section>

            <section className="max-w-screen-lg mx-auto text-center ">
                <Preciotablasgenerador precioTablas={precioTablas} />
            </section>

        </main>
    );
}


