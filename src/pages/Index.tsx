import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import ApartmentCard, { ApartmentProps } from "@/components/ApartmentCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Utensils, Waves, LifeBuoy, MapPin, Coffee } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import customerService5 from "@/assets/customer-service-5.png";
import customerService6 from "@/assets/customer-service-6.png";
import customerService7 from "@/assets/customer-service-7.png";

// Featured services data
const featuredServices: ApartmentProps[] = [
  {
    id: "1",
    name: "AI Reputation Management",
    description: "Harness AI to monitor and respond to reviews, enhance your brand image, and grow customer trust.",
    price: 1200,
    capacity: 50,
    size: 24,
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop",
    location: "Online",
    features: ["24/7 Monitoring", "Auto-Response", "Review Analysis", "Sentiment Tracking", "Report Dashboard", "Alert System"]
  },
  {
    id: "2",
    name: "Custom AI Workflow Automation",
    description: "Streamline tasks and boost productivity with custom-built AI systems tailored to your business.",
    price: 2500,
    capacity: 100,
    size: 168,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    location: "Custom Setup",
    features: ["Process Automation", "Custom AI Models", "Integration Support", "Training Included", "Ongoing Support", "Performance Analytics"]
  },
  {
    id: "3",
    name: "Local SEO & Google Business",
    description: "Dominate local search and get found on Google with optimized business listings and review strategies.",
    price: 800,
    capacity: 30,
    size: 24,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    location: "Local Markets",
    features: ["Google My Business", "Local Keywords", "Citation Building", "Review Management", "Local Content", "Map Optimization"]
  }
];

export default function Index() {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const features = [
    {
      icon: <Waves className="h-8 w-8 text-primary" />,
      title: t.home.benefits.features.reputation.title,
      description: t.home.benefits.features.reputation.description
    },
    {
      icon: <LifeBuoy className="h-8 w-8 text-primary" />,
      title: t.home.benefits.features.automation.title,
      description: t.home.benefits.features.automation.description
    },
    {
      icon: <Utensils className="h-8 w-8 text-primary" />,
      title: t.home.benefits.features.seo.title,
      description: t.home.benefits.features.seo.description
    },
    {
      icon: <Wifi className="h-8 w-8 text-primary" />,
      title: t.home.benefits.features.analytics.title,
      description: t.home.benefits.features.analytics.description
    },
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: t.home.benefits.features.support.title,
      description: t.home.benefits.features.support.description
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: t.home.benefits.features.growth.title,
      description: t.home.benefits.features.growth.description
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Radiance Sphere | AI-Powered Digital Marketing Agency in Kenya</title>
        <meta name="description" content="Radiance Sphere is a Kenya-based digital marketing agency specializing in AI-powered online reputation management, local SEO, AI workflow automation, and SEO-optimized web development for SMEs in Nairobi and across Kenya." />
        <link rel="canonical" href="https://radiancesphere.netlify.app/" />
        <meta property="og:title" content="Radiance Sphere | AI-Powered Digital Marketing Agency in Kenya" />
        <meta property="og:description" content="Kenya's leading AI-powered digital marketing agency helping SMEs grow through reputation management, local SEO, AI workflows, and web development." />
        <meta property="og:url" content="https://radiancesphere.netlify.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        
        {/* Welcome Section */}
        <section id="welcome" className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll animation="fade-right">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  {t.home.welcome.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  {t.home.welcome.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t.home.welcome.description1}
                </p>
                <p className="text-muted-foreground mb-8">
                  {t.home.welcome.description2}
                </p>
                <Button asChild className="btn-primary">
                  <Link to="/about">
                    {t.home.welcome.learnMore} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fade-left" delay={200}>
                <div className="relative mx-4 md:mx-0">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img 
                      src={customerService7}
                      alt="AI Chat Technology" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-1/2 md:w-2/3 rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={customerService5}
                      alt="AI Customer Service" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-2/5 md:w-1/2 rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={customerService6}
                      alt="Review Management" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
        
        {/* Consultation Form Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll animation="fade-right">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  {t.home.consultation.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  {t.home.consultation.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t.home.consultation.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {t.home.consultation.benefits.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                        <ArrowRight className="h-3 w-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fade-up" delay={200}>
                <BookingForm />
              </AnimateOnScroll>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Featured Services */}
        <section className="section">
          <div className="container">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  {t.home.featuredServices.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                  {t.home.featuredServices.title}
                </h2>
                <p className="text-muted-foreground">
                  {t.home.featuredServices.description}
                </p>
              </div>
            </AnimateOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimateOnScroll animation="fade-up" delay={0}>
                <div className="glass-card p-8 rounded-xl text-center h-full">
                  <div className="mb-6 p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto flex items-center justify-center">
                    <Waves className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{t.home.featuredServices.aiReputation.title}</h3>
                  <p className="text-muted-foreground mb-6">{t.home.featuredServices.aiReputation.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/services">{t.home.featuredServices.aiReputation.buttonText}</Link>
                  </Button>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={150}>
                <div className="glass-card p-8 rounded-xl text-center h-full">
                  <div className="mb-6 p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto flex items-center justify-center">
                    <LifeBuoy className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{t.home.featuredServices.aiWorkflows.title}</h3>
                  <p className="text-muted-foreground mb-6">{t.home.featuredServices.aiWorkflows.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/services">{t.home.featuredServices.aiWorkflows.buttonText}</Link>
                  </Button>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={300}>
                <div className="glass-card p-8 rounded-xl text-center h-full">
                  <div className="mb-6 p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{t.home.featuredServices.localSeo.title}</h3>
                  <p className="text-muted-foreground mb-6">{t.home.featuredServices.localSeo.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/services">{t.home.featuredServices.localSeo.buttonText}</Link>
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>
            
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="text-center mt-12">
                <Button asChild className="btn-primary">
                  <Link to="/services">
                    {t.home.featuredServices.viewAll} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="section bg-card">
          <div className="container">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  {t.home.benefits.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                  {t.home.benefits.title}
                </h2>
                <p className="text-muted-foreground">
                  {t.home.benefits.description}
                </p>
              </div>
            </AnimateOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                  <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center h-full">
                    <div className="mb-4 p-3 rounded-full bg-primary/10">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative py-24 bg-primary/5">
          <div className="container">
            <AnimateOnScroll animation="scale">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t.home.cta.title}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {t.home.cta.description}
                </p>
                <Button asChild size="lg" className="btn-primary">
                  <Link to="/contact">{t.home.cta.getStarted}</Link>
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
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
      </main>
      
      <Footer />
    </div>
  );
}
