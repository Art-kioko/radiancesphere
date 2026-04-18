
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

// Declare the dotlottie-wc custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dotlottie-wc': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src: string;
        autoplay?: boolean;
        loop?: boolean;
        style?: React.CSSProperties;
      }, HTMLElement>;
    }
  }
}

export default function HeroSection() {
  const { t } = useLanguage();
  const [currentAnimation, setCurrentAnimation] = useState(0);
  
  useEffect(() => {
    // Switch between animations every 7 seconds
    const interval = setInterval(() => {
      setCurrentAnimation((prev) => (prev === 0 ? 1 : 0));
    }, 7000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Content Container - Flex layout for animation and text */}
      <div className="relative min-h-[85vh] lg:min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 lg:px-16 pt-28 md:pt-32 pb-16 md:pb-20 z-20 max-w-7xl mx-auto gap-4 md:gap-8">
        
        {/* Lottie Animations - Left Side (Slideshow) */}
        <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-start items-center animate-fade-in relative">
          <dotlottie-wc 
            src="https://lottie.host/5515c80d-3441-471c-9be0-c5ee83d7546a/BN7kpzrvc3.lottie" 
            autoplay 
            loop
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              aspectRatio: '1 / 1',
              opacity: currentAnimation === 0 ? '1' : '0',
              transition: 'opacity 1s ease-in-out',
              position: 'absolute'
            }}
          />
          <dotlottie-wc 
            src="https://lottie.host/03dc3de4-212c-4b2a-a1df-3bfe2bb7efd8/RvNnGHQHK8.lottie" 
            autoplay 
            loop
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              aspectRatio: '1 / 1',
              opacity: currentAnimation === 1 ? '1' : '0',
              transition: 'opacity 1s ease-in-out',
              position: 'absolute'
            }}
          />
          {/* Spacer to maintain layout */}
          <div className="w-full max-w-[280px] md:max-w-[400px] aspect-square" />
        </div>

        {/* Hero Content - Right Side */}
        <div className="flex-1 w-full lg:w-1/2 text-center lg:text-left animate-fade-in">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 md:mb-4">
            {t.hero.title}
          </h1>
          <p className="text-sm md:text-lg text-foreground/80 mb-4 md:mb-8 max-w-2xl mx-auto lg:mx-0">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 md:gap-4">
            <Button asChild size="lg" variant="heroSolid" className="w-full sm:w-auto min-w-[180px] md:min-w-[200px] rounded-full transform transition-all duration-300 hover:translate-y-[-2px] min-h-[44px] md:min-h-[48px] text-sm md:text-base">
              <Link to="/contact">{t.hero.getStarted}</Link>
            </Button>
            <Button asChild variant="hero" size="lg" className="w-full sm:w-auto min-w-[180px] md:min-w-[200px] rounded-full transform transition-all duration-300 hover:translate-y-[-2px] min-h-[44px] md:min-h-[48px] text-sm md:text-base">
              <Link to="/services">{t.hero.exploreServices}</Link>
            </Button>
          </div>
        </div>
      </div>
      
      
      {/* Animated wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden z-20">
        <svg 
          className="absolute bottom-0 w-full h-24 fill-background"
          preserveAspectRatio="none"
          viewBox="0 0 1440 74"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
            className="animate-wave opacity-50"
          />
          <path 
            d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
            className="animate-wave opacity-100 [animation-delay:-4s]"
          />
        </svg>
      </div>
    </section>
  );
}
