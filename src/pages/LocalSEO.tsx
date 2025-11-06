import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search, TrendingUp, Users, Star, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const LocalSEO = () => {
  const { t } = useLanguage();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to see results from local SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Initial improvements in local search visibility typically appear within 4-6 weeks. Significant ranking improvements and increased traffic usually manifest within 3 months. Full optimization and market dominance is achieved in 6-12 months. Our clients see an average 350% increase in local search visibility."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between regular SEO and local SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Local SEO focuses specifically on appearing in location-based searches and Google Maps results. It emphasizes Google Business Profile optimization, local citations, location-specific keywords, and proximity to searchers. Regular SEO targets broader, non-location-specific searches. Local SEO is essential for businesses serving specific geographic areas."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a physical location for local SEO to work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not necessarily. Service area businesses (plumbers, electricians, consultants) can benefit from local SEO even without a storefront. Google allows you to define service areas and hide your address while still appearing in local searches. The key is optimizing for the locations where you provide services."
        }
      },
      {
        "@type": "Question",
        "name": "How important are Google reviews for local SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google reviews are critical for local SEO success. They directly influence local search rankings and click-through rates. Reviews provide social proof, improve conversion rates, and signal trust to Google's algorithm. Businesses with more positive reviews consistently outrank competitors. We implement systematic review generation strategies."
        }
      },
      {
        "@type": "Question",
        "name": "Can local SEO help my business appear in voice search results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, local SEO is essential for voice search visibility. Voice searches are predominantly local (e.g., 'near me' queries). We optimize for conversational keywords, question-based queries, and featured snippet positions that voice assistants pull from. Strong local SEO signals increase your chances of being the spoken result."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in your local SEO package?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our complete local SEO package includes Google Business Profile optimization, local keyword research and targeting, citation building across 50+ directories, NAP consistency audits, location-specific content creation, review management strategy, local link building, competitor analysis, and monthly performance reporting with ongoing optimization."
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
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6" variant="secondary">
            <MapPin className="w-4 h-4 mr-2" />
            Local Domination
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Local SEO & Google Business Management
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Dominate your local market with strategic SEO optimization and expert Google Business Profile management 
            that puts your business at the top of local search results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <a href="/contact">Dominate Local Search</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <a href="/contact">Analyze My Local Presence</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Local Search is the New Battlefield</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              76% of people who search for something nearby visit a business within 24 hours. 
              If you're not showing up, you're losing customers to competitors every single day.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Invisible to Customers</h3>
              <p className="text-muted-foreground">
                Poor local SEO means potential customers can't find you when they search for your services.
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitors Taking Over</h3>
              <p className="text-muted-foreground">
                Competitors with better local SEO capture your potential customers first.
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lost Revenue</h3>
              <p className="text-muted-foreground">
                Every day without local SEO optimization means lost foot traffic and revenue.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Local Search Domination</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive local SEO strategy that optimizes every touchpoint where customers 
              discover and evaluate your business online.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Google Business Profile Optimization</h3>
                    <p className="text-muted-foreground">
                      Complete optimization of your Google Business Profile with strategic keywords, 
                      compelling descriptions, and regular content updates that boost local rankings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Local Keyword Domination</h3>
                    <p className="text-muted-foreground">
                      Strategic targeting of high-value local keywords that your customers actually 
                      search for, with location-specific content optimization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Review Strategy & Management</h3>
                    <p className="text-muted-foreground">
                      Systematic approach to generating positive reviews and managing your online 
                      reputation across all local search platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Local Visibility</h3>
              <div className="text-4xl font-bold text-primary mb-2">350%</div>
              <p className="text-muted-foreground">Average increase in local search visibility for our clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Components */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Local SEO Package</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to dominate local search results and attract more customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Google Business Profile Setup</h3>
              <p className="text-muted-foreground mb-4">
                Complete optimization of your Google Business Profile with all essential information, 
                strategic keywords, and compelling business descriptions.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Business information optimization</li>
                <li>• Category selection and keywords</li>
                <li>• Photos and virtual tours</li>
                <li>• Service area mapping</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Local Keyword Research</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive research to identify the most valuable local keywords that drive 
                traffic and conversions in your specific market.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Competitor keyword analysis</li>
                <li>• Location-specific terms</li>
                <li>• Search volume and difficulty</li>
                <li>• Long-tail opportunity identification</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Citation Building & NAP Consistency</h3>
              <p className="text-muted-foreground mb-4">
                Strategic placement of your business information across high-authority local directories 
                and platforms to build trust and local ranking signals.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Local directory submissions</li>
                <li>• NAP consistency audit</li>
                <li>• Industry-specific citations</li>
                <li>• Duplicate listing cleanup</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Local Content Strategy</h3>
              <p className="text-muted-foreground mb-4">
                Location-focused content creation that establishes your expertise and improves 
                search rankings for local queries.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Location-specific landing pages</li>
                <li>• Local news and events content</li>
                <li>• Community involvement features</li>
                <li>• Regular Google posts</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Local SEO is Essential Now</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Local search behavior has fundamentally changed. Customers expect immediate, 
              relevant results when they search for local businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Mobile-First World</h3>
              <p className="text-muted-foreground">
                Over 60% of local searches happen on mobile devices. Local SEO ensures you're 
                visible when customers search on-the-go.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Voice Search Ready</h3>
              <p className="text-muted-foreground">
                Voice searches are increasingly local. Optimize for conversational queries 
                like "near me" searches that drive immediate action.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Google Maps Dominance</h3>
              <p className="text-muted-foreground">
                Google Maps is the primary way customers discover local businesses. 
                Strong local SEO puts you on the map literally and figuratively.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Competitive Advantage</h3>
              <p className="text-muted-foreground">
                Many local businesses still neglect SEO. Early optimization gives you 
                a significant advantage over slower-moving competitors.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Higher Conversion Rates</h3>
              <p className="text-muted-foreground">
                Local searches have high commercial intent. People searching locally 
                are ready to buy, making these leads extremely valuable.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Cost-Effective Marketing</h3>
              <p className="text-muted-foreground">
                Local SEO provides long-term results without ongoing ad spend. 
                Once optimized, you continue to attract customers organically.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Real Results for Local Businesses</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See the measurable impact of strategic local SEO optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">300%</div>
              <p className="text-muted-foreground">Increase in Google Maps views</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">150%</div>
              <p className="text-muted-foreground">More phone calls from search</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">200%</div>
              <p className="text-muted-foreground">Increase in website visits</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <p className="text-muted-foreground">Of clients rank in top 3</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Dominate Local Search?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Stop losing customers to competitors. Start your local SEO transformation and become 
            the obvious choice in your market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <a href="/contact">Get Your Free Local SEO Audit</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <a href="/contact">Schedule Local SEO Strategy Call</a>
            </Button>
          </div>
        </div>
      </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default LocalSEO;