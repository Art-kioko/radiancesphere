import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Lightbulb, Target, Award, Clock, Shield, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: <Users className="w-8 h-8 text-primary" />, number: "500+", text: "Businesses Transformed" },
    { icon: <Star className="w-8 h-8 text-primary" />, number: "98%", text: "Client Satisfaction Rate" },
    { icon: <Award className="w-8 h-8 text-primary" />, number: "50M+", text: "Reviews Managed" },
    { icon: <Clock className="w-8 h-8 text-primary" />, number: "24/7", text: "AI Monitoring" }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-12 h-12 text-primary" />,
      title: "Innovation First",
      description: "We leverage cutting-edge AI technology to solve real business challenges and stay ahead of the digital curve."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Trust & Transparency",
      description: "Building lasting relationships through honest communication, reliable results, and unwavering integrity."
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Results-Driven",
      description: "Every strategy is designed with measurable outcomes in mind, ensuring your investment delivers real business growth."
    },
    {
      icon: <Rocket className="w-12 h-12 text-primary" />,
      title: "Growth Partnership",
      description: "We don't just provide services—we become your strategic partner in achieving sustainable business success."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
                <Users className="w-4 h-4 mr-2" />
                About Radiance Sphere
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Transforming businesses through AI innovation
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                <strong>Radiance Sphere is a Kenya-based digital marketing agency</strong> helping SMEs build trust, 
                automate operations, and dominate local search.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll animation="fade-right">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Radiance Sphere was founded with a simple vision—to help businesses simplify their digital operations and build stronger online reputations through the power of AI.
                </p>
                <p className="text-muted-foreground mb-6 text-lg">
                  After observing how many businesses struggled to manage their online presence while juggling daily operations, it became clear that traditional solutions were fragmented, manual, and time-consuming. We knew there had to be a better way—one that leveraged the power of artificial intelligence to work smarter, not harder.
                </p>
                <p className="text-muted-foreground text-lg">
                  Radiance Sphere is built on a commitment to innovation, transparency, and real results—empowering businesses to thrive in a digital-first world.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-left" delay={200}>
                <div className="relative mx-4 md:mx-0">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                      alt="Team collaboration" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-1/2 md:w-2/3 rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
                      alt="AI technology workspace" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <AnimateOnScroll animation="fade-up">
                <Card className="p-8 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    To empower businesses with intelligent AI solutions that build unshakeable trust, eliminate operational inefficiencies, 
                    and create sustainable competitive advantages in their local markets.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    We believe every business deserves access to enterprise-level AI technology, regardless of size or budget. 
                    Our mission is to democratize AI and make it accessible, practical, and profitable for all.
                  </p>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={200}>
                <Card className="p-8 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Lightbulb className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    To create a world where every business can achieve optimal reputation management, operational excellence, 
                    and market dominance through intelligent automation.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    We envision a future where businesses spend less time on repetitive tasks and more time on innovation, 
                    growth, and creating extraordinary customer experiences.
                  </p>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  These principles guide every decision we make and every solution we create for our clients.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                  <Card className="p-8 hover:shadow-lg transition-shadow h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* What Sets Us Apart Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">What Sets Us Apart</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  We're not just service providers—we're innovation partners committed to your success.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                { icon: <Rocket className="w-8 h-8 text-primary" />, title: "Cutting-Edge AI Technology", desc: "We use the latest advancements in artificial intelligence and machine learning to deliver solutions that actually work." },
                { icon: <Users className="w-8 h-8 text-primary" />, title: "Personalized Approach", desc: "Every solution is tailored to your specific business needs, industry requirements, and growth objectives." },
                { icon: <Clock className="w-8 h-8 text-primary" />, title: "Proven Track Record", desc: "With hundreds of successful implementations and a 98% client satisfaction rate, our results speak for themselves." },
              ].map((item, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={index * 150}>
                  <Card className="p-6 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary/5">
          <AnimateOnScroll animation="scale">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Discover how our AI-powered solutions can transform your business operations and accelerate your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link to="/consultation">Start Your Transformation</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link to="/services">Explore Our Services</Link>
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

export default About;
