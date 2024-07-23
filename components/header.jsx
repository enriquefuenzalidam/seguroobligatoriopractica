"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from 'next/image';
import Link from 'next/link';

import seguroObligatorio from 'public/images/seguroobligatorio.png';
import segurosGenerales from 'public/images/segurosgenerales.png';
import hamburgerMenu from 'public/images/bars.svg';

const navItems = [
    { linkText: 'Inicio', href: '/' },
    { linkText: 'Quiénes somos', href: '/quienessomos' },
    { linkText: 'Socios', href: '/socios' },
    { linkText: 'Campañas', href: '/campañas' },
    { linkText: 'Precios', href: '/precios' },
    { linkText: 'Contacto', href: '/contacto' }
];

export function Header() {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);

     useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
      }, []);

    return (
        <nav className="bg-white fixed left-0 top-0 w-full z-50 shadow-custom-opacity py-2 pl-6 sm:pl-6 md:pl-6 lg:pl-0 pr-4 sm:pr-4 md:pr-4 lg:pr-0 transition-all ease-in-out duration-2000 ">
            <section data-aos="fade-down" className=" max-w-screen-lg mx-auto flex flex-row items-center justify-center">
                <p className=" w-full h-full lg:hidden flex flex-row items-center justify-left gap-2">
                    <Image className="w-4 inline-block" src={hamburgerMenu} alt="" />
                    <span className="text-black text-lg uppercase font-bold inline-block">Menú</span>
                </p>
                <p className={` lg:min-w-44 lg:max-w-44 h-auto md:min-w-28 md:max-w-28 sm:min-w-28 sm:max-w-28 min-w-28 max-w-28 ${isScrolled ? 'inline-block ms:inline-block md:inline-block lg:hidden' : 'inline-block'}`}>
                    <Link className=" inline-block" href="/">
                        <Image src={seguroObligatorio} alt="Seguro Obligatorio" />
                    </Link>
                </p>
            {!!navItems?.length && (
                <ul data-aos="fade-left" className=" w-full h-full hidden sm:hidden md:hidden lg:inline-flex flex-row items-center justify-center gap-4 text-black  ">
                    {navItems.map((item, index) => (
                    <li key={index} className=" inline-block ">
                        <Link href={item.href} className={`inline-block no-underline uppercase font-bold text-md `} >
                                {item.linkText}
                        </Link>
                    </li>
                    ))}
                </ul>
            )}
                <p className={` lg:min-w-44 lg:max-w-44 h-auto md:min-w-28 md:max-w-28 sm:min-w-28 sm:max-w-28 min-w-28 max-w-28 ${isScrolled ? 'inline-block ms:inline-block md:inline-block lg:hidden' : 'inline-block'}`}>
                    <Link className="inline-block" href="/" target="_blank" >
                        <Image src={segurosGenerales} alt="Seguros Generales logo" />
                    </Link>
                </p>
            </section>
        </nav>
    );
}
