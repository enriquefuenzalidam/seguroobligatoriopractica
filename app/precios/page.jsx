
import Image from 'next/image';
import Preciotablasgenerador from './preciotablasgenerador';

import preciosCover from 'public/images/preciosCover.jpg';
import preciosIcon from 'public/images/preciosIcon.svg';
import preciosBCISeguros from 'public/images/preciosBCISeguros.jpg';
import preciosMutualDeSegurosDeChile from 'public/images/preciosMutualDeSegurosDeChile.png';

export const metadata = {
    title: 'Precios'
}
const precioTablas = [
    { 
        mes: 'marzo',
        seguros: [
            {
                nombre: preciosBCISeguros,
                compra: 'https://soapweb.bciseguros.cl/web/DatosVehiculo?Convenios=278884001FEA1CB684EE30C09C81B974',
                precios: [
                    { vehiculoTipo: 'Auto Jeep y St Wagon', precio: 6900 },
                    { vehiculoTipo: 'Camioneta y furgón', precio: 9800 },
                    { vehiculoTipo: 'Carro de arrastre y casa rodante', precio: 5500 },
                    { vehiculoTipo: 'Moto, cuatrimoto', precio: 46000 },
                    { vehiculoTipo: 'Mini bus y ambulancia', precio: 25000 }
                ]
            },
            {
                nombre: preciosMutualDeSegurosDeChile,
                compra: 'https://core.mutualdeseguros.cl/soap_ms/pago.php?tipodeventa=10',
                precios: [
                    { vehiculoTipo: 'Auto Jeep y St Wagon', precio: 6900 },
                    { vehiculoTipo: 'Camioneta y furgón', precio: 9800 },
                    { vehiculoTipo: 'Carro de arrastre', precio: 5500 },
                    { vehiculoTipo: 'Moto, cuatrimoto', precio: 46000 },
                    { vehiculoTipo: 'Mini bus', precio: 25000 }
                ]
            }
        ]
    },
    { 
        mes: 'mayo',
        seguros: [
            {
                nombre: preciosBCISeguros,
                compra: 'https://soapweb.bciseguros.cl/web/DatosVehiculo?Convenios=278884001FEA1CB684EE30C09C81B974',
                precios: [
                    { vehiculoTipo: 'Taxi básico', precio: 20000 },
                    { vehiculoTipo: 'Taxi ejecutivo', precio: 21000 },
                    { vehiculoTipo: 'Taxi turismo', precio: 21000 },
                    { vehiculoTipo: 'Taxi colectivo', precio: 24000 },
                    { vehiculoTipo: 'Mini Escolar', precio: 22000 },
                    { vehiculoTipo: 'Mini turismo', precio: 23000 },
                    { vehiculoTipo: 'Bus particular', precio: 65000 },
                    { vehiculoTipo: 'Bus escolar', precio: 55000 },
                    { vehiculoTipo: 'Bus rural', precio: 109000 },
                    { vehiculoTipo: 'Bus urbano', precio: 109000 },
                    { vehiculoTipo: 'Bus interurbano', precio: 235000 }
                ]
            }
        ]
    },
    { 
        mes: 'septiembre',
        seguros: [
            {
                nombre: preciosBCISeguros,
                compra: 'https://soapweb.bciseguros.cl/web/DatosVehiculo?Convenios=278884001FEA1CB684EE30C09C81B974',
                precios: [
                    { vehiculoTipo: 'Camión y tracto', precio: 32000 },
                    { vehiculoTipo: 'Remolque y semi', precio: 14000 },
                    { vehiculoTipo: 'Maquina industrial', precio: 18000 }
                ]
            }
        ]
    }
];


export default function quienessomos() {
    return (
        <main className="">

            <section className="mt-16 sm:mt-16 md:mt-16 lg:mt-24 bg-cover bg-center" style={{ backgroundImage: `url(${preciosCover.src})` }}>
                <div className=" bg-black bg-opacity-30 w-full mx-auto py-48">
                    <h2 data-aos-once="true" data-aos="fade-down" className=" max-w-screen-lg mx-auto text-center text-white text-opacity-100 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase font-Poppins">Precios</h2>
                    <p className=" text-center">
                        <Image className=" mx-auto w-24 mt-12 hover:translate-y-4 hover:transition-all hover:duration-300 translate-y-0 transition-all duration-300 " src={preciosIcon} alt="Precios Icon" />
                    </p>
                </div>
            </section>

            <section className="max-w-screen-lg mx-auto text-center ">
                <Preciotablasgenerador precioTablas={precioTablas} />
            </section>

        </main>
    );
}


