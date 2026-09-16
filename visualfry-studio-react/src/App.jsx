import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import WhatsAppFloat from './components/WhatsAppFloat';
import CursorTrail from './components/CursorTrail';
import GlowField from './components/GlowField';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import { WorkProvider } from './context/WorkContext';
import Home from './pages/Home';
import WorkPage from './pages/WorkPage';
import ServiceDetail from './pages/ServiceDetail';
import AdminPanel from './pages/AdminPanel';
import AdminAuth from './pages/AdminAuth';
import './index.css';

function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
          }
        });
      },
      { threshold: 0.15 }
    );

    const observeElements = () => {
      document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    };

    observeElements();

    let timeoutId;
    const mutationObserver = new MutationObserver(() => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(observeElements, 200);
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      io.disconnect();
      mutationObserver.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <LoadingScreen>
      <WorkProvider>
        <HelmetProvider>
          <Router>
            <ScrollToTop />
            <GlowField />
            <Navbar />
            <WhatsAppFloat />
            <CursorTrail />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/services/:serviceId" element={<ServiceDetail />} />
                <Route
                  path="/admin"
                  element={
                    <AdminAuth>
                      <AdminPanel />
                    </AdminAuth>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </Router>
        </HelmetProvider>
      </WorkProvider>
    </LoadingScreen>
  );
}

export default App;
