import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import FloatingControls from "./components/common/FloatingControls";
import {
  LeadModal,
  PrivacyModal,
  LegalModal,
  VideoModal,
  SubjectModal,
} from "./components/modals";

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
import GaleriaSection from "./components/sections/GaleriaSection";

import "./App.css";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Scroll to top on every route change (unless hash exists)
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  const handleNavigate = (sectionId, subId = null) => {
    const routeMap = {
      inicio: "/",
      nosotros: "/nosotros",
      licenciatura: "/licenciatura",
      "modelo-educativo": "/modelo-educativo",
      "vida-estudiantil": "/vida-estudiantil",
      galeria: "/galeria",
      admisiones: "/admisiones",
      contacto: "/contacto",
    };

    const targetPath =
      routeMap[sectionId] ||
      (sectionId.startsWith("/") ? sectionId : `/${sectionId}`);

    navigate(targetPath);

    if (subId) {
      setTimeout(() => {
        const el = document.getElementById(subId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-amber-400 selection:text-slate-900">
      {/* 1. Barra de Navegación Institucional */}
      <Header onOpenLeadModal={() => setIsLeadModalOpen(true)} />

      {/* 2. Contenido Dinámico por Páginas y Rutas URL con / */}
      <main className="flex-grow w-full">
        <Routes>
          {/* Ruta: / (Inicio) */}
          <Route
            path="/"
            element={
              <div className="flex flex-col w-full animate-fade-in">
                <Hero
                  onOpenLeadModal={() => setIsLeadModalOpen(true)}
                  onNavigate={handleNavigate}
                />
                <QuickFacts onNavigate={handleNavigate} />
                <Competencies onNavigate={handleNavigate} />
                <CareerOpportunities onNavigate={handleNavigate} />
                <InstitutionalTrust
                  onNavigate={handleNavigate}
                  onOpenLeadModal={() => setIsLeadModalOpen(true)}
                />
                <EducationalModelTeaser
                  onNavigate={handleNavigate}
                  onOpenVideo={() => setIsVideoModalOpen(true)}
                />
                <NewsAndAnnouncements
                  onNavigate={handleNavigate}
                  onOpenLeadModal={() => setIsLeadModalOpen(true)}
                />
                <ClosingCTA
                  onOpenLeadModal={() => setIsLeadModalOpen(true)}
                  onNavigate={handleNavigate}
                />
              </div>
            }
          />

          {/* Ruta: /nosotros */}
          <Route
            path="/nosotros"
            element={
              <div className="animate-fade-in pt-14">
                <NosotrosSection
                  onOpenLeadModal={() => setIsLeadModalOpen(true)}
                />
              </div>
            }
          />

          {/* Ruta: /licenciatura */}
          <Route
            path="/licenciatura"
            element={
              <div className="animate-fade-in pt-14">
                <LicenciaturaSection
                  onOpenLeadModal={() => setIsLeadModalOpen(true)}
                  onSelectSubject={(subject) => setSelectedSubject(subject)}
                />
              </div>
            }
          />

          {/* Ruta: /modelo-educativo */}
          <Route
            path="/modelo-educativo"
            element={
              <div className="animate-fade-in pt-14">
                <ModeloEducativoSection
                  onOpenVideo={() => setIsVideoModalOpen(true)}
                  onOpenLeadModal={() => setIsLeadModalOpen(true)}
                  onNavigate={handleNavigate}
                />
              </div>
            }
          />

          {/* Ruta: /vida-estudiantil */}
          <Route
            path="/vida-estudiantil"
            element={
              <div className="animate-fade-in pt-14 pb-20 lg:pb-32">
                <VidaEstudiantilSection
                  onOpenLeadModal={() => setIsLeadModalOpen(true)}
                />
              </div>
            }
          />

          {/* Ruta: /galeria */}
          <Route
            path="/galeria"
            element={
              <div className="animate-fade-in pt-14 pb-20 lg:pb-32">
                <GaleriaSection
                  onOpenLeadModal={() => setIsLeadModalOpen(true)}
                />
              </div>
            }
          />

          {/* Ruta: /admisiones */}
          <Route
            path="/admisiones"
            element={
              <div className="animate-fade-in pt-14 pb-20 lg:pb-32">
                <AdmisionesSection
                  onOpenLeadModal={() => setIsLeadModalOpen(true)}
                />
              </div>
            }
          />

          {/* Ruta: /contacto */}
          <Route
            path="/contacto"
            element={
              <div className="animate-fade-in pt-14 pb-8 lg:pb-16">
                <ContactoSection
                  onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
                />
              </div>
            }
          />

          {/* Redirección para cualquier ruta que no coincida */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
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
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        onOpenPrivacy={() => {
          setIsLeadModalOpen(false);
          setIsPrivacyModalOpen(true);
        }}
      />

      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      <LegalModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <SubjectModal
        subject={selectedSubject}
        isOpen={Boolean(selectedSubject)}
        cuatrimestreNumber={selectedSubject?.cuatrimestreNumber}
        onClose={() => setSelectedSubject(null)}
      />
    </div>
  );
}
