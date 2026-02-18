import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Us", href: "#why-us" },
  { label: "AI Advisor", href: "#ai-advisor" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="/finflow-logo.png"
            alt="FinFlow AI"
            className="h-9 w-auto drop-shadow-[0_0_6px_rgba(34,197,94,0.5)]"
          />
          <span className="text-lg font-semibold text-gradient hidden sm:block">
            FinFlow AI
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}

          <Button
  size="sm"
  className="gradient-primary text-primary-foreground font-semibold transition-all duration-300 hover:bg-orange-500 hover:shadow-[0_0_15px_rgba(255,153,51,0.4)]"
>
  Get Started
</Button>

        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-strong border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}

          <Button
            size="sm"
            className="w-full mt-2 gradient-primary text-primary-foreground font-semibold"
          >
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
