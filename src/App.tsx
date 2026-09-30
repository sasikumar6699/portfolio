import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
// import { ExperiencePage } from './pages/ExperiencePage';
import { ContactPage } from './pages/ContactPage';
import { GravityCursor } from './components/gravity/GravityCursor';
import { SmoothScroll } from './components/gravity/SmoothScroll';
import { CyberDoorTransition } from './components/gravity/CyberDoorTransition';
import { CyberDoorProvider } from './context/CyberDoorContext';
import { CyberAudioControlWidget } from './components/gravity/CyberAudioControlWidget';
import { WhatsAppChatWidget } from './components/WhatsAppChatWidget';

export function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleOpenContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    navigate('/contact');
  };

  const handleFormSubmitted = (name: string) => {
    setToastMessage(`Inquiry sent successfully! Thank you, ${name}.`);
  };

  const handleResumeCopySuccess = () => {
    setToastMessage('Resume details copied to clipboard!');
  };

  return (
    <SmoothScroll>
      <CyberDoorProvider>
        <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[var(--cyber-primary)] selection:text-black flex flex-col justify-between">
          {/* Custom Magnetic Gravity Cursor */}
          <GravityCursor />

          {/* Sticky Navbar */}
          <Navbar onOpenContact={() => handleOpenContact()} />

          {/* Main Content Views with React Router */}
          <main className="flex-grow">
            <CyberDoorTransition>
              {(displayLocation) => (
                <Routes location={displayLocation}>
                  <Route
                    path="/"
                    element={
                      <HomePage
                        onOpenContact={handleOpenContact}
                        onOpenResume={() => setResumeModalOpen(true)}
                        onFormSubmitted={handleFormSubmitted}
                      />
                    }
                  />
                  <Route
                    path="/about"
                    element={<AboutPage onOpenContact={() => handleOpenContact()} />}
                  />
                  <Route
                    path="/services"
                    element={<ServicesPage onOpenContact={handleOpenContact} />}
                  />
                  <Route
                    path="/skills"
                    element={<SkillsPage onOpenContact={() => handleOpenContact()} />}
                  />
                  <Route
                    path="/projects"
                    element={<ProjectsPage onOpenContact={handleOpenContact} />}
                  />
                  <Route
                    path="/experience"
                    // element={<ExperiencePage onOpenContact={() => handleOpenContact()} />}
                  />
                  <Route
                    path="/contact"
                    element={
                      <ContactPage
                        selectedService={selectedService}
                        onSubmitted={handleFormSubmitted}
                      />
                    }
                  />
                </Routes>
              )}
            </CyberDoorTransition>
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating Cyber Audio & FX Control Widget */}
          <CyberAudioControlWidget />

          {/* Floating WhatsApp Business Chat Widget (9524227511) */}
          <WhatsAppChatWidget phoneNumber="9524227511" />

          {/* Interactive Resume View/Download Modal */}
          <ResumeModal
            isOpen={resumeModalOpen}
            onClose={() => setResumeModalOpen(false)}
            onCopySuccess={handleResumeCopySuccess}
          />

          {/* Toast Notification Container */}
          {toastMessage && (
            <Toast
              message={toastMessage}
              onClose={() => setToastMessage(null)}
            />
          )}
        </div>
      </CyberDoorProvider>
    </SmoothScroll>
  );
}

export default App;
