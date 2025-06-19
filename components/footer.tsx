"use client"
import Link from 'next/link';
import { Separator } from './ui/separator';
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone, ChevronRight } from 'lucide-react';

const dataFooter = [
  {
    id: 1,
    name: "Sobre nosotros",
    link: "/about"
  },
  {
    id: 2,
    name: "Productos",
    link: "/products"
  },
  {
    id: 3,
    name: "Mi cuenta",
    link: "/account"
  },
  {
    id: 4,
    name: "Política de Privacidad",
    link: "/privacy"
  },
  {
    id: 5,
    name: "Términos y condiciones",
    link: "/terms"
  },
  {
    id: 6,
    name: "Contacto",
    link: "/contact"
  },
];

const socialLinks = [
  {
    id: 1,
    icon: <Facebook className="w-5 h-5" />,
    link: "https://facebook.com"
  },
  {
    id: 2,
    icon: <Instagram className="w-5 h-5" />,
    link: "https://instagram.com"
  },
  {
    id: 3,
    icon: <Twitter className="w-5 h-5" />,
    link: "https://twitter.com"
  },
  {
    id: 4,
    icon: <Youtube className="w-5 h-5" />,
    link: "https://youtube.com"
  }
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              <span className="text-emerald-600">Tecno</span>Go
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Tu tienda virtual de tecnología favorita. Ofreciendo los mejores productos al mejor precio.
            </p>
            
            {/* Newsletter subscription */}
            <div className="mt-6 space-y-3">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Suscríbete a nuestro boletín</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
                <button className="px-4 py-2 text-sm text-white rounded-r-md bg-emerald-600 hover:bg-emerald-700 transition-colors">
                  Suscribir
                </button>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-900 dark:text-white">Enlaces rápidos</h3>
            <ul className="mt-4 space-y-3">
              {dataFooter.slice(0, 3).map((data) => (
                <li key={data.id}>
                  <Link 
                    href={data.link} 
                    className="text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 text-emerald-600" />
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h3>
            <ul className="mt-4 space-y-3">
              {dataFooter.slice(3).map((data) => (
                <li key={data.id}>
                  <Link 
                    href={data.link} 
                    className="text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 text-emerald-600" />
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-900 dark:text-white">Contacto</h3>
            <address className="mt-4 not-italic text-gray-600 dark:text-gray-300 space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-emerald-600" />
                <p>Calle Falsa 123, Ciudad, País</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-emerald-600" />
                <p>info@tecnogo.com</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-emerald-600" />
                <p>+1 234 567 890</p>
              </div>
            </address>

            {/* Social media */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Síguenos</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-200 dark:bg-gray-700" />

        {/* Bottom footer */}
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center">
            <span className="text-sm text-gray-600 dark:text-gray-300">
              &copy; {new Date().getFullYear()} <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400">TecnoGo</Link>. Todos los derechos reservados
            </span>
          </div>

          <div className="flex mt-4 space-x-6 md:mt-0">
            <Link href="#" className="text-sm text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400">
              Política de cookies
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400">
              Mapa del sitio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;