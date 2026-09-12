import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GlowField from './components/GlowField';
import Footer from './components/Footer';
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

    // Since we have routing, we need to re-observe when the DOM changes
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      io.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <WorkProvider>
      <Router>
        <GlowField />
        <Navbar />
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
    </WorkProvider>
  );
}

export default App;
