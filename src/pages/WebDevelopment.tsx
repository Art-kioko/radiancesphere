import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Zap, Search, Shield, Rocket, CheckCircle, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const WebDevelopment = () => {
  const { t } = useLanguage();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is SEO-optimized web development important for Kenyan businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO-optimized web development ensures your website ranks well on Google from day one. In Kenya's competitive digital market, having a website that loads fast, works on mobile, and is structured for search engines gives you a significant advantage over competitors with poorly optimized sites."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard business website typically takes 2-4 weeks from kickoff to launch. E-commerce sites or complex platforms may take 4-8 weeks. We work in phases, delivering preview versions for your feedback before the final launch."
        }
      },
      {
        "@type": "Question",
        "name": "Will my website work on mobile phones?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. All our websites are mobile-first, meaning we design for smartphones first, then scale up for tablets and desktops. In Kenya, over 80% of internet users browse on mobile devices, so mobile optimization is essential for reaching your customers."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide website hosting and maintenance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer comprehensive hosting and maintenance packages. This includes secure hosting, regular backups, software updates, security monitoring, and content updates. We ensure your website stays fast, secure, and up-to-date."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate my website with other business tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we integrate websites with various business tools including payment gateways (M-Pesa, card payments), CRM systems, email marketing platforms, booking systems, and inventory management. Our AI workflow automation service can further connect your website to automate business processes."
        }
      },
      {
        "@type": "Question",
        "name": "What makes your web development different from other agencies in Kenya?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We build websites with SEO, performance, and conversion optimization built-in from the start—not as an afterthought. Every website includes structured data for AI search visibility, Google Business Profile integration, and is designed to work with our reputation management and local SEO services for maximum online impact."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>SEO-Optimized Web Development Kenya | Radiance Sphere</title>
        <meta name="description" content="Professional web development for Kenyan businesses. Mobile-responsive, fast-loading websites with built-in SEO optimization. Get a website that ranks and converts." />
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
            <Code className="w-4 h-4 mr-2" />
            SEO-First Development
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            SEO-Optimized Web Development
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Professional websites for Kenyan businesses that rank on Google, load fast on mobile, 
            and convert visitors into paying customers—with SEO built-in from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <a href="/contact">Get Your Website Quote</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <a href="/contact">See Our Portfolio</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Website is Your 24/7 Salesperson</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              In Kenya's digital economy, a poorly built website costs you customers every day. 
              If your site is slow, doesn't work on mobile, or can't be found on Google—you're invisible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile Failures</h3>
              <p className="text-muted-foreground">
                80% of Kenyans browse on mobile. Sites that don't work on phones lose 80% of potential customers.
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Slow Loading</h3>
              <p className="text-muted-foreground">
                53% of visitors leave if a page takes more than 3 seconds to load. Speed matters.
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Invisible to Search</h3>
              <p className="text-muted-foreground">
                Websites without SEO never rank on Google. No visibility means no traffic and no customers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Websites Built to Perform</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We don't just build websites—we build digital assets that work hard for your business 
              every day, attracting customers and driving growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">SEO Built From The Start</h3>
                    <p className="text-muted-foreground">
                      Structured data, optimized content, fast loading, and proper indexing—all built into 
                      the foundation so your site ranks from day one.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mobile-First Design</h3>
                    <p className="text-muted-foreground">
                      Every website is designed for smartphones first, ensuring perfect performance 
                      for Kenya's mobile-dominant internet users.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Lightning Fast Performance</h3>
                    <p className="text-muted-foreground">
                      Optimized code, compressed images, and smart caching deliver sub-3-second load times 
                      even on slower Kenyan networks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI Search Ready</h3>
                    <p className="text-muted-foreground">
                      Structured data and semantic markup help AI assistants like ChatGPT, Gemini, 
                      and Perplexity understand and recommend your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Performance Score</h3>
              <div className="text-4xl font-bold text-primary mb-2">95+</div>
              <p className="text-muted-foreground">Average Google PageSpeed score for our websites</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Websites for Every Kenyan Business</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From simple landing pages to complex e-commerce platforms—we build what your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Business Websites</h3>
              <p className="text-muted-foreground mb-4">
                Professional company websites that establish credibility, showcase services, 
                and generate leads for service-based businesses.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Company profiles & about pages</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Service showcases</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Contact forms & lead capture</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Blog & content sections</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">E-Commerce Stores</h3>
              <p className="text-muted-foreground mb-4">
                Online stores with M-Pesa integration, inventory management, and shipping 
                calculators built for the Kenyan market.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> M-Pesa & card payment integration</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Product catalogs & categories</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Order management</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Inventory tracking</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Landing Pages</h3>
              <p className="text-muted-foreground mb-4">
                High-converting single-page websites optimized for specific campaigns, 
                product launches, or lead generation.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Conversion-optimized design</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> A/B testing ready</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Lead capture forms</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Analytics integration</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Booking & Appointment Sites</h3>
              <p className="text-muted-foreground mb-4">
                Websites with integrated booking systems for service providers, consultants, 
                salons, clinics, and hospitality businesses.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Online booking calendar</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Automated confirmations</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Payment integration</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> SMS/Email reminders</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration with Other Services */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Works with Our Other Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your website becomes more powerful when integrated with our reputation management, 
              local SEO, and workflow automation services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">+ Reputation Management</h3>
              <p className="text-muted-foreground">
                Display Google reviews on your website, automate review requests from website visitors, 
                and showcase testimonials that build trust.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">+ Local SEO</h3>
              <p className="text-muted-foreground">
                Your website and Google Business Profile work together for maximum local visibility. 
                Location pages, local keywords, and map integration drive foot traffic.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">+ AI Workflows</h3>
              <p className="text-muted-foreground">
                Automate lead follow-up, customer onboarding, and order processing. 
                Turn website visitors into customers with intelligent automation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Results That Matter</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our websites are built to perform—and the numbers prove it.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95+</div>
              <p className="text-muted-foreground">PageSpeed Score</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3x</div>
              <p className="text-muted-foreground">More Leads</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Mobile Optimized</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">&lt;2s</div>
              <p className="text-muted-foreground">Load Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services - explicit cross-links */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Maximize Your Website's Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your website performs best when combined with our full suite of digital marketing services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Reputation Management</h3>
              <p className="text-muted-foreground mb-4">
                Display Google reviews on your website, build social proof, and automatically request reviews from website visitors.
              </p>
              <Button asChild variant="outline" size="sm">
                <a href="/reputation-management">Explore Reputation Management</a>
              </Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Local SEO</h3>
              <p className="text-muted-foreground mb-4">
                Get your website ranking on Google Maps and local search results. Drive foot traffic with location-specific optimization.
              </p>
              <Button asChild variant="outline" size="sm">
                <a href="/local-seo">Learn About Local SEO</a>
              </Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">AI Workflow Automation</h3>
              <p className="text-muted-foreground mb-4">
                Automate lead capture, follow-up emails, and customer onboarding directly from your website forms.
              </p>
              <Button asChild variant="outline" size="sm">
                <a href="/ai-workflows">Discover AI Workflows</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Website That Works?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Stop losing customers to slow, ugly, or invisible websites. 
            Get a professional website that ranks, loads fast, and converts visitors into customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <a href="/contact">Get Your Free Website Consultation</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <a href="/contact">Request a Quote</a>
            </Button>
          </div>
        </div>
      </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default WebDevelopment;