import { MessageSquare, Brain, BarChart3, Gift } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Answer Financial Questions",
    description: "Share your income, expenses, and financial goals through a simple conversation.",
  },
  {
    icon: Brain,
    title: "AI Detects Your Persona",
    description: "Our AI identifies your financial profile and risk appetite in real-time.",
  },
  {
    icon: BarChart3,
    title: "Suitability Score Calculated",
    description: "Each banking product gets a personalized suitability score based on your data.",
  },
  {
    icon: Gift,
    title: "Get Your Recommendation",
    description: "Receive a tailored banking product recommendation with transparent reasoning.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 gradient-radial pointer-events-none opacity-50" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Four Simple Steps to{" "}
            <span className="text-gradient">Smarter Banking</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group glass rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <step.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xs font-bold text-primary mb-2 block">Step {i + 1}</span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
