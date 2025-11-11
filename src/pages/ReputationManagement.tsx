import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Star, Shield, TrendingUp, Users, MessageSquare, BarChart3, CheckCircle, Clock, Search, ChevronDown } from "lucide-react";
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
  const [showAllFeatures, setShowAllFeatures] = useState(false);

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

  const calculatePrice = (monthlyPrice: string) => {
    const numPrice = parseInt(monthlyPrice.replace(/[^0-9]/g, ''));
    if (isAnnual) {
      const discountedMonthly = Math.round(numPrice * 0.8); // 20% discount
      return `KES ${discountedMonthly.toLocaleString()}/mo`;
    }
    return monthlyPrice;
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
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        
        {/* Content */}
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
                <MessageSquare className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Missed Opportunities</h3>
              <p className="text-muted-foreground">
                Unanswered reviews and poor online presence mean missing out on potential customers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our AI Reputation Solution</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Advanced artificial intelligence that works around the clock to protect, enhance, 
              and grow your online reputation across all platforms.
            </p>
          </div>

          <div className="mb-16 p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Search className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Review Fetch</h3>
                      <p className="text-muted-foreground">
                        Automatically collects reviews from 50+ platforms using advanced APIs and web scraping, 
                        ensuring comprehensive coverage of your online presence.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Smart Review Monitoring</h3>
                      <p className="text-muted-foreground">
                        AI monitors all review platforms 24/7, instantly alerting you to new reviews 
                        and sentiment changes across Google, Facebook, Yelp, and more.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Sentiment Analysis</h3>
                      <p className="text-muted-foreground">
                        Advanced AI analyzes the emotional tone and context of reviews to identify 
                        critical issues and positive trends affecting your reputation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Intelligent Response Generation</h3>
                      <p className="text-muted-foreground">
                        AI crafts personalized, professional responses that match your brand voice, 
                        turning negative experiences into opportunities for improvement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Reputation Analytics</h3>
                      <p className="text-muted-foreground">
                        Comprehensive dashboards track reputation trends, sentiment analysis, 
                        and competitive benchmarking to guide strategic decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/1b2f1422-a692-4c56-8639-1d04cfccdba8.png" 
                  alt="Happy customer with positive review notifications" 
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Reputation Score</h3>
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-muted-foreground">Average client improvement in online reputation within 90 days</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why It's Essential in the Modern-Day Era</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Modern consumers make decisions faster than ever. Your reputation needs to work 
              as hard as you do to capture and convert potential customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Instant Crisis Management</h3>
              <p className="text-muted-foreground">
                AI detects reputation threats within minutes, not days, allowing for immediate 
                response before damage spreads across social networks.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Competitive Advantage</h3>
              <p className="text-muted-foreground">
                Businesses with strong online reputations charge 15-20% more than competitors 
                and convert 70% more leads into customers.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Customer Lifetime Value</h3>
              <p className="text-muted-foreground">
                Positive reputation management increases customer retention by 40% and generates 
                more word-of-mouth referrals.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Local Search Dominance</h3>
              <p className="text-muted-foreground">
                Strong reputation signals boost local SEO rankings, making your business more 
                visible when customers search for your services.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Employee Morale</h3>
              <p className="text-muted-foreground">
                A positive company reputation attracts better talent and keeps employees 
                proud to represent your brand.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Investment Protection</h3>
              <p className="text-muted-foreground">
                Protect your marketing investments by ensuring positive brand perception 
                amplifies all other growth efforts.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Reputation Management Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI-powered reputation management features.
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-primary' : 'bg-muted'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
                Annual
                {isAnnual && <Badge className="ml-2" variant="secondary">Save 20%</Badge>}
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 relative">
            {/* Basic Tier */}
            <div className="relative">
              <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow">
                {/* Blue gradient header */}
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-t-lg text-center">
                  <div className="text-5xl font-bold mb-1">
                    ${isAnnual ? '6' : '7.5'}
                  </div>
                  <div className="border-t-2 border-white/50 pt-2 mt-2">
                    <span className="text-lg font-medium">month</span>
                  </div>
                </div>
                {/* White content area */}
                <CardContent className="flex-1 p-6 bg-white dark:bg-card">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">Basic</h3>
                  <p className="text-sm text-muted-foreground mb-6">membership</p>
                  
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full mb-4 text-sm font-medium text-primary">
                      <span>View Features</span>
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-3 mb-6">
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>1 Google Business Profile</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>AI auto-posted responses</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>WhatsApp/Email alerts</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Summary Reports</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Email Support</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-xs">Setup: KES 3,500</span>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                  
                  <Button asChild className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full">
                    <a href="/contact?tier=basic&service=reputation">Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Premium Tier - Elevated */}
            <div className="relative md:-mt-4 md:mb-4">
              <Card className="h-full flex flex-col shadow-2xl hover:shadow-3xl transition-shadow border-2 border-primary/20">
                {/* Blue gradient header - larger */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-t-lg text-center">
                  <div className="text-6xl font-bold mb-1">
                    ${isAnnual ? '15.6' : '19.5'}
                  </div>
                  <div className="border-t-2 border-white/50 pt-2 mt-2">
                    <span className="text-xl font-medium">month</span>
                  </div>
                </div>
                {/* White content area */}
                <CardContent className="flex-1 p-6 bg-white dark:bg-card">
                  <h3 className="text-2xl font-bold text-blue-500 mb-2">Premium</h3>
                  <p className="text-sm text-muted-foreground mb-6">membership</p>
                  
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Most Popular</Badge>
                  
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full mb-4 text-sm font-medium text-primary">
                      <span>View Features</span>
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-3 mb-6">
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Up to 3 platforms</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>AI-powered sentiment analysis</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>AI custom voice responses</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Database + Alerts</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Conditional feedback logic</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Monthly Reports</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Email & WhatsApp Support</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-xs">Setup: KES 7,000</span>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                  
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                    <a href="/contact?tier=growth&service=reputation">Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Pro Tier */}
            <div className="relative">
              <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow">
                {/* Blue gradient header */}
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-t-lg text-center">
                  <div className="text-5xl font-bold mb-1">
                    Custom
                  </div>
                  <div className="border-t-2 border-white/50 pt-2 mt-2">
                    <span className="text-lg font-medium">pricing</span>
                  </div>
                </div>
                {/* White content area */}
                <CardContent className="flex-1 p-6 bg-white dark:bg-card">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">Pro</h3>
                  <p className="text-sm text-muted-foreground mb-6">membership</p>
                  
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full mb-4 text-sm font-medium text-primary">
                      <span>View Features</span>
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-3 mb-6">
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Unlimited platforms</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Advanced AI sentiment analysis</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>AI + human review</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Priority alerts + Dedicated support</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>CRM Integration</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Dedicated Account Manager</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Advanced Analytics + Strategy Calls</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-xs">Setup: KES 10,000 - 15,000</span>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                  
                  <Button asChild variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-full">
                    <a href="/contact?tier=premium&service=reputation">Get Quote</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Reputation?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join successful businesses that trust AI to protect and grow their online reputation. 
            Start your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <a href="/contact">Get Your Free Reputation Audit</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <a href="/contact">Schedule a Consultation</a>
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