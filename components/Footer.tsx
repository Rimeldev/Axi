import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      {/* Footer main content */}
      <div className="border-t border-gray-800 py-12 px-6 sm:px-8 lg:px-20 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Logo + description */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center mb-4">
              <Image
                src="/Axifooter.jpg"
                alt="Logo Axi"
                width={56}
                height={56}
                className="rounded-full"
              />
            </div>
            <p className="text-md text-white font-light mb-6 text-center sm:text-left leading-relaxed">
              Le marché digital de proximité au service des Béninois.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-[#FFBE00] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-[#FFBE00] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-[#FFBE00] transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-[#FFBE00] transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Ressources */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-white mb-4 text-base">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/aide" className="text-sm text-gray-400 hover:text-[#FFBE00] transition-colors">
                  Centre d'aide
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="text-sm text-gray-400 hover:text-[#FFBE00] transition-colors">
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-white mb-4 text-base">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/confidentialite" className="text-sm text-gray-400 hover:text-[#FFBE00] transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/conditions" className="text-sm text-gray-400 hover:text-[#FFBE00] transition-colors">
                  Termes et conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Entreprise */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-white mb-4 text-base">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/a-propos" className="text-sm text-gray-400 hover:text-[#FFBE00] transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/qui-sommes-nous" className="text-sm text-gray-400 hover:text-[#FFBE00] transition-colors">
                  Qui sommes-nous ?
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="text-sm text-gray-400 hover:text-[#FFBE00] transition-colors">
                  Équipe
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-[#FFBE00] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6 px-6">
        <p className="text-center text-gray-500 text-xs">
          ©2025 Axi. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}