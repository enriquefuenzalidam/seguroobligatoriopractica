
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
            </head>
            <body className="antialiased text-black bg-white font-Lato ">
                        <Header />
                        {children}
                        <Footer />
            </body>
        </html>
    );
}
