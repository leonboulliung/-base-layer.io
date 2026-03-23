import "@/App.css";
import { Navbar } from "./components/landing/Navbar";
import { HeroSection } from "./components/landing/HeroSection";
import { ProblemSection } from "./components/landing/ProblemSection";
import { ImpactSection } from "./components/landing/ImpactSection";
import { ResidentExperienceSection } from "./components/landing/ResidentExperienceSection";
import { BeforeAfterSection } from "./components/landing/BeforeAfterSection";
import { TestimonialsSection } from "./components/landing/TestimonialsSection";
import { SolutionSection } from "./components/landing/SolutionSection";
import { HowItWorksSection } from "./components/landing/HowItWorksSection";
import { OutcomeSection } from "./components/landing/OutcomeSection";
import { FAQSection } from "./components/landing/FAQSection";
import { CTASection } from "./components/landing/CTASection";
import { Footer } from "./components/landing/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ImpactSection />
        <ResidentExperienceSection />
        <BeforeAfterSection />
        <TestimonialsSection />
        <SolutionSection />
        <HowItWorksSection />
        <OutcomeSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
