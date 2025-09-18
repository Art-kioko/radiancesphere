import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Lightbulb, Target, Award, Clock, Shield, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

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
            <Badge className="mb-6" variant="secondary">
              <Users className="w-4 h-4 mr-2" />
              About Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Transforming Businesses Through AI Innovation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We're not just another digital agency. We're AI pioneers dedicated to revolutionizing how businesses 
              build trust, automate operations, and dominate their local markets.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-muted-foreground">{stat.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Founded by a team of AI enthusiasts and digital marketing experts, we recognized a critical gap in the market: 
                  businesses were struggling to maintain their online reputation while managing increasingly complex operational workflows.
                </p>
                <p className="text-muted-foreground mb-6 text-lg">
                  Traditional solutions were fragmented, manual, and time-consuming. We knew there had to be a better way—one that 
                  leveraged the power of artificial intelligence to work smarter, not harder.
                </p>
                <p className="text-muted-foreground text-lg">
                  Today, we've helped over 500 businesses transform their digital presence, automate their operations, and 
                  achieve unprecedented growth through our integrated AI-powered solutions.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                    alt="Team collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-2/3 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
                    alt="AI technology workspace" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Mission */}
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

              {/* Vision */}
              <Card className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground text-lg mb-6">
                  To become the world's leading AI-powered business transformation platform, where every business can achieve 
                  optimal reputation management, operational excellence, and market dominance through intelligent automation.
                </p>
                <p className="text-muted-foreground text-lg">
                  We envision a future where businesses spend less time on repetitive tasks and more time on innovation, 
                  growth, and creating extraordinary customer experiences.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                These principles guide every decision we make and every solution we create for our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
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
              ))}
            </div>
          </div>
        </section>

        {/* What Sets Us Apart Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Sets Us Apart</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're not just service providers—we're innovation partners committed to your success.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cutting-Edge AI Technology</h3>
                <p className="text-muted-foreground">
                  We use the latest advancements in artificial intelligence and machine learning to deliver solutions that actually work.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Personalized Approach</h3>
                <p className="text-muted-foreground">
                  Every solution is tailored to your specific business needs, industry requirements, and growth objectives.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  With hundreds of successful implementations and a 98% client satisfaction rate, our results speak for themselves.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary/5">
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
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default About;