import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Zap, MapPin, ArrowRight, Shield, Workflow, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6" variant="secondary">
            <Target className="w-4 h-4 mr-2" />
            Complete Digital Solutions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Transform Your Business with AI-Powered Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Comprehensive digital solutions that build stronger reputations, automate complex workflows, 
            and dominate local search results for sustained business growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Three essential services that work together to strengthen your digital presence 
              and drive measurable business results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* AI Reputation Management */}
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">AI-Powered Reputation Management</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  Transform your online reputation with intelligent AI that monitors, analyzes, and responds to reviews 24/7. 
                  Build unshakeable trust and credibility that converts prospects into loyal customers.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Smart review monitoring across all platforms
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    AI-generated professional responses
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Comprehensive reputation analytics
                  </div>
                </div>

                <Link to="/reputation-management">
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">
                    Explore Reputation Management
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* AI Workflows */}
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Custom AI Workflow Automation</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  Revolutionize your operations with intelligent automation that learns, adapts, and executes complex tasks. 
                  Free your team to focus on strategy while AI handles the repetitive work.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Intelligent process automation
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Adaptive learning systems
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Real-time integration capabilities
                  </div>
                </div>

                <Link to="/ai-workflows">
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">
                    Discover AI Workflows
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Local SEO */}
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Local SEO & Google Business Management</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  Dominate your local market with strategic SEO optimization and expert Google Business Profile management. 
                  Be the first choice customers see when they search locally.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Google Business Profile optimization
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Local keyword domination
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Citation building & management
                  </div>
                </div>

                <Link to="/local-seo">
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">
                    Master Local SEO
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why These Services */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why These Three Services Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our integrated approach ensures every aspect of your digital presence works in harmony 
              to build trust, efficiency, and visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trust Foundation</h3>
              <p className="text-muted-foreground">
                Reputation management builds the trust foundation that makes all your other marketing efforts more effective.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Workflow className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Operational Excellence</h3>
              <p className="text-muted-foreground">
                AI workflows ensure consistent, high-quality customer experiences that reinforce your positive reputation.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Maximum Visibility</h3>
              <p className="text-muted-foreground">
                Local SEO puts your trusted, efficiently-run business in front of customers actively searching for your services.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Integrated Results</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              When these services work together, the results compound for exponential business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">300%</div>
              <p className="text-muted-foreground">Increase in customer trust</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <p className="text-muted-foreground">Reduction in manual work</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">250%</div>
              <p className="text-muted-foreground">Growth in local visibility</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">ROI</div>
              <p className="text-muted-foreground">Average return on investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start with any service or combine them all for maximum impact. Our experts will create 
            a custom strategy that fits your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Your Free Business Assessment
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Schedule a Strategy Session
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;