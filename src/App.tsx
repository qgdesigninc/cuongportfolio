/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { ProjectModal } from './components/ProjectModal';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#171717] font-body flex flex-col selection:bg-[#C7F36B] selection:text-[#171717]">
      {/* Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Selected Work Bento Grid */}
        <ProjectGrid onSelectProject={(project) => setSelectedProject(project)} />

        {/* 3. About Me & Philosophy */}
        <About />

        {/* 4. Services & Capabilities */}
        <Services onOpenContact={handleOpenContact} />

        {/* 5. Contact & Brief Inquiry */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(project) => setSelectedProject(project)}
        onContactClick={handleOpenContact}
      />
    </div>
  );
}
