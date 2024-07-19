import Image from 'next/image';
import Link from 'next/link';
import seguroObligatorio from 'public/images/seguroobligatorio.png';
import segurosGenerales from 'public/images/segurosgenerales.png';
import hamburgerMenu from 'public/images/bars.svg';

const navItems = [
    { linkText: 'Inicio', href: '/' },
    { linkText: 'Quiénes somos', href: '/quienesomos' },
    { linkText: 'Socios', href: '/socios' },
    { linkText: 'Campañas', href: '/campañas' },
    { linkText: 'Precios', href: '/precios' },
    { linkText: 'Contacto', href: '/contacto' }
];

export function Header() {
    return (
        <nav className="bg-white fixed left-0 top-0 w-full z-50  shadow-md shadow-neutral-400 py-2 pl-6 sm:pl-6 md:pl-6 lg:pl-0 pr-4 sm:pr-4 md:pr-4 lg:pr-0">
            <section class=" max-w-screen-lg mx-auto flex flex-row items-center justify-center">
                <p className=" w-full h-full lg:hidden flex flex-row items-center justify-left gap-2">
                    <Image class="w-4 inline-block" src={hamburgerMenu} alt="" />
                    <span class="text-black text-lg uppercase font-bold inline-block">Menú</span>
                </p>
                <p class=" inline-block lg:min-w-44 lg:max-w-44 h-auto md:min-w-28 md:max-w-28 sm:min-w-28 sm:max-w-28 min-w-28 max-w-28 ">
                    <Link class=" inline-block" href="/">
                        <Image src={seguroObligatorio} alt="Seguro Obligatorio" />
                    </Link>
                </p>
            {!!navItems?.length && (
                <ul className=" w-full h-full hidden sm:hidden md:hidden lg:inline-flex flex-row items-center justify-center gap-4 text-black">
                    {navItems.map((item, index) => (
                    <li key={index} className=" inline-block ">
                        <Link href={item.href} className=" inline-block no-underline uppercase font-bold text-md" >
                                {item.linkText}
                        </Link>
                    </li>
                    ))}
                </ul>
            )}
                <p class=" inline-block lg:min-w-44 lg:max-w-44 h-auto md:min-w-28 md:max-w-28 sm:min-w-28 sm:max-w-28 min-w-28 max-w-28 ">
                    <Link class=" inline-block" href="/" target="_blank" >
                        <Image src={segurosGenerales} alt="Seguros Generales logo" />
                    </Link>
                </p>
            </section>
        </nav>
    );
}
