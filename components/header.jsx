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
        <nav className="bg-white fixed left-0 top-0 w-full z-50  shadow-md shadow-neutral-500 py-2 px-4 sm:px-4 md:px-4 lg:px-0">
            <div class=" max-w-screen-lg mx-auto flex flex-row items-center justify-center">
                <div className=" w-full h-full lg:hidden flex flex-row items-center justify-left gap-2">
                    <Image class="w-4 inline-block" src={hamburgerMenu} alt="" />
                    <span class="text-black text-lg uppercase font-bold inline-block">Menú</span>
                </div>
                <div class=" inline-block lg:min-w-44 lg:max-w-44 h-auto md:min-w-28 md:max-w-28 sm:min-w-28 sm:max-w-28 min-w-28 max-w-28 ">
                    <Link class=" inline-block" href="/">
                        <Image src={seguroObligatorio} alt="Seguro Obligatorio" />
                    </Link>
                </div>
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
                <div class=" inline-block lg:min-w-44 lg:max-w-44 h-auto md:min-w-28 md:max-w-28 sm:min-w-28 sm:max-w-28 min-w-28 max-w-28 ">
                    <Link class=" inline-block" href="/" target="_blank" >
                        <Image src={segurosGenerales} alt="Seguros Generales logo" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
