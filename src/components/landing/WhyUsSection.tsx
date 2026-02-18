import { Database, Eye, Zap, Clock } from "lucide-react";

const benefits = [
  {
    icon: Database,
    title: "Data-Driven Recommendations",
    description: "Every suggestion is backed by real financial data analysis, not guesswork.",
  },
  {
    icon: Eye,
    title: "Transparent Explanations",
    description: "Understand exactly why each product is recommended with clear reasoning.",
  },
  {
    icon: Zap,
    title: "Faster Than Traditional Advisors",
    description: "Get instant results in seconds instead of waiting days for appointments.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access expert-level financial guidance anytime, anywhere — no office hours.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            AI Advisory That{" "}
            <span className="text-gradient">Actually Works</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group glass rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
