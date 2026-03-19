import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Zap, MapPin, ArrowRight, Shield, Workflow, Target, Code } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const Services = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Digital Marketing Services Kenya | Radiance Sphere</title>
        <meta name="description" content="Radiance Sphere offers 4 core digital marketing services for Kenyan SMEs: Online Reputation Management, Local SEO, AI Workflow Automation, and SEO-Optimized Web Development." />
      </Helmet>
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container pt-8">
          <BackButton to="/" />
        </div>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <AnimateOnScroll animation="fade-up">
            <Badge className="mb-6" variant="secondary">
              <Target className="w-4 h-4 mr-2" />
              Digital Marketing Agency Kenya
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Digital Marketing Services for Kenyan SMEs
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Radiance Sphere helps small and medium-sized businesses in Kenya build trust, get found online, 
              and grow through four integrated digital marketing services.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Four Core Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Each service addresses a specific challenge Kenyan businesses face online. 
                Together, they create a complete digital growth system.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8 text-primary" />,
                title: "Online Reputation Management",
                desc: "Build and protect your business reputation with AI-powered review monitoring and response. We help Kenyan businesses manage Google Reviews, Facebook reviews, and 45+ platforms to increase customer trust and credibility.",
                features: ["24/7 AI review monitoring across all platforms", "Automated professional review responses", "Review request campaigns to generate positive reviews", "Sentiment analysis and reputation reporting"],
                link: "/reputation-management",
                cta: "Learn About Reputation Management"
              },
              {
                icon: <MapPin className="w-8 h-8 text-primary" />,
                title: "Local SEO & Google Business",
                desc: "Get found when Kenyan customers search for your services. We optimize your Google Business Profile, build local citations, and improve your rankings in Google Maps and local search results.",
                features: ["Google Business Profile setup and optimization", "Local keyword research and targeting", "Citation building across 50+ directories", "Google Maps ranking improvement"],
                link: "/local-seo",
                cta: "Explore Local SEO Services"
              },
              {
                icon: <Zap className="w-8 h-8 text-primary" />,
                title: "AI Workflow Automation",
                desc: "Save time and reduce errors by automating repetitive business tasks. Our custom AI workflows handle lead management, customer follow-ups, invoicing, and more—freeing you to focus on growth.",
                features: ["Lead capture and automated follow-up", "Customer service automation", "Integration with your existing tools", "85% reduction in manual task time"],
                link: "/ai-workflows",
                cta: "Discover AI Automation"
              },
              {
                icon: <Code className="w-8 h-8 text-primary" />,
                title: "SEO-Optimized Web Development",
                desc: "Get a professional website that ranks on Google and converts visitors into customers. We build mobile-first, fast-loading websites with SEO built-in from day one for Kenyan businesses.",
                features: ["Mobile-first responsive design", "Fast loading (under 3 seconds)", "SEO optimization built-in", "M-Pesa and payment integration"],
                link: "/web-development",
                cta: "Explore Web Development"
              }
            ].map((service, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                  <div className="relative p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.desc}</p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((f, i) => (
                        <div key={i} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          {f}
                        </div>
                      ))}
                    </div>
                    <Link to={service.link}>
                      <Button className="w-full group-hover:bg-primary/90 transition-colors">
                        {service.cta}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How Services Connect */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How Our Services Work Together</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Each service strengthens the others. Your website attracts visitors, local SEO brings local customers, 
                reputation management builds trust, and automation keeps everything running smoothly.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Code className="w-10 h-10 text-primary mx-auto mb-4" />, title: "Website", desc: "Your digital storefront that attracts and converts visitors" },
              { icon: <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />, title: "Local SEO", desc: "Gets you found when customers search nearby" },
              { icon: <Star className="w-10 h-10 text-primary mx-auto mb-4" />, title: "Reputation", desc: "Builds trust that makes customers choose you" },
              { icon: <Zap className="w-10 h-10 text-primary mx-auto mb-4" />, title: "Automation", desc: "Keeps everything running efficiently 24/7" },
            ].map((item, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <Card className="p-6 text-center h-full">
                  {item.icon}
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Results for Kenyan Businesses</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                When these services work together, the results compound for exponential business growth.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: "350%", label: "Increase in local visibility" },
              { stat: "98%", label: "Reputation improvement" },
              { stat: "85%", label: "Reduction in manual work" },
              { stat: "3x", label: "More leads from website" },
            ].map((item, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{item.stat}</div>
                  <p className="text-muted-foreground">{item.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <AnimateOnScroll animation="scale">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business Online?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start with one service or combine them all for maximum impact. 
              Book a free consultation and discover which services fit your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/contact">Get Your Free Business Assessment</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/consultation">Schedule a Strategy Session</Link>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
