import { useEffect } from "react";

const AIAdvisorSection = () => {
  useEffect(() => {
    // Prevent duplicate loads
    if ((window as any).Landbot) {
      new (window as any).Landbot.Container({
        container: "#landbot-container",
        configUrl:
          "https://storage.googleapis.com/landbot.online/v3/H-3334204-TCIN3IS8LQBBLUKB/index.json",
      });
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://cdn.landbot.io/landbot-3/landbot-3.0.0.js";
    script.async = true;

    script.onload = () => {
      new (window as any).Landbot.Container({
        container: "#landbot-container",
        configUrl:
          "https://storage.googleapis.com/landbot.online/v3/H-3334204-TCIN3IS8LQBBLUKB/index.json",
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <section id="ai-advisor" className="py-24 relative">
      <div className="absolute inset-0 gradient-radial pointer-events-none opacity-50" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            AI Advisor
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Meet Your AI <span className="text-gradient">Financial Assistant</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Start a conversation with our AI-powered advisor to get personalized banking recommendations in minutes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div
            id="landbot-container"
            className="glass rounded-2xl overflow-hidden"
            style={{ height: "650px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default AIAdvisorSection;
