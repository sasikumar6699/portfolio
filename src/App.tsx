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
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#39FF14] selection:text-black flex flex-col justify-between">
      {/* Sticky Navbar */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Content Views with React Router */}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenContact={handleOpenContact}
                onOpenResume={() => setResumeModalOpen(true)}
                selectedService={selectedService}
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
            element={<ExperiencePage onOpenContact={() => handleOpenContact()} />}
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
      </main>

      {/* Footer */}
      <Footer />

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
  );
}

export default App;
