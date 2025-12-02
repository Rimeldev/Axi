import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full max-w-6xl mx-auto py-10 px-6 flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* --- LEFT TEXT --- */}
      <div className="flex-1">
        <h1 className="md:text-4xl font-heading font-bold mb-4">
         Axì – Le marché digital de proximité
        </h1>

        <p className="text-black font-sans font-medium leading-relaxed mb-4">
          Retrouvez les vendeuses, PME, artisans et services de proximité autour de vous… comme si vous y étiez déjà.
        </p>

        <p className="text-black font-sans font-semibold leading-relaxed mb-8">
          Commandez, réservez, explorez les stands, tout depuis votre téléphone.
        </p>

        <Link
          href="/telecharger"
          className="bg-[#FFBE00] text-black px-6 py-3 rounded-md text-sm font-semibold hover:bg-[#FFBE00]/90 transition"
        >
          Télécharger l’application
        </Link>
      </div>

      {/* --- RIGHT IMAGES --- */}
      <div className="flex-1 flex justify-center relative">
      <Image
  src="/HeroImage.png"
  alt="Axi mobile screens"
  width={800}
  height={800}
  className="w-full h-auto max-w-full"
  priority
/>
      </div>
    </section>
  );
}
