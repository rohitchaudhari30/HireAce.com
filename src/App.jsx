import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AmbientGlow } from './components/layout/AmbientGlow';
import { Navbar } from './components/layout/Navbar';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { Footer } from './components/layout/Footer';
import { DownloadModal } from './components/ui/DownloadModal';
import { BackToTop } from './components/ui/BackToTop';

import { Hero } from './components/sections/Hero';
import { TrustedBy } from './components/sections/TrustedBy';
import { Features } from './components/sections/Features';
import { SimulatorSection } from './components/sections/simulator/SimulatorSection';
import { Compatibility } from './components/sections/Compatibility';
import { Workflow } from './components/sections/Workflow';
import { Testimonials } from './components/sections/Testimonials';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const openDownloadModal = () => setIsDownloadModalOpen(true);
  const closeDownloadModal = () => setIsDownloadModalOpen(false);

  return (
    <ThemeProvider>
      {/* Ambient background light orbs */}
      <AmbientGlow />

      {/* Sticky glassmorphic navbar */}
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
        onOpenDownload={openDownloadModal}
      />

      {/* Slide-in mobile drawer navigation */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenDownload={openDownloadModal}
      />

      {/* Main landing page sections */}
      <main>
        <Hero onOpenDownload={openDownloadModal} />
        <TrustedBy />
        <Features />
        <SimulatorSection />
        <Compatibility />
        <Workflow />
        <Testimonials />
        <Pricing onOpenDownload={openDownloadModal} />
        <FAQ />
        <FinalCTA onOpenDownload={openDownloadModal} />
      </main>

      {/* Categorized footer */}
      <Footer />

      {/* Platform Download Modal Dialog */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={closeDownloadModal}
      />

      {/* Floating scroll to top button */}
      <BackToTop />
    </ThemeProvider>
  );
}
