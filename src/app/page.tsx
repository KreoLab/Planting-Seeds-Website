import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Inicio/hero";
import Nosotros from "@/components/Inicio/nosotros";
import Galeria from "@/components/Inicio/galeria";
import Cita from "@/components/Inicio/cita";
import Contacto from "@/components/Inicio/contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (

    <div>
        <Navbar />
            <Hero />
            <Nosotros />
            <Galeria />
            <Cita />
            <Contacto />
        <Footer />
    </div>
  );
}
