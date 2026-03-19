
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/radiance-logo.png";
import { useToast } from "@/hooks/use-toast";
import { newsletterSchema } from "@/lib/validations";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Footer() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    try {
      // Validate email
      const validatedData = newsletterSchema.parse({ email: newsletterEmail });

      // Save to database
      const { error: dbError } = await supabase
        .from("newsletter_subscribers")
        .insert([validatedData as any]);
      if (dbError) {
        if (dbError.code === "23505") {
          toast({
            title: "Already Subscribed",
            description: "This email is already subscribed to our newsletter.",
          });
        } else {
          throw dbError;
        }
      } else {
        // Send email notification
        await supabase.functions.invoke("send-form-notification", {
          body: {
            type: "newsletter",
            data: validatedData,
          },
        });

        toast({
          title: "Successfully Subscribed!",
          description: "Thank you for subscribing to our newsletter.",
        });
        setNewsletterEmail("");
      }
    } catch (error: any) {
      console.error("Error subscribing to newsletter:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };
  
  return (
    <footer className="bg-card text-card-foreground pt-16 pb-8 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <AnimateOnScroll animation="fade-up">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="Radiance Sphere" className="h-24 w-auto" />
            </Link>
            <p className="text-muted-foreground mb-4">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61562047542540" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/_radiancesphere/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                aria-label="Visit our Instagram page"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://x.com/RadianceSphere" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                aria-label="Visit our Twitter page"
              >
                <Twitter size={20} />
              </a>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={100}>
            <h4 className="text-xl font-bold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {[
                { name: t.nav.home, path: "/" },
                { name: t.nav.services, path: "/services" },
                { name: t.nav.contact, path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={200}>
            <h4 className="text-xl font-bold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-primary" />
                <span className="text-muted-foreground">
                  Radiance Sphere<br />
                  Nairobi, Kenya<br />
                  Online Worldwide
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">0782882257</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">radiancesphere3@gmail.com</span>
              </li>
            </ul>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={300}>
            <h4 className="text-xl font-bold mb-4">{t.footer.newsletter}</h4>
            <p className="text-muted-foreground mb-4">
              {t.footer.newsletterDesc}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-2">
              <input 
                type="email" 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder={t.footer.yourEmail} 
                className="rounded-md px-4 py-3 text-base bg-muted text-foreground min-h-[48px] focus:outline-none focus:ring-2 focus:ring-primary"
                required 
                disabled={isSubscribing}
                autoComplete="email"
              />
              <button 
                type="submit" 
                className="btn-primary mt-2"
                disabled={isSubscribing}
              >
                {isSubscribing ? "Subscribing..." : t.footer.subscribe}
              </button>
            </form>
          </div>
          </AnimateOnScroll>
        
        <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Radiance Sphere. {t.footer.allRights}</p>
        </div>
      </div>
    </footer>
  );
}
