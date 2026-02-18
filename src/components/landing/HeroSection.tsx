import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Radial glow overlays */}
      <div className="absolute inset-0 gradient-radial pointer-events-none" />

      {/* Animated orbs */}
      <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-teal-accent/10 blur-[120px] animate-float-delayed" />

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground font-medium">AI-Powered Banking Advisory</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up animation-delay-200">
              Smart AI Banking{" "}
              <span className="text-gradient">Advisor</span>{" "}
              for Everyone
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-8 animate-fade-up animation-delay-400">
             Our AI assistant analyzes your income, monthly expenses, EMIs, and investment goals to recommend the best Indian banking and financial products instantly.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-600">
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground font-semibold text-base px-8 hover:opacity-90 transition-opacity"
                asChild
              >
                <a href="#ai-advisor">
                  Talk to AI Advisor
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-secondary font-semibold text-base px-8"
                asChild
              >
                <a href="#how-it-works">Learn More</a>
              </Button>
            </div>
          </div>

          {/* Right — floating banking cards */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Main card */}
            <div className="glass rounded-2xl p-6 w-72 shadow-2xl shadow-primary/10 animate-float">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold text-foreground">FinFlow AI</span>
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-1 mb-6">
                <p className="text-xs text-muted-foreground">Current Balance</p>
                <p className="text-2xl font-bold text-foreground">₹12,480.50</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">HDFC •••• 4829
</span>
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 rounded-full bg-primary/60" />
                  <div className="w-6 h-6 rounded-full bg-teal-accent/60" />
                </div>
              </div>
            </div>

            {/* Small floating card */}
            <div className="absolute -top-4 -right-4 glass rounded-xl p-4 w-48 shadow-lg shadow-primary/5 animate-float-delayed">
              <p className="text-xs text-muted-foreground mb-1">AI Score</p>
              <p className="text-lg font-bold text-gradient">92 / 100</p>
              <p className="text-[10px] text-muted-foreground mt-1">Excellent financial health</p>
            </div>

            {/* Bottom floating card */}
            <div className="absolute -bottom-8 -left-8 glass rounded-xl p-4 w-52 shadow-lg shadow-primary/5 animate-float">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <p className="text-xs font-medium text-foreground">Savings Goal</p>
              </div>
              <div className="w-full h-2 rounded-full bg-secondary">
                <div className="h-2 rounded-full gradient-primary w-3/4" />
              </div>
              <p className="text-[10px] text-muted-foreground mt-1">75% completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
