import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, TrendingUp, Users, MessageSquare, BarChart3, CheckCircle, Clock, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Helmet } from "react-helmet";
import reputationImage from "@/assets/reputation-reviews.png";
import heroImage from "@/assets/online-reviews-hero.webp";

const ReputationManagement = () => {
  const { t } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingTiers = [
    {
      name: "Basic (Starter)",
      setupFee: 3500,
      monthlyPrice: 9500,
      description: "Perfect for small businesses",
      gradient: "from-blue-400 to-blue-600",
      features: [
        "1 Google Business Profile",
        "AI-drafted & auto-posted responses",
        "WhatsApp/Email alerts to owner",
        "Limited human oversight (setup & alerts)",
        "Reviews Summary Reports",
        "Basic Analytics Dashboard"
      ],
      cta: "Get Started"
    },
    {
      name: "Standard (Growth)",
      setupFee: 7500,
      monthlyPrice: 20500,
      description: "For growing businesses",
      gradient: "from-purple-400 to-purple-600",
      popular: true,
      features: [
        "Up to 3 Google Business Profiles",
        "AI-drafted & auto-posted responses",
        "Auto-review request",
        "WhatsApp/Email alerts",
        "Moderate human oversight (draft reviews)",
        "Sentiment Analysis & Insights",
        "Advanced Analytics Dashboard",
        "Monthly Performance Reports"
      ],
      cta: "Get Started"
    },
    {
      name: "Pro (Premium)",
      setupFee: null,
      monthlyPrice: null,
      description: "For established businesses",
      gradient: "from-amber-400 to-amber-600",
      features: [
        "Unlimited Google Business Profiles",
        "AI-drafted & auto-posted responses",
        "Auto-review request",
        "WhatsApp/Email/SMS alerts",
        "Full human oversight (draft & edit reviews)",
        "Advanced Sentiment Analysis",
        "Competitive Analysis",
        "Custom Analytics Dashboards",
        "Weekly Performance Reports",
        "Priority Support"
      ],
      cta: "Request Quote"
    }
  ];

  const calculatePrice = (price: number | null) => {
    if (price === null) return null;
    if (isAnnual) {
      const discountedPrice = Math.round(price * 0.8); // 20% discount
      return discountedPrice.toLocaleString();
    }
    return price.toLocaleString();
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does AI-powered reputation management work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI-powered reputation management system automatically monitors  review platforms 24/7, analyzes sentiment in real-time, and generates personalized responses that match your brand voice. It uses advanced natural language processing to understand review context and identify critical issues affecting your reputation."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you respond to negative reviews?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI system detects new reviews within minutes and can generate appropriate responses immediately. You'll receive instant alerts for negative reviews, allowing for crisis management before reputation damage spreads. Response time is typically under 15 minutes for critical issues."
        }
      },
      {
        "@type": "Question",
        "name": "Which review platforms do you monitor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We monitor all major review platforms including Google Business Profile, Facebook, Yelp, TripAdvisor, Trustpilot, and 45+ other platforms. Our system automatically fetches reviews using advanced APIs and web scraping technology to ensure comprehensive coverage."
        }
      },
      {
        "@type": "Question",
        "name": "Can the AI responses be customized to match my brand voice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. Our AI learns your brand voice, tone, and messaging style to craft responses that sound authentically like your business. You can review and approve responses before they're posted, and the AI continuously improves based on your feedback."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of ROI can I expect from reputation management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our clients typically see a 98% improvement in their online reputation within 90 days. This translates to 70% more lead conversions, 15-20% pricing power increase, and 40% better customer retention. Strong reputation directly impacts revenue and customer lifetime value."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need technical knowledge to use your reputation management system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No technical knowledge required. Our platform is designed for business owners with comprehensive dashboards that are easy to understand. We handle all the technical setup, platform integrations, and AI configuration. You simply monitor results and approve responses."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container pt-8">
          <BackButton to="/services" label="Back to Services" />
        </div>
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <div className="max-w-6xl animate-fade-in">
            <Badge className="mb-6 bg-white/10 text-white border-white/20" variant="secondary">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Solution
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              AI-Powered Reputation Management
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Transform your online reputation with intelligent AI that monitors, analyzes, and responds to reviews 24/7, 
              building unshakeable trust and credibility for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="heroSolid" className="text-lg px-8 min-w-[250px] rounded-full">
                <a href="/contact">Start Building Your Reputation</a>
              </Button>
              <Button asChild size="lg" variant="hero" className="text-lg px-8 min-w-[200px] rounded-full">
                <a href="#pricing">Pricing</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Reputation is Everything</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              In today's digital world, 93% of customers read reviews before making a purchase. 
              A single negative review can cost you thousands in lost revenue.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lost Revenue</h3>
              <p className="text-muted-foreground">
                Poor reviews can decrease revenue by up to 70% and drive customers to competitors.
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Trust</h3>
              <p className="text-muted-foreground">
                Negative reviews spread faster than positive ones, damaging your brand's credibility.
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Time Consuming</h3>
              <p className="text-muted-foreground">
                Manually monitoring and responding to reviews across platforms takes hours daily.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI-Powered Solution</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our intelligent AI system works 24/7 to protect and enhance your online reputation automatically.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={reputationImage} 
                alt="AI-powered reputation management dashboard showing review monitoring and sentiment analysis"
                className="rounded-lg shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Monitoring</h3>
                  <p className="text-muted-foreground">
                    AI automatically tracks reviews across 45+ platforms, catching every mention of your business in real-time.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sentiment Analysis</h3>
                  <p className="text-muted-foreground">
                    Advanced AI analyzes review sentiment and identifies critical issues before they escalate.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Responses</h3>
                  <p className="text-muted-foreground">
                    AI generates personalized responses matching your brand voice, ready for approval or auto-posting.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Review Generation</h3>
                  <p className="text-muted-foreground">
                    Automated campaigns request reviews from satisfied customers, building positive momentum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Transform Your Business Reputation</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See measurable results in revenue, customer trust, and operational efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <h3 className="text-xl font-semibold mb-2">Reputation Improvement</h3>
              <p className="text-muted-foreground">
                Average rating increase within 90 days of implementation.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">70%</div>
              <h3 className="text-xl font-semibold mb-2">More Conversions</h3>
              <p className="text-muted-foreground">
                Higher conversion rates from improved online reputation and trust.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">15-20%</div>
              <h3 className="text-xl font-semibold mb-2">Pricing Power</h3>
              <p className="text-muted-foreground">
                Ability to charge premium prices with stronger reputation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose the plan that fits your business needs. All plans include AI-powered review management.
            </p>
            
            {/* Monthly/Annual Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                role="switch"
                aria-checked={isAnnual}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Annual <Badge variant="secondary" className="ml-1 text-xs">Save 20%</Badge>
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`flex flex-col shadow-lg hover:shadow-xl transition-all ${tier.popular ? 'ring-2 ring-primary md:scale-105' : ''}`}>
                {/* Tier Label */}
                {tier.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold rounded-t-lg">
                    Most Popular
                  </div>
                )}
                <div className="bg-gradient-to-br from-muted to-muted/50 px-6 py-4 text-center">
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                </div>
                
                {/* Gradient Header with Pricing */}
                <div className={`bg-gradient-to-br ${tier.gradient} text-white p-6 md:p-8 text-center`}>
                  {tier.setupFee !== null && (
                    <div className="mb-4">
                      <div className="text-sm opacity-90">Setup Fee</div>
                      <div className="text-2xl font-bold">
                        KES {calculatePrice(tier.setupFee) || tier.setupFee.toLocaleString()}
                      </div>
                    </div>
                  )}
                  
                  <div className={tier.setupFee !== null ? 'border-t-2 border-white/50 pt-4 mt-4' : ''}>
                    {tier.monthlyPrice !== null ? (
                      <>
                        <div className="text-4xl md:text-5xl font-bold mb-2">
                          KES {calculatePrice(tier.monthlyPrice)}
                        </div>
                        <div className="text-sm md:text-base font-medium">
                          per month{isAnnual ? ' (billed annually)' : ''}
                        </div>
                        {isAnnual && (
                          <div className="text-xs mt-3 opacity-90 bg-white/10 rounded-full px-3 py-1 inline-block">
                            Save KES {(tier.monthlyPrice * 0.2).toLocaleString()}/month
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-2xl md:text-3xl font-bold">
                        Contact for Pricing
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <CardContent className="flex-1 p-6 bg-card">
                  <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    asChild 
                    className="w-full mt-auto text-base py-6"
                    variant={tier.popular ? "default" : "outline"}
                    size="lg"
                  >
                    <a href="/contact">{tier.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Online Reputation?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get a free reputation audit and see how AI can protect and grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="min-w-[200px]">
              <a href="/contact">Get Free Audit</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-w-[200px]">
              <a href="/consultation-booking">Schedule Consultation</a>
            </Button>
          </div>
        </div>
      </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ReputationManagement;
