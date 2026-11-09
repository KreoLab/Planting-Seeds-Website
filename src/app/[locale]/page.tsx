import React from "react";
import BurbujaDeIdioma from "@/components/BurbujaDeIdioma";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Conteos from "@/components/Conteos";
import NuestroObjetivo from "@/components/NuestroObjetivo";
import NuestroVoluntario from "@/components/NuestroVoluntario";
import TheHelpers from "@/components/TheHelpers";
import DonacionDeAlimentos from "@/components/DonacionDeAlimentos";
import SiembramosEsperanza from "@/components/SiembramosEsperanza";
import SembrarEsperanza from "@/components/SembrarEsperanza";
import ValoresInstitucionales from "@/components/ValoresIntitucionales";
import PuedesAyudar from "@/components/PuedesAyudar";
import InspiracionDiaria from "@/components/InspiracionDiaria";
import Footer from "@/components/Footer";

export default function Home() {
    return (

        <div>
            <BurbujaDeIdioma />
            <Navbar />
            <Hero />
            <Conteos />
            <NuestroObjetivo />
            <NuestroVoluntario />
            <TheHelpers />
            <DonacionDeAlimentos />
            <SiembramosEsperanza />
            <SembrarEsperanza />
            <ValoresInstitucionales />
            <PuedesAyudar />
            <InspiracionDiaria />
            <Footer />
        </div>
    );
}
