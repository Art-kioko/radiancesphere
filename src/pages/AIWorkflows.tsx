import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Cog, Clock, Workflow, BarChart, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const AIWorkflows = () => {
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
            <Zap className="w-4 h-4 mr-2" />
            Custom AI Automation
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Custom AI Workflow Automation
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Revolutionize your business operations with intelligent automation that learns, adapts, 
            and executes complex tasks while you focus on growth and strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <a href="/contact">Automate Your Business</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <a href="/services">See Automation Examples</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Break Free from Manual Chaos</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Business owners spend 40% of their time on repetitive tasks that could be automated. 
              Meanwhile, opportunities slip through the cracks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Time Drain</h3>
              <p className="text-muted-foreground">
                Hours wasted on data entry, follow-ups, and manual processes that never end.
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Human Error</h3>
              <p className="text-muted-foreground">
                Mistakes in manual processes cost businesses an average of $62 per error.
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Missed Growth</h3>
              <p className="text-muted-foreground">
                Time spent on tasks instead of strategy limits business scaling potential.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI That Works While You Sleep</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Custom-built AI workflows that understand your business processes and execute them 
              with precision, consistency, and intelligence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Workflow className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Intelligent Process Automation</h3>
                    <p className="text-muted-foreground">
                      AI learns your unique business processes and replicates them with perfect 
                      consistency, handling complex decision-making and multi-step workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Cog className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Adaptive Learning System</h3>
                    <p className="text-muted-foreground">
                      Our AI continuously improves, learning from outcomes and adjusting processes 
                      to optimize efficiency and accuracy over time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-Time Integration</h3>
                    <p className="text-muted-foreground">
                      Seamlessly connects with your existing tools and platforms, creating unified 
                      workflows that span across all your business systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Time Saved</h3>
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <p className="text-muted-foreground">Average reduction in manual task time for our clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Examples */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Automation Workflows</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how businesses like yours are using AI to transform their operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Lead Management & Nurturing</h3>
              <p className="text-muted-foreground mb-4">
                Automatically capture leads, score them based on behavior, assign to the right team member, 
                and initiate personalized follow-up sequences.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Lead scoring and qualification</li>
                <li>• Automated email sequences</li>
                <li>• CRM data synchronization</li>
                <li>• Follow-up scheduling</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Customer Service Automation</h3>
              <p className="text-muted-foreground mb-4">
                AI handles common inquiries, routes complex issues to specialists, and maintains 
                detailed interaction logs for continuous improvement.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Intelligent ticket routing</li>
                <li>• Automated responses</li>
                <li>• Escalation protocols</li>
                <li>• Performance analytics</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Inventory & Order Management</h3>
              <p className="text-muted-foreground mb-4">
                Streamline order processing, inventory tracking, vendor communications, 
                and fulfillment workflows for seamless operations.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Automated reorder points</li>
                <li>• Vendor notifications</li>
                <li>• Order fulfillment tracking</li>
                <li>• Inventory forecasting</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Financial Process Automation</h3>
              <p className="text-muted-foreground mb-4">
                Automate invoicing, payment reminders, expense tracking, and financial reporting 
                to maintain cash flow and reduce administrative burden.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Automated invoicing</li>
                <li>• Payment tracking</li>
                <li>• Expense categorization</li>
                <li>• Financial reporting</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Automation is Critical in Today's Era</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The competitive landscape demands efficiency. Businesses that don't automate 
              get left behind by those that do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Competitive Edge</h3>
              <p className="text-muted-foreground">
                Respond faster than competitors, deliver consistent service, and scale operations 
                without proportional increases in overhead costs.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Cost Reduction</h3>
              <p className="text-muted-foreground">
                Reduce operational costs by 30-50% while improving accuracy and consistency 
                across all business processes.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Scalability</h3>
              <p className="text-muted-foreground">
                Handle 10x more volume without hiring additional staff. Automation scales 
                infinitely with your business growth.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Employee Satisfaction</h3>
              <p className="text-muted-foreground">
                Free your team from repetitive tasks so they can focus on creative, strategic work 
                that drives innovation and job satisfaction.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Data-Driven Insights</h3>
              <p className="text-muted-foreground">
                Automated processes generate valuable data insights that inform strategic decisions 
                and reveal optimization opportunities.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">24/7 Operations</h3>
              <p className="text-muted-foreground">
                Your business never sleeps with AI workflows that operate continuously, 
                capturing opportunities and serving customers around the clock.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Success?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join forward-thinking businesses that leverage AI automation to work smarter, not harder. 
            Start your automation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <a href="/contact">Get Your Free Automation Assessment</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <a href="/contact">Book a Strategy Call</a>
            </Button>
          </div>
        </div>
      </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default AIWorkflows;