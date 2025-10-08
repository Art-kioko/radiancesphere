
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import onlineReputation1 from "@/assets/online-reputation-1.png";
import onlineReputation2 from "@/assets/online-reputation-2.jpeg";
import onlineReputation3 from "@/assets/online-reputation-3.webp";
import onlineReputation4 from "@/assets/online-reputation-4.jpg";

export default function HeroSection() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  
  const heroImages = [
    onlineReputation1,
    onlineReputation2,
    onlineReputation3,
    onlineReputation4
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Calculate parallax effect
  const backgroundY = scrollY * 0.5;
  const contentY = scrollY * 0.2;
  
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background carousel with parallax */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${backgroundY}px)` }}
      >
        <Carousel
          className="h-full w-full"
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div
                  className="h-full w-full bg-cover bg-center opacity-50"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: `center ${50 + scrollY * 0.05}%`,
                    backgroundSize: "cover",
                    filter: "brightness(0.7) contrast(1.1)"
                  }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      
      {/* Content */}
      <div
        className="relative h-full flex flex-col justify-center items-center text-center px-4 pt-24 md:pt-0"
        style={{ transform: `translateY(${contentY}px)` }}
      >
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block text-white/90 text-sm md:text-lg mb-4 tracking-wide border-b border-white/30 pb-2">
            {t.hero.subtitle}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
            {t.hero.title}
          </h1>
          <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
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
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-24 fill-white dark:fill-background"
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
