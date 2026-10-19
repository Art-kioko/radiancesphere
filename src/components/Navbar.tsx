import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import logo from "@/assets/radiance-logo.png";

export const APP_URL = "https://radinacev1.netlify.app";

const navLinks = [
  { name: "Product", path: "/#how-it-works" },
  { name: "Pricing", path: "/#pricing" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function NavItem({ path, name, className, onClick }: { path: string; name: string; className: string; onClick?: () => void }) {
  if (path.startsWith("/#")) {
    return <a href={path} className={className} onClick={onClick}>{name}</a>;
  }
  return <Link to={path} className={className} onClick={onClick}>{name}</Link>;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const close = () => setMobileMenuOpen(false);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border/60", scrolled ? "bg-background/95 dark:bg-[hsl(210_30%_22%/0.95)] backdrop-blur-lg py-2 shadow-sm" : "bg-background/90 dark:bg-[hsl(210_30%_20%/0.90)] backdrop-blur-md py-3")}>
      <nav className="container flex justify-between items-center gap-4">
        <Link to="/" className="flex items-center shrink-0">
          <img src={logo} alt="Radiance Sphere" className="h-11 md:h-14 w-auto" />
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map(link => (
            <li key={link.name}>
              <NavItem {...link} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" />
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a href={APP_URL} className="text-sm font-medium text-foreground/80 hover:text-foreground">Sign in</a>
          <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold rounded-full px-5">
            <a href={APP_URL}>Start free trial</a>
          </Button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Open menu" className="gap-2">
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="text-sm font-medium">Menu</span>
          </Button>
        </div>
      </nav>

      <div className={cn("fixed inset-0 z-50 bg-foreground/40 lg:hidden transition-opacity duration-300", mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none")} onClick={close}>
        <div onClick={e => e.stopPropagation()} className={cn("fixed inset-y-0 right-0 w-3/4 max-w-sm bg-background border-l border-border shadow-2xl p-6 transition-transform duration-300 ease-in-out", mobileMenuOpen ? "translate-x-0" : "translate-x-full")}>
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-semibold text-foreground">Menu</span>
                <Button variant="outline" size="icon" onClick={close} className="rounded-full" aria-label="Close menu">
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <NavItem {...link} onClick={close} className="text-lg font-medium text-foreground hover:text-gold block py-2" />
                  </li>
                ))}
                <li><a href={APP_URL} className="text-lg font-medium text-foreground hover:text-gold block py-2">Sign in</a></li>
              </ul>
            </div>
            <Button asChild className="w-full bg-gold text-gold-foreground hover:bg-gold/90 font-semibold min-h-[48px] rounded-full">
              <a href={APP_URL}>Start free trial</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
