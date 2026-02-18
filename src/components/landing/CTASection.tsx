import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-10" />
      <div className="absolute inset-0 gradient-radial pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ready to optimize your{" "}
          <span className="text-gradient">finances?</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Join thousands who trust FinFlow AI for smarter, data-driven banking decisions.
        </p>
        <Button
          size="lg"
          className="gradient-primary text-primary-foreground font-semibold text-base px-10 hover:opacity-90 transition-opacity"
          asChild
        >
          <a href="#ai-advisor">
            Start AI Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
