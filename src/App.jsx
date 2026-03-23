import React, { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import SpiderManMask from "./sections/SpiderManMask";

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <ReactLenis
      root
      options={{ lerp: 0.05, duration: 1.5, smoothTouch: true }}
      className="relative w-screen min-h-screen overflow-x-hidden"
    >
      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <Navbar />
        <div className="sticky top-0 h-screen w-full z-0">
          <SpiderManMask />
        </div>
        <div className="relative z-10 bg-white rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex flex-col">
          <ServiceSummary />
          <Services />
          <About />
          <Works />
          <ContactSummary />
          <Contact />
        </div>
      </div>
    </ReactLenis>
  );
};

export default App;
