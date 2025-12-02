"use client";

import Hero from "./(home)/Hero";
import Image from "next/image";
import React, { useState } from 'react';

{
  /* Mini-component propre et réutilisable */
}
const InfoRow = ({ label }) => (
  <div className="border-2 border-[#FFBE00] rounded-lg p-4">
    <p className=" font-semibold font-sans text-black">{label}</p>
  </div>
);

export default function Home() {

    const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Est-ce gratuit ?",
      answer: "Oui. Créer un stand est entièrement gratuit, tout comme l'utilisation de l'application pour les simples utilisateurs"
    },
    {
      question: "Comment passer une commande ?",
      answer: "Parcourez les stands, sélectionnez vos produits, contactez le vendeur via le chat et confirmez votre commande en quelques clics."
    },
    {
      question: "Quels types de services trouve-t-on sur Axi ?",
      answer: "Vous trouverez des restaurants, boutiques, artisans, services de proximité, et bien plus encore dans votre région."
    },
    {
      question: "Y a-t-il des abonnements ?",
      answer: "Non, l'utilisation de base est gratuite. Des fonctionnalités premium pourront être proposées aux vendeurs pour plus de visibilité."
    }
  ];

  return (
    <div >
      <Hero />
      <section className="w-full max-w-6xl mx-auto py-10 px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* --- RIGHT IMAGES --- */}
        <div className="flex-1 flex justify-center relative">
          <Image
            src="/Image2.png"
            alt="Axi mobile screens"
            width={800}
            height={800}
            className="w-full h-auto max-w-full"
            priority
          />
        </div>
        {/* --- LEFT TEXT --- */}
        <div className="flex-1">
          <h2 className="md:text-4xl font-heading font-bold mb-4">
            Leur stand. Leur vitrine. Leur visibilité.
          </h2>

          <p className="text-black font-sans font-medium leading-relaxed mb-4">
            Sur Axì, les entreprises, PME, vendeuses et artisans créent
            gratuitement leur stand digital.
          </p>

          <p className="text-black font-sans font-medium leading-relaxed mb-8">
            Ils publient, présentent leurs produits, annoncent leurs nouveautés
            et touchent davantage de clients — partout au Bénin.
          </p>

          <div className="flex flex-col gap-3 text-sm">
            <div className="flex gap-3 justify-start">
              <InfoRow label="Création de stand gratuite" />
              <InfoRow label="Publications illimitées" />
            </div>
            <div className="flex gap-3 justify-start">
              <InfoRow label="Gestion simple et rapide" />
              <InfoRow label="Visibilité locale renforcée" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto py-10 px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* --- RIGHT IMAGES --- */}
        <div className="flex-1 flex justify-center relative">
          <Image
            src="/Image3.png"
            alt="Axi mobile screens"
            width={800}
            height={800}
            className="w-full h-auto max-w-full"
            priority
          />
        </div>
        {/* --- LEFT TEXT --- */}
        <div className="flex-1">
          <h2 className="md:text-4xl font-heading font-bold mb-4">
            Trouvez ce dont vous avez besoin, où que vous soyez.
          </h2>

          <p className="text-black font-sans font-medium leading-relaxed mb-4">
            Que vous soyez nouveau dans une ville ou à la recherche d’un service
            précis, Axì vous aide à tout retrouver : restaurants, artisans,
            boutiques, services de proximité et bien plus encore.
          </p>

          <p className="text-black font-sans font-medium leading-relaxed mb-8">
            Parcourez les stands comme si vous étiez sur place, contactez le
            vendeur et passez votre commande en quelques clics.
          </p>

          <div className="flex flex-col gap-3 text-sm">
            <div className="flex gap-3 justify-start">
              <InfoRow label="Recherche rapide et intelligente" />
              <InfoRow label="Discussion avec le stand" />
            </div>
            <div className="flex gap-3 justify-start">
              <InfoRow label="Commandes et réservations en ligne" />
            </div>
            <div className="flex gap-3 justify-start">
              <InfoRow label="Expérience simple et intuitive" />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full bg-white py-12 px-8">
        {/* Bannière illustrative */}
        <div className="w-full mb-12 flex justify-center">
          <img
            src="/barre.png"
            alt="bannière illustrative"
            className="w-full max-w-6xl h-auto object-contain"
          />
        </div>

        {/* Titre */}
        <h2 className="text-3xl font-heading font-bold text-center mb-12 text-black">
          Axi en quelques chiffres
        </h2>

{/* Statistiques */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 max-w-6xl mx-auto px-4">
        {/* Stat 1 */}
        <div className="flex flex-col items-center relative">
          <div className="text-5xl font-bold font-heading text-black mb-4">
            +1200
          </div>
          <p className="text-center text-lg font-sans font-medium text-black leading-relaxed">
            entreprises &<br />
            artisans
            <br />
            enregistré
          </p>
          {/* Séparateur horizontal sur mobile/tablette, vertical sur desktop */}
          <div className="lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 h-1.5 w-24 rounded-full bg-[#FFBE00]"></div>
          <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-1.5 h-24 rounded-full bg-[#FFBE00]"></div>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center relative">
          <div className="text-5xl font-bold font-heading text-black mb-4">
            +350
          </div>
          <p className="text-center text-lg font-sans font-medium text-black">
            stands actifs
          </p>
          {/* Séparateur horizontal sur mobile/tablette, vertical sur desktop */}
          <div className="lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 h-1.5 w-24 rounded-full bg-[#FFBE00]"></div>
          <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-1.5 h-24 rounded-full bg-[#FFBE00]"></div>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center relative">
          <div className="text-5xl font-bold font-heading text-black mb-4">
            +5 000
          </div>
          <p className="text-center text-lg font-sans font-medium text-black leading-relaxed">
            utilisateurs
            <br />
            inscrits
          </p>
          {/* Séparateur horizontal sur mobile/tablette, vertical sur desktop */}
          <div className="lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 h-1.5 w-24 rounded-full bg-[#FFBE00]"></div>
          <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-1.5 h-24 rounded-full bg-[#FFBE00]"></div>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold font-heading text-black mb-4">
            87 %
          </div>
          <p className="text-center text-lg font-sans font-medium text-black leading-relaxed">
            d'utilisateurs
            <br />
            satisfaits
          </p>
          {/* Pas de séparateur après la dernière stat */}
        </div>
      </div>
    </div>

    {/* Mockup partie */}
    <div className="w-full relative py-8 md:py-16">
      {/* Fond jaune pleine largeur qui passe derrière */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[100%] md:h-[60%] bg-[#FFBE00] -z-10"></div>

      {/* Contenu centré */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-4 md:px-8 relative">
        {/* Image des téléphones - dépasse en haut et en bas */}
        <div className="flex-1 flex justify-center relative z-10 w-full md:w-auto">
          <div className="relative w-full max-w-[300px] sm:max-w-sm md:max-w-md">
            <img
              src="/AxiPhone.png"
              alt="Axi app mockup"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Contenu texte et boutons */}
        <div className="flex-1 flex flex-col items-center md:items-start z-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-black mb-4">
            Axi, toujours avec vous.
          </h2>

          <p className="text-black font-sans text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-lg">
            Téléchargez l'application et découvrez un nouveau
            mode d'accès aux services de proximité au Bénin.
          </p>

          {/* Boutons de téléchargement */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* Bouton Android */}
            <a
              href="#"
              className="bg-black text-white px-4 md:px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 justify-center sm:justify-start"
            >
              <img
                src="/playstore.png"
                alt="logo Google Play"
                className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0"
              />

              <div className="text-left">
                <div className="text-xs uppercase tracking-wide opacity-90">
                  Disponible sur
                </div>
                <div className="text-xl md:text-2xl font-semibold -mt-1">
                  Google Play
                </div>
              </div>
            </a>

            {/* Bouton iOS */}
            <a
              href="#"
              className="bg-black text-white px-4 md:px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 justify-center sm:justify-start"
            >
              <img
                src="/logo-apple.png"
                alt="logo App Store"
                className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0"
              />
              <div className="text-left">
                <div className="text-xs uppercase tracking-wide opacity-90">
                  Télécharger dans
                </div>
                <div className="text-xl md:text-2xl font-semibold -mt-1">
                  l'App Store
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
      {/* Section supérieure : Titre + Liste + Images */}
      <div className="w-full max-w-6xl mx-auto py-10 px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Partie gauche : Titre et liste */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold font-heading text-black mb-8">
            Pourquoi <span className="text-[#FFBE00]">Axi</span> ?
          </h2>

          <ul className="space-y-4 text-black font-sans font-medium text-lg">
            <li className="flex items-start gap-3">
              <span className="text-[#FFBE00] font-bold text-xl">•</span>
              <span>Connecte instantanément les besoins aux services</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFBE00] font-bold text-xl">•</span>
              <span>Donne une visibilité réelle aux artisans</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFBE00] font-bold text-xl">•</span>
              <span>Favorise l'économie locale</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFBE00] font-bold text-xl">•</span>
              <span>Simplifie la vie des populations</span>
            </li>
          </ul>
        </div>

        {/* Partie droite : Images des téléphones */}
        <div className="flex-1 flex justify-center items-center gap-4">
            <Image
              src="/Mockup-phone.png"
              alt="Axi app screen 1"
              width={800}
              height={800}
              className="w-full h-auto max-w-full"
              priority
            />
        </div>
      </div>


    {/* Section vidéo YouTube */}
    <div className="px-8">
<div className="relative max-w-4xl mx-auto w-full rounded-md overflow-hidden mt-4 shadow-2xl  md:px-0">
  {/* Image de fond avec overlay */}
  <div className="relative w-full aspect-video bg-gray-200 rounded-md overflow-hidden">
    <img
      src="/clip.jpg"
      alt="Vidéo présentation Axi"
      className="w-full h-full object-cover"
    />

    {/* Overlay sombre */}
    <div className="absolute inset-0"></div>

    {/* Logo et texte en haut à gauche */}
    <div className="absolute top-3 md:top-6 left-3 md:left-6 flex items-center gap-2 md:gap-3">
      <Image
        src="/AxiLogo.png"
        width={50}
        height={50}
        alt="Logo"
        className="w-8 h-8 md:w-[50px] md:h-[50px]"
      />
      <span className="text-white text-xs sm:text-sm md:text-lg font-sans leading-tight">
        Découvrir Axi, le marché<br className="sm:hidden" /> digital de proximité
      </span>
    </div>

    {/* Bouton play YouTube au centre */}
    <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-14 md:w-28 md:h-16 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg active:scale-95">
      <svg
        className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>

    {/* Badge YouTube en bas à droite */}
    <a 
      href="#"
      className="absolute bottom-3 md:bottom-6 right-3 md:right-6 bg-black bg-opacity-70 px-2.5 md:px-4 py-1.5 md:py-2 rounded-lg flex items-center gap-1.5 md:gap-2 hover:bg-opacity-90 transition-all"
    >
      <svg
        className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
      <span className="text-white text-xs md:text-sm font-medium whitespace-nowrap">
        Regarder sur YouTube
      </span>
    </a>
  </div>
</div>
    </div>


       <div className="max-w-6xl mx-auto mt-20 px-8 md:px-0">
        
        {/* Titre */}
        <h2 className="text-4xl font-bold font-heading text-black mb-12">FAQ</h2>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Liste des questions - Colonne gauche */}
          <div className="flex-1 space-y-3">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-gray-100 border-l-4 border-[#FFBE00] font-semibold'
                    : 'bg-white hover:bg-gray-50 border-l-4 border-transparent'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-black font-sans text-lg">{faq.question}</span>
                  {activeIndex === index && (
                    <svg className="w-5 h-5 text-[#FFBE00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Réponse - Colonne droite */}
          <div className="flex-1">
            <div className="bg-[#FFBE00] rounded-lg p-8 relative min-h-[250px] flex flex-col justify-between shadow-lg">
              {/* Contenu de la réponse */}
              <p className="text-black font-sans items-center font-medium text-lg leading-relaxed mb-6">
                {faqs[activeIndex].answer}
              </p>        
            </div>
          </div>

        </div>
      </div>

       <div className="max-w-6xl mx-auto mt-16 px-8 md:px-0">
        
        {/* Titre et description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-heading text-black mb-4">
            Une équipe proche de vous
          </h2>
          <p className="text-black font-sans text-lg max-w-3xl mx-auto leading-relaxed">
            Des individus passionnés dédiés à l'autonomisation des entrepreneurs<br />
            africains et à la construction de l'avenir du commerce.
          </p>
        </div>

        {/* Image de l'équipe */}
        <div className="max-w-xl mx-auto flex justify-center">
          <img 
            src="/teamImage.png" 
            alt="L'équipe Axi" 
            className="w-full max-w-4xl h-auto object-contain rounded-3xl"
          />
        </div>

      </div>

    </div>
  );
}
