import { useState, useEffect } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import FloatingControls from "./components/common/FloatingControls";
import {
  LeadModal,
  PrivacyModal,
  LegalModal,
  VideoModal,
  SubjectModal,
} from "./components/common/Modals";

// Home Components
import Hero from "./components/home/Hero";
import QuickFacts from "./components/home/QuickFacts";
import Competencies from "./components/home/Competencies";
import CareerOpportunities from "./components/home/CareerOpportunities";
import InstitutionalTrust from "./components/home/InstitutionalTrust";
import EducationalModelTeaser from "./components/home/EducationalModelTeaser";
import NewsAndAnnouncements from "./components/home/NewsAndAnnouncements";
import ClosingCTA from "./components/home/ClosingCTA";

// Dedicated Sections
import NosotrosSection from "./components/sections/NosotrosSection";
import LicenciaturaSection from "./components/sections/LicenciaturaSection";
import ModeloEducativoSection from "./components/sections/ModeloEducativoSection";
import VidaEstudiantilSection from "./components/sections/VidaEstudiantilSection";
import AdmisionesSection from "./components/sections/AdmisionesSection";
import ContactoSection from "./components/sections/ContactoSection";

import "./App.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Scroll to top on section switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection]);

  const handleNavigate = (sectionId, subId = null) => {
    setActiveSection(sectionId);
    if (subId) {
      setTimeout(() => {
        const el = document.getElementById(subId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-amber-400 selection:text-slate-900">
      {/* 1. Barra de Navegación Institucional */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenLeadModal={() => setIsLeadModalOpen(true)}
      />

      {/* 2. Contenido Dinámico por Página / Sección */}
      <main className="flex-grow w-full">
        {activeSection === "inicio" && (
          <div className="flex flex-col w-full animate-fade-in">
            {/* Hero Principal dedicado a la Licenciatura */}
            <Hero
              onOpenLeadModal={() => setIsLeadModalOpen(true)}
              onNavigate={handleNavigate}
            />

            {/* Ficha Rápida de 4 Datos Clave */}
            <QuickFacts onNavigate={handleNavigate} />

            {/* ¿Qué vas a desarrollar? (5 Tarjetas de Perfil) */}
            <Competencies onNavigate={handleNavigate} />

            {/* ¿Dónde vas a trabajar? (Campo Laboral Global) */}
            <CareerOpportunities onNavigate={handleNavigate} />

            {/* Respaldo Euro Centro (Franja de Confianza 25 Años) */}
            <InstitutionalTrust
              onNavigate={handleNavigate}
              onOpenLeadModal={() => setIsLeadModalOpen(true)}
            />

            {/* Modelo Educativo Teaser (Aprender Haciendo + Video) */}
            <EducationalModelTeaser
              onNavigate={handleNavigate}
              onOpenVideo={() => setIsVideoModalOpen(true)}
            />

            {/* Avisos y Convocatorias Recientes */}
            <NewsAndAnnouncements
              onNavigate={handleNavigate}
              onOpenLeadModal={() => setIsLeadModalOpen(true)}
            />

            {/* CTA Final de Cierre */}
            <ClosingCTA
              onOpenLeadModal={() => setIsLeadModalOpen(true)}
              onNavigate={handleNavigate}
            />
          </div>
        )}

        {activeSection === "nosotros" && (
          <div className="animate-fade-in pt-14">
            <NosotrosSection
              onOpenLeadModal={() => setIsLeadModalOpen(true)}
            />
          </div>
        )}

        {activeSection === "licenciatura" && (
          <div className="animate-fade-in pt-14">
            <LicenciaturaSection
              onOpenLeadModal={() => setIsLeadModalOpen(true)}
              onSelectSubject={(subject) => setSelectedSubject(subject)}
            />
          </div>
        )}

        {activeSection === "modelo-educativo" && (
          <div className="animate-fade-in pt-14">
            <ModeloEducativoSection
              onOpenVideo={() => setIsVideoModalOpen(true)}
              onOpenLeadModal={() => setIsLeadModalOpen(true)}
              onNavigate={handleNavigate}
            />
          </div>
        )}

        {activeSection === "vida-estudiantil" && (
          <div className="animate-fade-in pt-14">
            <VidaEstudiantilSection
              onOpenLeadModal={() => setIsLeadModalOpen(true)}
            />
          </div>
        )}

        {activeSection === "admisiones" && (
          <div className="animate-fade-in pt-14">
            <AdmisionesSection
              onOpenLeadModal={() => setIsLeadModalOpen(true)}
            />
          </div>
        )}

        {activeSection === "contacto" && (
          <div className="animate-fade-in pt-14">
            <ContactoSection
              onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
            />
          </div>
        )}
      </main>

      {/* 3. Footer Oficial con las 4 Columnas y Leyenda RVOE */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onOpenLegal={() => setIsLegalModalOpen(true)}
        onOpenLeadModal={() => setIsLeadModalOpen(true)}
      />

      {/* 4. Controles Flotantes Globales */}
      <FloatingControls
        onOpenLeadModal={() => setIsLeadModalOpen(true)}
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
      />

      {/* 5. Modales Interactivos del Sistema */}
      {/* Modal de Prospectos ("Solicita información") */}
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        onOpenPrivacy={() => {
          setIsLeadModalOpen(false);
          setIsPrivacyModalOpen(true);
        }}
      />

      {/* Modal de Aviso de Privacidad Integral */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      {/* Modal de Aviso Legal */}
      <LegalModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
      />

      {/* Modal de Video Tour Institucional */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      {/* Modal de Detalle de Asignatura del Plan Curricular */}
      <SubjectModal
        subject={selectedSubject}
        isOpen={Boolean(selectedSubject)}
        cuatrimestreNumber={selectedSubject?.cuatrimestreNumber}
        onClose={() => setSelectedSubject(null)}
      />
    </div>
  );
}
