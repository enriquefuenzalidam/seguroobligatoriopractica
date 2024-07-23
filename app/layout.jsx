"use client";
import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function RootLayout({ children }) {
    useEffect(() => {
      AOS.init({
        duration: 1200,
      });
    }, []);
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
