import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Work from './pages/Work';
import ProjectDetails from './pages/ProjectDetails';
import About from './pages/About';
import Services from './pages/Services';
import Journal from './pages/Journal';
import ArticleDetails from './pages/ArticleDetails';
import Contact from './pages/Contact';

export default function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-[#FBF9F5] text-[#121212] selection:bg-[#121212] selection:text-[#FBF9F5]">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Auto Scroll to Top on route change */}
      <ScrollToTop />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Animated Route Views */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<ArticleDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/process" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>

      {/* Large Luxury Footer */}
      <Footer />
    </div>
  );
}
