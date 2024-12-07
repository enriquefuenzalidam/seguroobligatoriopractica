"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Link from 'next/link';

import seguroObligatorio from '/public/images/seguroobligatorio.png';
import segurosGenerales from '/public/images/segurosgenerales.png';
import hamburgerMenu from '/public/images/bars.svg';
import { HOME_URL, QUIENESSOMOS, SOCIOS, CAMPAGNAS, PRECIO, CONTACTO, SEGUROSGENERALES } from  '@/lib/urls';

const navItems = [
    { linkText: 'Inicio', href: HOME_URL },
    { linkText: 'Quiénes somos', href: QUIENESSOMOS },
    { linkText: 'Socios', href: SOCIOS },
    { linkText: 'Campañas', href: CAMPAGNAS },
    { linkText: 'Precios', href: PRECIO },
    { linkText: 'Contacto', href: CONTACTO }
];

export function Header() {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
        <nav className={` bg-white  ${isScrolled ? ' bg-opacity-90' : 'bg-opacity-100'} fixed left-0 top-0 w-full z-50 shadow-custom-opacity py-2 pl-6 sm:pl-6 md:pl-6 lg:pl-0 pr-4 sm:pr-4 md:pr-4 lg:pr-0 transition-all ease-in-out duration-2000 `}>
            <section data-aos="fade-down" className=" max-w-screen-lg mx-auto flex flex-row items-center justify-center">
                <div className=" w-full h-full lg:hidden flex flex-row items-center justify-left gap-2">
                    <p className="inline-flex flex-row cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        <img className="inline-block w-4 " src={hamburgerMenu.src} alt="" />
                        <span className="inline-block ml-2 text-black text-lg uppercase font-bold ">Menú</span>
                    </p>
                </div>
                <p className={` lg:min-w-44 lg:max-w-44 h-auto md:min-w-28 md:max-w-28 sm:min-w-28 sm:max-w-28 min-w-28 max-w-28 ${isScrolled ? 'inline-block ms:inline-block md:inline-block lg:hidden' : 'inline-block'}`}>
                    <Link className=" inline-block" href="./precios">
                        <img src={seguroObligatorio.src} alt="Seguro Obligatorio" />
                    </Link>
                </p>
            {!!navItems?.length && (
                <ul data-aos="fade-up" className=" w-full h-full hidden sm:hidden md:hidden lg:inline-flex flex-row items-center justify-center gap-4 text-black  ">
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
                    <Link className="inline-block" href={SEGUROSGENERALES} >
                        <img src={segurosGenerales.src} alt="Seguros Generales logo" />
                    </Link>
                </p>
            </section>


            {!!navItems?.length && (
                <ul className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-screen opacity-100 py-5 px-6' : 'max-h-0 opacity-0'
                }`} >
                    {navItems.map((item, index) => (
                    <li key={index} className="py-2">
                        <Link onClick={() => setIsOpen(!isOpen)} href={item.href} className={`block no-underline text-black text-opacity-70 hover:text-opacity-100 `} >
                                {item.linkText}
                        </Link>
                    </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
