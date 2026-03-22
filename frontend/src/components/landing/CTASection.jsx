import { motion } from "framer-motion";
import { Button } from "../ui/button";

const CALENDLY_URL =
  "https://calendly.com/leon-boulliung-grabitautomaten/leon-call";

export const CTASection = () => {
  return (
    <section id="cta" className="py-24 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block font-mono text-xs tracking-widest uppercase text-slate-400 mb-4">
              Get Started
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-6">
              See how this works in your properties
            </h2>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-8">
              Book a free demo and explore how you can reduce friction and
              control operational costs across your portfolio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => window.open(CALENDLY_URL, "_blank")}
                className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-6 rounded-full font-medium text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
                data-testid="cta-book-demo-button"
              >
                Book a demo
              </Button>
              <Button
                onClick={() =>
                  (window.location.href = "mailto:leon@base-layer.io")
                }
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 rounded-full font-medium text-base transition-all"
                data-testid="cta-contact-button"
              >
                Request access
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>No commitment required</span>
              <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
              <span>15-minute call</span>
            </div>
          </motion.div>

          {/* Right - Calendly Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="calendly-container bg-white rounded-2xl overflow-hidden">
              <iframe
                src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=0f172a&primary_color=0052ff`}
                width="100%"
                height="700"
                frameBorder="0"
                title="Book a demo with BaseLayer"
                data-testid="calendly-embed"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
