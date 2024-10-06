
import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
  title: {
    default: 'Seguro Obligatorio',
    template: '%s | Seguro Obligatorio'
  }
}

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>

                <meta name="description" content="Seguro Obligatorio es una empresa consolidada con más de 25 años en el mercado, que ofrece seguros obligatorios y seguros generales a particulares y empresas de todo el país. Mantenemos alianzas con las mejores compañías de seguros, lo que nos permite ofrecer el mejor precio a cada uno de nuestros clientes. Nuestros colaboradores brindan la asesoría para que las personas obtengan el Seguro más adecuado a sus necesidades." />
                <meta name="keywords" content="Mutual de seguros, BCI seguros, Auto Jeep, St Wagon, station Wagon, Camioneta, Furgón, Carro de arrastre, casa rodante, Moto, Cuatrimoto, Mini bus, ambulancia" />
                <meta charSet="UTF-8" />
                
                <meta property="og:title" content="Seguro Obligatorio" />
                <meta property="og:description" content="Seguro Obligatorio es una empresa consolidada con más de 25 años en el mercado, que ofrece seguros obligatorios y seguros generales a particulares y empresas de todo el país. Mantenemos alianzas con las mejores compañías de seguros, lo que nos permite ofrecer el mejor precio a cada uno de nuestros clientes. Nuestros colaboradores brindan la asesoría para que las personas obtengan el Seguro más adecuado a sus necesidades." />
                <meta property="og:url" content="https://seguroobligatorio.cl" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Seguro Obligatorio" />
                <meta property="og:locale" content="es_ES" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Seguro Obligatorio" />
                <meta name="twitter:description" content="Seguro Obligatorio es una empresa consolidada con más de 25 años en el mercado, que ofrece seguros obligatorios y seguros generales a particulares y empresas de todo el país. Mantenemos alianzas con las mejores compañías de seguros, lo que nos permite ofrecer el mejor precio a cada uno de nuestros clientes. Nuestros colaboradores brindan la asesoría para que las personas obtengan el Seguro más adecuado a sus necesidades." />


            </head>
            <body className="antialiased text-black bg-white font-Lato ">
                        <Header />
                        {children}
                        <Footer />
            </body>
        </html>
    );
}
