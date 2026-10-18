import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Check, MapPin, CreditCard, Link2, Languages, MailCheck, ShieldCheck, ChartNoAxesColumn, Building2, QrCode, Star, Search, Workflow, Code2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DashboardSlot from "@/components/DashboardSlot";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { checkerUrl, homepagePlans, supportedPlatforms, trialDays, trialUrl } from "@/lib/homepage-product";

const features = [
  { icon: Languages, title: "Replies in English and Swahili", text: "A thoughtful reply, in the language your customers use." },
  { icon: MailCheck, title: "One-tap approval by email", text: "Read the draft on your phone. Approve it with one tap." },
  { icon: ShieldCheck, title: "Personal care for bad reviews", text: "Low-star reviews are held for your personal reply. Never auto-replied." },
  { icon: ChartNoAxesColumn, title: "Sentiment summaries", text: "Understand the sentiment behind every review." },
  { icon: Building2, title: "Manage up to 5 locations", text: "Keep your locations together in one place." },
  { icon: QrCode, title: "Feedback QR codes", text: "Give unhappy customers a private form to share their feedback." },
];
const planFeatures = ["AI replies in English and Swahili", "One-tap approval", "Sentiment summaries", "Feedback QR codes", "M-Pesa or card"];
const faqs = [
  { question: "How does the free trial work?", answer: `Try Radiance Sphere for ${trialDays} days, with no card needed. Connect your Google Business Profile and try the review workflow before choosing a plan.` },
  { question: "Do replies post without my approval?", answer: "By default, no: you approve each reply. Only 4–5-star replies can post automatically, and only if you switch that on. Low-star reviews are never auto-replied." },
  { question: "Which platforms are supported?", answer: `${supportedPlatforms[0]} is supported.` },
  { question: "Can I manage several locations?", answer: `Yes. Basic covers ${homepagePlans[0].locations} location. Standard supports up to ${homepagePlans[1].locations} locations.` },
  { question: "What happens if I stop?", answer: "You can continue managing your Google Business Profile directly. Contact us if you need help with your subscription or disconnecting." },
];
function TrialButton({ children = "Start free trial", className = "" }: { children?: React.ReactNode; className?: string }) {
  return <Button asChild variant="trial" className={`saas-action ${className}`}><a href={trialUrl}>{children}<ArrowRight size={16} /></a></Button>;
}
function CheckerButton() {
  return checkerUrl ? <Button asChild variant="outline" className="saas-action"><a href={checkerUrl}>Check your reputation free<ArrowRight size={16} /></a></Button> : <Button variant="outline" className="saas-action" disabled title="Reputation checker link pending">Check your reputation free</Button>;
}
export default function Index() {
  return <div className="saas-home min-h-screen">
      <Helmet>
        <title>Radiance Sphere | AI-Powered Digital Marketing Agency in Kenya</title>
        <meta name="description" content="Radiance Sphere is a Kenya-based digital marketing agency specializing in AI-powered online reputation management, local SEO, AI workflow automation, and SEO-optimized web development for SMEs in Nairobi and across Kenya." />
        <link rel="canonical" href="https://radiancesphere.co.ke/" />
        <meta name="keywords" content="digital marketing agency Kenya, AI-powered marketing agency Nairobi, online reputation management Kenya, local SEO services Kenya, AI workflow automation Nairobi, SME digital marketing Kenya, business reputation management, Google Business Profile Kenya, Radiance Sphere" />
        <meta property="og:title" content="Radiance Sphere | AI-Powered Digital Marketing Agency in Kenya" />
        <meta property="og:description" content="Kenya's leading AI-powered digital marketing agency helping SMEs grow through reputation management, local SEO, AI workflows, and web development." />
        <meta property="og:url" content="https://radiancesphere.co.ke/" />
        <meta property="og:type" content="website" />
      </Helmet>
    <Navbar />
    <main>
      <section className="saas-hero">
        <div className="saas-wrap grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="saas-eyebrow">Radiance Sphere · Review management</span>
            <h1>Reply to every Google review in minutes, in English or Swahili.</h1>
            <p className="text-muted-foreground text-lg mt-6 max-w-md">AI drafts the reply. You approve it with one tap on your phone.</p>
            <div className="flex flex-wrap gap-3 mt-8"><TrialButton /><CheckerButton /></div>
            <p className="text-xs text-muted-foreground mt-4">{trialDays}-day free trial. No card needed.</p>
          </div>
          <DashboardSlot src="/images/dashboard-overview.png" />
        </div>
      </section>
      <section className="border-y border-border py-6">
        <div className="saas-wrap flex flex-col sm:flex-row sm:justify-between gap-5 text-xs font-medium">
          <span className="flex items-center gap-3"><MapPin size={16} className="text-brand-gold" />Built for Kenyan businesses</span>
          <span className="flex items-center gap-3"><CreditCard size={16} className="text-brand-gold" />Pay by M-Pesa or card</span>
          <span className="flex items-center gap-3"><Link2 size={16} className="text-brand-gold" />Connects to your Google Business Profile</span>
        </div>
      </section>
      <section className="saas-section">
        <div className="saas-wrap grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div><span className="saas-eyebrow">Every review matters</span><h2 className="saas-title">Unanswered reviews cost you customers.</h2></div>
          <p className="text-muted-foreground">Before people call or visit, they read your reviews — and your replies. A thoughtful response shows that you listen. Leaving reviews unanswered can leave the wrong impression.</p>
        </div>
      </section>
      <section id="how-it-works" className="saas-section bg-secondary/50 border-y border-border">
        <div className="saas-wrap">
          <span className="saas-eyebrow">How it works</span><h2 className="saas-title">Three steps. A better first impression.</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[{ title: "Connect your Google Business Profile.", text: "Bring your business reviews into Radiance Sphere." }, { title: "AI drafts a reply as each review arrives.", text: "Thoughtful drafts in English or Swahili, ready for your review." }, { title: "Approve it with one tap from your email.", text: "You're in control. No need to sit at a desk." }].map((step, i) => <div className="saas-step" key={step.title}><span className="text-brand-gold text-sm font-semibold">0{i + 1}</span><h3 className="text-lg font-semibold mt-5 mb-3">{step.title}</h3><p className="text-sm text-muted-foreground">{step.text}</p></div>)}
          </div>
        </div>
      </section>
      <section className="saas-section"><div className="saas-wrap">
        <div className="text-center max-w-xl mx-auto"><span className="saas-eyebrow">Made for your everyday</span><h2 className="saas-title">Less admin. More thoughtful replies.</h2></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">{features.map(({ icon: Icon, title, text }) => <article className="saas-feature" key={title}><Icon size={24} strokeWidth={1.5} className="text-brand-gold mb-5" /><h3 className="font-semibold text-base mb-3">{title}</h3><p className="text-sm text-muted-foreground">{text}</p></article>)}</div>
      </div></section>
      <section className="saas-section bg-secondary/50 border-y border-border"><div className="saas-wrap grid md:grid-cols-2 items-center gap-10">
        <div className="max-w-md"><span className="saas-eyebrow">A clear view, wherever you are</span><h2 className="saas-title">See every review in one place</h2><p className="text-muted-foreground mt-5">Keep track of your reviews, draft replies and customer sentiment — from your phone.</p></div>
        <DashboardSlot src="/images/dashboard-mobile.png" mobile />
      </div></section>
      <section id="pricing" className="saas-section"><div className="saas-wrap">
        <div className="text-center"><span className="saas-eyebrow">Simple pricing</span><h2 className="saas-title">The right fit for your business.</h2><p className="text-muted-foreground mt-4">Per month, KES. Pay by M-Pesa or card.</p></div>
        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto mt-10">{homepagePlans.map(plan => <article key={plan.name} className="saas-feature flex flex-col">
          <div className="flex justify-between items-center gap-2 min-h-8"><h3 className="text-lg font-semibold">{plan.name}</h3>{plan.name === "Standard" && <span className="text-[10px] text-muted-foreground">For multiple locations</span>}</div>
          <div className="mt-6 mb-2"><span className="text-xs text-muted-foreground">KES </span><span className="text-4xl font-semibold">{plan.monthlyPrice.toLocaleString("en-KE")}</span><span className="text-xs text-muted-foreground"> / month</span></div>
          <p className="text-sm text-muted-foreground">{plan.locations === 1 ? "1 location" : `Up to ${plan.locations} locations`}</p>
          <ul className="space-y-4 border-t border-border mt-6 pt-6 mb-8">{planFeatures.map(feature => <li key={feature} className="flex items-center gap-3 text-sm"><Check size={16} className="text-brand-gold shrink-0" />{feature}</li>)}</ul><TrialButton className="w-full mt-auto" />
        </article>)}</div>
        <p className="text-center text-xs text-muted-foreground mt-6">Card renews automatically. M-Pesa payments are renewed manually.</p>
      </div></section>
      <section className="saas-section border-y border-border bg-secondary/50"><div className="saas-wrap text-center max-w-3xl">
        <span className="saas-eyebrow">Free reputation check</span><h2 className="saas-title">How does your business compare with your 4 nearest competitors?</h2><div className="mt-7"><CheckerButton /></div>
      </div></section>
      <section id="faq" className="saas-section"><div className="saas-wrap grid md:grid-cols-[.8fr_1.2fr] gap-10">
        <div><span className="saas-eyebrow">A few good questions</span><h2 className="saas-title">Before you get started.</h2></div>
        <Accordion type="single" collapsible>{faqs.map((faq, i) => <AccordionItem key={faq.question} value={`faq-${i}`}><AccordionTrigger className="text-left text-sm gap-4 py-5 hover:no-underline">{faq.question}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent></AccordionItem>)}</Accordion>
      </div></section>
      <section className="saas-section border-t border-border"><div className="saas-wrap">
        <span className="saas-eyebrow">Beyond review management</span><h2 className="saas-title">Need more than reviews? Our agency services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">{[{ title: "Reputation Management", path: "/reputation-management", icon: Star }, { title: "Local SEO", path: "/local-seo", icon: Search }, { title: "AI Automation", path: "/ai-workflows", icon: Workflow }, { title: "Web Development", path: "/web-development", icon: Code2 }].map(({ title, path, icon: Icon }) => <Button asChild variant="outline" key={path} className="bg-card h-auto min-h-28 p-5 justify-start whitespace-normal"><Link to={path}><Icon className="text-brand-gold" /><span className="flex-1 text-left">{title}</span><ArrowRight /></Link></Button>)}</div>
      </div></section>
      <section className="saas-section bg-primary text-primary-foreground"><div className="saas-wrap text-center">
        <h2 className="saas-title">Give every review the attention it deserves.</h2><p className="mt-4 opacity-75">AI drafts. You approve. Your customers feel heard.</p><div className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-8"><TrialButton>Start your {trialDays}-day free trial</TrialButton><Link to="/contact" className="text-sm underline underline-offset-4">Talk to us <ArrowRight className="inline ml-2" size={16} /></Link></div>
      </div></section>
    </main><Footer />
  </div>;
}
