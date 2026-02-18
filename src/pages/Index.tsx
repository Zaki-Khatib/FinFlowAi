import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import WhyUsSection from "@/components/landing/WhyUsSection";
import AIAdvisorSection from "@/components/landing/AIAdvisorSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <WhyUsSection />
        <AIAdvisorSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
