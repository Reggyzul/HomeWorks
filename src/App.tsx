/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import ServicePage from './components/ServicePage';
import { servicesData } from './data';


export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [prefillMessage, setPrefillMessage] = useState('');
  const [initialCategory, setInitialCategory] = useState('Villa');
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [isContactPageActive, setIsContactPageActive] = useState<boolean>(false);
  const [isAboutPageActive, setIsAboutPageActive] = useState<boolean>(false);

  useEffect(() => {
    const serviceMap: { [key: string]: string } = {
      'homeworks-realty': 'homeworks-realty',
      'homeworks-realty/': 'homeworks-realty',
      'homeworks_realty': 'homeworks-realty',
      'homeworksrealty': 'homeworks-realty',
      'realty': 'homeworks-realty',

      'homeworks-engineering': 'homeworks-engineering',
      'homeworks-engineering/': 'homeworks-engineering',
      'homeworks_engineering': 'homeworks-engineering',
      'homeworksengineering': 'homeworks-engineering',
      'engineering': 'homeworks-engineering',

      'homeworks-build': 'homeworks-build',
      'homeworks-build/': 'homeworks-build',
      'homeworks_build': 'homeworks-build',
      'homeworksbuild': 'homeworks-build',
      'build': 'homeworks-build',

      'homeworks-interior': 'homeworks-interior',
      'homeworks-interior/': 'homeworks-interior',
      'homeworks_interior': 'homeworks-interior',
      'homeworksinterior': 'homeworks-interior',
      'interior': 'homeworks-interior',

      'homeworks-clean': 'homeworks-clean',
      'homeworks-clean/': 'homeworks-clean',
      'homeworks_clean': 'homeworks-clean',
      'homeworksclean': 'homeworks-clean',
      'clean': 'homeworks-clean',

      'homeworks-care': 'homeworks-care',
      'homeworks-care/': 'homeworks-care',
      'homeworks_care': 'homeworks-care',
      'homeworkscare': 'homeworks-care',
      'care': 'homeworks-care',

      'sofaworks': 'sofaworks',
      'sofaworks/': 'sofaworks',
      'sofawork': 'sofaworks',

      'raja-sofa': 'raja-sofa',
      'raja-sofa/': 'raja-sofa',
      'rajasofa': 'raja-sofa'
    };

    const handleNavigationCheck = () => {
      const path = window.location.pathname.replace('/', '').toLowerCase();
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const target = path || hash;

      if (target === 'contact') {
        setIsContactPageActive(true);
        setIsAboutPageActive(false);
        setActiveServiceId(null);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
        return;
      }

      if (target === 'about' || target === 'founder') {
        setIsAboutPageActive(true);
        setIsContactPageActive(false);
        setActiveServiceId(null);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
        return;
      }

      const matchedId = serviceMap[target];
      if (matchedId) {
        if (matchedId === 'raja-sofa') {
          window.location.href = 'https://rajasofa.id';
          return;
        }
        setActiveServiceId(matchedId);
        setIsContactPageActive(false);
        setIsAboutPageActive(false);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
      } else {
        setIsContactPageActive(false);
        setIsAboutPageActive(false);
        if (hash) {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    // Run on initial load
    handleNavigationCheck();

    // Listen to popstate for browser back/forward buttons
    const handlePopState = () => {
      const path = window.location.pathname.replace('/', '').toLowerCase();
      if (path === 'contact') {
        setIsContactPageActive(true);
        setIsAboutPageActive(false);
        setActiveServiceId(null);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
        return;
      }

      if (path === 'about' || path === 'founder') {
        setIsAboutPageActive(true);
        setIsContactPageActive(false);
        setActiveServiceId(null);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
        return;
      }

      const matchedId = serviceMap[path];
      if (matchedId) {
        if (matchedId === 'raja-sofa') {
          window.location.href = 'https://rajasofa.id';
          return;
        }
        setActiveServiceId(matchedId);
        setIsContactPageActive(false);
        setIsAboutPageActive(false);
      } else {
        setActiveServiceId(null);
        setIsContactPageActive(false);
        setIsAboutPageActive(false);
        setTimeout(() => {
          const element = document.getElementById('services');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleNavigationCheck);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleNavigationCheck);
    };
  }, []);

  const handleSelectService = (id: string) => {
    if (id === 'home') {
      setActiveServiceId(null);
      setIsContactPageActive(false);
      setIsAboutPageActive(false);
      window.history.pushState(null, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (id === 'raja-sofa') {
      window.open('https://rajasofa.id', '_blank');
      return;
    }
    setIsContactPageActive(false);
    setIsAboutPageActive(false);
    setActiveServiceId(id);
    const servicePaths: { [key: string]: string } = {
      'homeworks-realty': 'Homeworks-Realty',
      'homeworks-engineering': 'Homeworks-Engineering',
      'homeworks-build': 'Homeworks-Build',
      'homeworks-interior': 'Homeworks-Interior',
      'homeworks-clean': 'Homeworks-Clean',
      'homeworks-care': 'Homeworks-Care',
      'sofaworks': 'SofaWorks',
      'raja-sofa': 'Raja-Sofa'
    };
    const pathName = servicePaths[id];
    if (pathName) {
      window.history.pushState(null, '', '/' + pathName);
    } else {
      window.history.pushState(null, '', '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setActiveServiceId(null);
    setIsAboutPageActive(false);
    setIsContactPageActive(false);
    window.history.pushState(null, '', '/');
    setTimeout(() => {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleOpenConsultation = () => {
    setPrefillMessage('');
    setInitialCategory('Villa');
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => setIsConsultationOpen(false);


  const handleSelectSection = (sectionId: string) => {
    if (sectionId === 'contact') {
      setIsContactPageActive(true);
      setIsAboutPageActive(false);
      setActiveServiceId(null);
      window.history.pushState(null, '', '/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'about') {
      setIsAboutPageActive(true);
      setIsContactPageActive(false);
      setActiveServiceId(null);
      window.history.pushState(null, '', '/founder');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (activeServiceId || isContactPageActive || isAboutPageActive) {
      setActiveServiceId(null);
      setIsContactPageActive(false);
      setIsAboutPageActive(false);
      window.history.pushState(null, '', '/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const activeService = servicesData.find(s => s.id === activeServiceId);

  return (
    <div className="relative min-h-screen bg-brand-beige text-brand-charcoal selection:bg-brand-bronze selection:text-brand-beige">
      
      {/* Sticky Top-Progress Navigation */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        onSelectService={handleSelectService}
        onSelectSection={handleSelectSection}
      />

       {activeService ? (
        /* Dedicated Service Detail Page (Dilembar Selanjutnya) */
        <ServicePage
          service={activeService}
          onBackToHome={handleBackToHome}
          onOpenConsultation={handleOpenConsultation}
        />
      ) : isContactPageActive ? (
        /* Dedicated Contact Us Page */
        <Contact
          onBackToHome={() => {
            setIsContactPageActive(false);
            window.history.pushState(null, '', '/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : isAboutPageActive ? (
        /* Dedicated Founder Profile Page */
        <About
          onBackToHome={() => {
            setIsAboutPageActive(false);
            window.history.pushState(null, '', '/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : (
        <>
          {/* Hero Entrance Hub */}
          <Hero onOpenConsultation={handleOpenConsultation} />

          {/* Main Structural Flow */}
          <main>
            {/* Services Showcase Catalog */}
            <Services
              onOpenConsultation={handleOpenConsultation}
              activeServiceId={activeServiceId}
              onClearActiveService={() => setActiveServiceId(null)}
              onSelectService={handleSelectService}
            />

            {/* Why Choose Us trust parameters */}
            <WhyChooseUs />

            {/* Dynamic searchable FAQ accordions */}
            <FAQ />
          </main>
        </>
      )}

      {/* Luxurious Editorial Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Sticky Floating WhatsApp Widget */}
      <a
        id="floating-whatsapp-widget"
        href="https://wa.me/6285181052950"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg hover:scale-110 transition-all flex items-center justify-center w-14 h-14"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>

      {/* Consultation Request Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        prefillMessage={prefillMessage}
        initialCategory={initialCategory}
      />

    </div>
  );
}

