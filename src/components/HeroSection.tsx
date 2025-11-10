
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
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
  
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Content Container - Flex layout for animation and text */}
      <div className="relative h-full flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-16 pt-24 md:pt-0 z-20 max-w-7xl mx-auto gap-8">
        
        {/* Lottie Animation - Left Side */}
        <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-start items-center animate-fade-in">
          <dotlottie-wc 
            src="https://lottie.host/5515c80d-3441-471c-9be0-c5ee83d7546a/BN7kpzrvc3.lottie" 
            autoplay 
            loop
            style={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              aspectRatio: '1 / 1'
            }}
          />
        </div>

        {/* Hero Content - Right Side */}
        <div className="flex-1 w-full lg:w-1/2 text-center lg:text-left animate-fade-in">
          <span className="inline-block text-foreground/80 text-sm md:text-lg mb-4 tracking-wide border-b border-border pb-2">
            {t.hero.subtitle}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 md:mb-4">
            {t.hero.title}
          </h1>
          <p className="text-base md:text-lg text-foreground/80 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
            <Button asChild size="lg" variant="heroSolid" className="w-full sm:w-auto min-w-[200px] rounded-full transform transition-all duration-300 hover:translate-y-[-2px] min-h-[48px]">
              <Link to="/contact">{t.hero.getStarted}</Link>
            </Button>
            <Button asChild variant="hero" size="lg" className="w-full sm:w-auto min-w-[200px] rounded-full transform transition-all duration-300 hover:translate-y-[-2px] min-h-[48px]">
              <Link to="/services">{t.hero.exploreServices}</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-foreground animate-bounce z-30">
        <a 
          href="#welcome" 
          className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity min-h-[48px] p-2"
          aria-label="Scroll down to content"
        >
          <span className="text-sm mb-2">{t.hero.scrollDown}</span>
          <ChevronDown className="h-6 w-6" />
        </a>
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
