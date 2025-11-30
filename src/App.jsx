import React, { useState, useEffect, Suspense, lazy } from "react";

// --- STATIC IMPORTS (Load immediately for better User Experience) ---
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FloatingButtons from "./components/FloatingButtons";

// --- LAZY IMPORTS (Load only when needed to speed up initial load) ---
const Services = lazy(() => import("./components/Services"));
const Gallery = lazy(() => import("./components/Gallery"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Achievements = lazy(() => import("./components/Achievements"));
const Certificates = lazy(() => import("./components/Certificates"));
const Image = lazy(() => import("./components/Image"));
const ReelsGrid = lazy(() => import("./components/ReelsGrid"));
const Location = lazy(() => import("./components/Location.jsx"));

// A simple loading spinner/text component
const LoadingFallback = () => (
  <div style={{ padding: "50px", textAlign: "center", fontSize: "1.2rem" }}>
    Loading section...
  </div>
);

function App() {
  // State to toggle between the Main Home Page and the Reels Page
  const [showReelsPage, setShowReelsPage] = useState(false);

  // Scroll to top whenever the view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [showReelsPage]);

  // If the "See More" button was clicked, show ONLY the ReelsGrid page
  if (showReelsPage) {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <ReelsGrid onBack={() => setShowReelsPage(false)} />
      </Suspense>
    );
  }

  // Otherwise, show the normal website
  return (
    <>
      <Navbar />
      <FloatingButtons />
      <main>
        {/* Hero loads instantly */}
        <Hero />

        {/* The rest of the page loads lazily as the user scrolls or as bandwidth allows */}
        <Suspense fallback={<LoadingFallback />}>
          <Services />
          <Image />

          {/* Pass the function to switch pages to the Gallery component */}
          <Gallery onSeeMore={() => setShowReelsPage(true)} />

          <Certificates />
          <Achievements />
          <Location />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

export default App;
