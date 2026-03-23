import { motion } from "framer-motion";
import {
  Gear,
  ChartLineUp,
  Smiley,
  Buildings,
  ArrowRight,
} from "@phosphor-icons/react";

export const MoreThanSection = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block font-mono text-xs tracking-widest uppercase text-accent mb-4">
              Beyond Task Management
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6 leading-tight">
              More than a task manager
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              BaseLayer is a{" "}
              <span className="text-white font-medium">
                structured operational system
              </span>{" "}
              designed specifically for shared living companies. It's not about
              managing tasks — it's about{" "}
              <span className="text-white font-medium">
                automating control
              </span>{" "}
              over your properties.
            </p>

            <div className="space-y-4 mb-8">
              <BenefitRow
                icon={<Gear size={20} />}
                text="Automate responsibility assignment across all properties"
              />
              <BenefitRow
                icon={<Buildings size={20} />}
                text="Gain structured oversight without micromanagement"
              />
              <BenefitRow
                icon={<ChartLineUp size={20} />}
                text="Reduce operational cost per unit systematically"
              />
              <BenefitRow
                icon={<Smiley size={20} />}
                text="Increase resident satisfaction through clarity"
              />
            </div>

            <div className="flex items-center gap-3 text-accent">
              <span className="font-medium">The result</span>
              <ArrowRight size={18} />
              <span className="text-white">
                Predictable operations at scale
              </span>
            </div>
          </motion.div>

          {/* Right Visual - Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              {/* What it's NOT */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                <p className="font-mono text-xs text-red-400 uppercase tracking-wider mb-4">
                  What BaseLayer is NOT
                </p>
                <ul className="space-y-3">
                  <ComparisonItem negative text="A simple to-do list app" />
                  <ComparisonItem negative text="Another communication tool" />
                  <ComparisonItem negative text="A community platform" />
                  <ComparisonItem
                    negative
                    text="More work for your operators"
                  />
                </ul>
              </div>

              {/* What it IS */}
              <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6">
                <p className="font-mono text-xs text-accent uppercase tracking-wider mb-4">
                  What BaseLayer IS
                </p>
                <ul className="space-y-3">
                  <ComparisonItem
                    text="An operational control layer for your portfolio"
                  />
                  <ComparisonItem text="Automated structure that runs itself" />
                  <ComparisonItem
                    text="A system that reduces cost while improving experience"
                  />
                  <ComparisonItem text="Visibility and predictability at scale" />
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BenefitRow = ({ icon, text }) => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
      <span className="text-accent">{icon}</span>
    </div>
    <p className="text-slate-300">{text}</p>
  </div>
);

const ComparisonItem = ({ text, negative }) => (
  <li className="flex items-start gap-3">
    <span
      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
        negative ? "bg-red-500/20" : "bg-accent/30"
      }`}
    >
      {negative ? (
        <span className="text-red-400 text-xs font-bold">✕</span>
      ) : (
        <span className="text-accent text-xs font-bold">✓</span>
      )}
    </span>
    <span className={negative ? "text-slate-400" : "text-white"}>{text}</span>
  </li>
);
