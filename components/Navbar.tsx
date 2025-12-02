"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-1 bg-white shadow-md border-gray-50 border rounded-full mt-4 max-w-6xl mx-auto flex items-center justify-between">
      
      {/* Logo */}
      <Link href="/">
        <Image
          src="/AxiLogo.png"    // ← mets ton logo ici
          width={50}
          height={50}
          alt="Logo"
        />
      </Link>

      {/* Menu Desktop */}
      <div className="hidden md:flex items-center gap-10 text-sm font-semibold">
        <Link href="/" className="hover:text-yellow-500">Accueil</Link>
        <Link href="/a-propos" className="hover:text-yellow-500">A Propos</Link>
        <Link href="/services" className="hover:text-yellow-500">Nos services</Link>
        <Link href="/contact" className="hover:text-yellow-500">Contactez nous</Link>

        {/* Button */}
        <Link
          href="/telecharger"
          className="bg-[#FFBE00] text-black px-5 py-2 rounded-full font-semibold hover:bg-[#FFBE00]/90"
        >
          Télécharger
        </Link>
      </div>

      {/* Hamburger Mobile */}
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setOpen(!open)}
      >
        <span className="w-6 h-[3px] bg-black"></span>
        <span className="w-6 h-[3px] bg-black"></span>
        <span className="w-6 h-[3px] bg-black"></span>
      </button>

      {/* Menu Mobile */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg py-6 flex flex-col items-center gap-6 md:hidden">
          <Link href="/" onClick={() => setOpen(false)}>Accueil</Link>
          <Link href="/a-propos" onClick={() => setOpen(false)}>A Propos</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Nos services</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contactez nous</Link>

          <Link
            href="/telecharger"
            className="bg-yellow-500 text-white px-5 py-2 rounded-full font-semibold"
            onClick={() => setOpen(false)}
          >
            Télécharger
          </Link>
        </div>
      )}
    </nav>
  );
}
