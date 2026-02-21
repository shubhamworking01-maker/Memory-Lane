import { ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import PhotoGallery from "./pages/PhotoGallery";
import ComingSoon from "./pages/ComingSoon";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><LandingPage /></PageWrapper>} />
              <Route path="/photos" element={<PageWrapper><PhotoGallery /></PageWrapper>} />
              <Route path="/videos" element={<PageWrapper><ComingSoon title="Video Memories" /></PageWrapper>} />
              <Route path="/personal" element={<PageWrapper><ComingSoon title="Personally Only" /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
