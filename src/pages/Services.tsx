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
        </div>
      </section>

      {/* Services Grid - Now 4 Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Four Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each service addresses a specific challenge Kenyan businesses face online. 
              Together, they create a complete digital growth system.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Service 1: Online Reputation Management */}
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Online Reputation Management</h3>
                <p className="text-muted-foreground mb-6">
                  Build and protect your business reputation with AI-powered review monitoring and response. 
                  We help Kenyan businesses manage Google Reviews, Facebook reviews, and 45+ platforms to increase customer trust and credibility.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    24/7 AI review monitoring across all platforms
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Automated professional review responses
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Review request campaigns to generate positive reviews
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Sentiment analysis and reputation reporting
                  </div>
                </div>

                <Link to="/reputation-management">
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">
                    Learn About Reputation Management
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Service 2: Local SEO */}
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Local SEO & Google Business</h3>
                <p className="text-muted-foreground mb-6">
                  Get found when Kenyan customers search for your services. 
                  We optimize your Google Business Profile, build local citations, and improve your rankings in Google Maps and local search results.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Google Business Profile setup and optimization
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Local keyword research and targeting
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Citation building across 50+ directories
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Google Maps ranking improvement
                  </div>
                </div>

                <Link to="/local-seo">
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">
                    Explore Local SEO Services
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Service 3: AI Workflow Automation */}
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">AI Workflow Automation</h3>
                <p className="text-muted-foreground mb-6">
                  Save time and reduce errors by automating repetitive business tasks. 
                  Our custom AI workflows handle lead management, customer follow-ups, invoicing, and more—freeing you to focus on growth.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Lead capture and automated follow-up
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Customer service automation
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Integration with your existing tools
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    85% reduction in manual task time
                  </div>
                </div>

                <Link to="/ai-workflows">
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">
                    Discover AI Automation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Service 4: Web Development with SEO */}
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">SEO-Optimized Web Development</h3>
                <p className="text-muted-foreground mb-6">
                  Get a professional website that ranks on Google and converts visitors into customers. 
                  We build mobile-first, fast-loading websites with SEO built-in from day one for Kenyan businesses.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Mobile-first responsive design
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Fast loading (under 3 seconds)
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    SEO optimization built-in
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    M-Pesa and payment integration
                  </div>
                </div>

                <Link to="/web-development">
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">
                    Explore Web Development
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How Services Connect */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Our Services Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each service strengthens the others. Your website attracts visitors, local SEO brings local customers, 
              reputation management builds trust, and automation keeps everything running smoothly.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <Code className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Website</h3>
              <p className="text-sm text-muted-foreground">
                Your digital storefront that attracts and converts visitors
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Local SEO</h3>
              <p className="text-sm text-muted-foreground">
                Gets you found when customers search nearby
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Star className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Reputation</h3>
              <p className="text-sm text-muted-foreground">
                Builds trust that makes customers choose you
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Automation</h3>
              <p className="text-sm text-muted-foreground">
                Keeps everything running efficiently 24/7
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Results for Kenyan Businesses</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              When these services work together, the results compound for exponential business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">350%</div>
              <p className="text-muted-foreground">Increase in local visibility</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Reputation improvement</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <p className="text-muted-foreground">Reduction in manual work</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3x</div>
              <p className="text-muted-foreground">More leads from website</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
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
      </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default Services;