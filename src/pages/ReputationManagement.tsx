import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, TrendingUp, Users, MessageSquare, BarChart3, CheckCircle, Clock, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import reputationImage from "@/assets/reputation-reviews.png";

const ReputationManagement = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container pt-8">
          <BackButton to="/services" label="Back to Services" />
        </div>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6" variant="secondary">
            <Shield className="w-4 h-4 mr-2" />
            AI-Powered Solution
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            AI-Powered Reputation Management
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your online reputation with intelligent AI that monitors, analyzes, and responds to reviews 24/7, 
            building unshakeable trust and credibility for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <a href="/contact">Start Building Your Reputation</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <a href="/services">View Our Services</a>
            </Button>
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

          {/* Review Fetch Process */}
          <div className="mb-16 p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">How Our Review Fetch Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Search className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">1. Comprehensive Monitoring</h4>
                      <p className="text-muted-foreground text-sm">Our AI continuously scans 50+ review platforms including Google, Facebook, Yelp, TripAdvisor, and industry-specific sites.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">2. Real-Time Collection</h4>
                      <p className="text-muted-foreground text-sm">Reviews are fetched in real-time using advanced APIs and web scraping, ensuring you never miss a mention of your business.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">3. Intelligent Analysis</h4>
                      <p className="text-muted-foreground text-sm">Each review is analyzed for sentiment, keywords, and urgency level, then categorized for appropriate response strategies.</p>
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

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
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

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Reputation Score</h3>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Average client improvement in online reputation within 90 days</p>
            </div>
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
    </div>
  );
};

export default ReputationManagement;