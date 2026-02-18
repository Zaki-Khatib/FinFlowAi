const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-lg font-bold text-gradient">FinFlow AI</span>
          <div className="flex gap-6">
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <a href="#why-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Why Us</a>
            <a href="#ai-advisor" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI Advisor</a>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 FinFlow AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
