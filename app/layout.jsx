
import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Seguro Obligatorio',
        default: 'Seguro Obligatorio'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-black bg-white font-Lato ">
                        <Header />
                        {children}
                        <Footer />
            </body>
        </html>
    );
}
