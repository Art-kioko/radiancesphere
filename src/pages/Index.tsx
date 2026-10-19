import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar, { APP_URL } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight, Check, Languages, MailCheck, ShieldAlert, BarChart3, Store, QrCode,
  MapPin, Smartphone, Link2, Star, Search, Bot, Code2, ImageIcon,
} from "lucide-react";

// Reputation checker link not supplied yet — replace when available.
const CHECKER_URL = "/contact";

function ImageSlot({ src, alt, label, className = "" }: { src: string; alt: string; label: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`rounded-2xl border border-border bg-card shadow-xl overflow-hidden ${className}`}>
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-muted/60">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-navy/40" />
      </div>
      {failed ? (
        <div className="aspect-[16/10] flex flex-col items-center justify-center gap-2 text-muted-foreground bg-cream">
          <ImageIcon className="h-8 w-8" />
          <span className="text-sm">{label}</span>
        </div>
      ) : (
        <img src={src} alt={alt} onError={() => setFailed(true)} className="w-full h-auto block" loading="lazy" />
      )}
    </div>
  );
}

const goldBtn = "bg-gold text-gold-foreground hover:bg-gold/90 font-semibold rounded-full";

const features = [
  { icon: Languages, title: "Replies in English and Swahili", text: "Each reply matches the language your customer wrote in." },
  { icon: MailCheck, title: "One-tap approval by email", text: "Review the draft and approve it straight from your inbox." },
  { icon: ShieldAlert, title: "Bad reviews held for you", text: "Negative reviews are never auto-replied. You write the personal response." },
  { icon: BarChart3, title: "Sentiment summaries", text: "See what customers like and what upsets them, review by review." },
  { icon: Store, title: "Up to 5 locations", text: "Manage every branch from a single dashboard." },
  { icon: QrCode, title: "Feedback QR codes", text: "Unhappy customers are sent to a private form, not a public review." },
];

const planFeatures = [
  "AI replies in English and Swahili",
  "One-tap approval",
  "Sentiment summaries",
  "Feedback QR codes",
  "Pay by M-Pesa or card",
];

const faqs = [
  { q: "How does the free trial work?", a: "You get 14 days free with no card needed. Connect your Google Business Profile and start approving replies right away." },
  { q: "Do replies post without my approval?", a: "By default no: you approve each one. Only 4–5 star replies can post automatically, and only if you switch that on. Low-star reviews are never auto-replied." },
  { q: "Which platforms are supported?", a: "Google Business Profile." },
  { q: "Can I manage several locations?", a: "Yes. The Standard plan covers up to 5 locations in one account." },
  { q: "What happens if I stop?", a: "Your replies stop being drafted at the end of your billing period. Replies already posted stay on Google." },
];

const services = [
  { icon: Star, title: "Reputation Management", path: "/reputation-management" },
  { icon: Search, title: "Local SEO", path: "/local-seo" },
  { icon: Bot, title: "AI Workflows", path: "/ai-workflows" },
  { icon: Code2, title: "Web Development", path: "/web-development" },
];

export default function Index() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
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

      <main className="flex-1 pt-24">
        {/* 1. Hero */}
        <section className="container py-12 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-navy">
              Reply to every Google review in minutes, in English or Swahili.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              AI drafts the reply. You approve it with one tap on your phone.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className={goldBtn}><a href={APP_URL}>Start free trial</a></Button>
              <Button asChild size="lg" variant="outline" className="rounded-full"><a href={CHECKER_URL}>Check your reputation free</a></Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">14-day free trial. No card needed.</p>
          </div>
          <ImageSlot src="/images/dashboard-overview.png" alt="Radiance Sphere dashboard overview" label="Dashboard screenshot coming soon" />
        </section>

        {/* 2. Trust strip */}
        <section className="border-y border-border bg-background/60">
          <div className="container py-5 flex flex-col sm:flex-row flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" />Built for Kenyan businesses</span>
            <span className="flex items-center gap-2"><Smartphone className="h-4 w-4 text-gold" />Pay by M-Pesa or card</span>
            <span className="flex items-center gap-2"><Link2 className="h-4 w-4 text-gold" />Connects to your Google Business Profile</span>
          </div>
        </section>

        {/* 3. Problem */}
        <section className="container py-20 max-w-3xl text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Unanswered reviews cost you customers.</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Before people call or visit, they read your reviews — and how you replied. Silence looks like you don't care.
              A quick, polite reply shows new customers you listen.
            </p>
          </AnimateOnScroll>
        </section>

        {/* 4. How it works */}
        <section id="how-it-works" className="bg-background py-20">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy mb-12">How it works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {["Connect your Google Business Profile.", "AI drafts a reply as each review arrives.", "Approve it with one tap from your email."].map((s, i) => (
                <div key={s} className="rounded-2xl border border-border bg-card p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold text-gold-foreground font-bold">{i + 1}</span>
                  <p className="mt-4 text-lg font-medium">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Features */}
        <section className="container py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy mb-12">Everything you need to stay on top of reviews</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6">
                <Icon className="h-6 w-6 text-gold" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Dashboard preview */}
        <section className="bg-background py-20">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-10">See every review in one place</h2>
            <ImageSlot src="/images/dashboard-mobile.png" alt="Radiance Sphere mobile dashboard" label="Mobile screenshot coming soon" className="max-w-sm mx-auto" />
          </div>
        </section>

        {/* 7. Pricing */}
        <section id="pricing" className="container py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy">Simple pricing</h2>
          <p className="text-center text-muted-foreground mt-3">Per month, KES</p>
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Basic", price: "4,650", loc: "1 location" },
              { name: "Standard", price: "6,950", loc: "Up to 5 locations", label: "For multiple locations" },
            ].map(p => (
              <div key={p.name} className="rounded-2xl border border-border bg-card p-8 flex flex-col">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{p.name}</h3>
                  {p.label && <span className="text-xs font-medium rounded-full bg-gold/15 text-foreground px-3 py-1">{p.label}</span>}
                </div>
                <p className="mt-4"><span className="text-4xl font-bold text-navy">KES {p.price}</span><span className="text-muted-foreground"> /month</span></p>
                <p className="mt-1 text-sm text-muted-foreground">{p.loc}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {planFeatures.map(f => <li key={f} className="flex gap-2 text-sm"><Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />{f}</li>)}
                </ul>
                <Button asChild className={`${goldBtn} mt-8 w-full`}><a href={APP_URL}>Start free trial</a></Button>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">Card renews automatically. M-Pesa payments are renewed manually.</p>
        </section>

        {/* 8. Free check */}
        <section className="container pb-20">
          <div className="rounded-3xl bg-navy text-cream p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">How does your business compare with your 4 nearest competitors?</h2>
            <Button asChild size="lg" className={`${goldBtn} mt-8`}><a href={CHECKER_URL}>Check your reputation free</a></Button>
          </div>
        </section>

        {/* 9. FAQ */}
        <section id="faq" className="bg-background py-20">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy mb-10">Questions</h2>
            <Accordion type="single" collapsible>
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`q${i}`}>
                  <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 10. Agency services */}
        <section className="container py-16">
          <h2 className="text-2xl font-bold text-center text-navy mb-8">Need more than reviews? Our agency services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map(({ icon: Icon, title, path }) => (
              <Link key={path} to={path} className="group rounded-xl border border-border bg-card p-5 hover:border-gold transition-colors">
                <Icon className="h-5 w-5 text-gold" />
                <p className="mt-3 font-medium text-sm flex items-center gap-1">{title}<ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" /></p>
              </Link>
            ))}
          </div>
        </section>

        {/* 11. Final CTA */}
        <section className="container py-20 text-center">
          <Button asChild size="lg" className={goldBtn}><a href={APP_URL}>Start your 14-day free trial</a></Button>
          <p className="mt-4"><Link to="/contact" className="text-sm font-medium underline underline-offset-4 text-muted-foreground hover:text-foreground">Talk to us</Link></p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
