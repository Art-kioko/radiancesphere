
import { useState } from "react";
import { Check, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { consultationSchema } from "@/lib/validations";

export default function BookingForm() {
  const { t } = useLanguage();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const formData = {
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        company,
        service,
        message,
      };

      // Validate form data
      const validatedData = consultationSchema.parse(formData);

      // Save to database
      const { error: dbError } = await supabase
        .from("consultation_requests")
        .insert([validatedData as any]);

      if (dbError) throw dbError;

      // Send email notification
      await supabase.functions.invoke("send-form-notification", {
        body: {
          type: "consultation",
          data: validatedData,
        },
      });

      setSubmitted(true);
      toast({
        title: "Request Sent!",
        description: "We'll contact you soon to schedule your free consultation.",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setService("");
        setMessage("");
      }, 3000);
    } catch (error: any) {
      console.error("Error submitting consultation request:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="glass-card p-6 space-y-6 animate-fade-in [animation-delay:200ms]"
    >
      <h3 className="text-2xl font-bold text-center mb-6">Get Your Free Consultation</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 text-base border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background min-h-[48px]"
              required
              autoComplete="given-name"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-3 text-base border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background min-h-[48px]"
              required
              autoComplete="family-name"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-base border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background min-h-[48px]"
              required
              autoComplete="email"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 text-base border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background min-h-[48px]"
              required
              autoComplete="tel"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-medium">
            Company (Optional)
          </label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-4 py-3 text-base border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background min-h-[48px]"
            autoComplete="organization"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="service" className="block text-sm font-medium">
            Service Interest
          </label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="reputation">AI Reputation Management</SelectItem>
              <SelectItem value="automation">AI Workflow Automation</SelectItem>
              <SelectItem value="seo">Local SEO & Google Business</SelectItem>
              <SelectItem value="general">General Consultation</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium">
            Tell us about your business needs
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 text-base border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none bg-background min-h-[120px]"
            placeholder="Describe your business challenges and goals..."
          />
        </div>
      </div>
      
      <Button type="submit" className="w-full btn-primary relative">
        {submitted ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            Request Sent! We'll Contact You Soon
          </>
        ) : (
          <>
            <Users className="mr-2 h-4 w-4" />
            Request Free Consultation
          </>
        )}
      </Button>
    </form>
  );
}
