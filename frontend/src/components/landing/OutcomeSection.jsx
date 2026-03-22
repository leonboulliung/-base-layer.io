import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react";

const outcomes = [
  "Less friction in the resident experience",
  "Lower operational workload",
  "Controlled and reduced cost per unit",
  "Fewer issues and escalations",
  "More predictable operations",
  "Better resident satisfaction scores",
];

export const OutcomeSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-accent-subtle to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block font-mono text-xs tracking-widest uppercase text-accent mb-4">
              Results
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-6">
              What changes
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8">
              When structure replaces chaos, operations become predictable.
              Costs go down. Satisfaction goes up.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-white" weight="bold" />
                  </div>
                  <p className="text-slate-700">{outcome}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Metrics Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8">
              <p className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-6">
                Average results after 3 months
              </p>

              <div className="space-y-6">
                <MetricBar label="Operational time saved" value={40} unit="%" />
                <MetricBar
                  label="Cost per unit reduction"
                  value={23}
                  unit="%"
                />
                <MetricBar label="Issue resolution speed" value={65} unit="%" />
                <MetricBar label="Resident satisfaction" value={89} unit="%" />
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-500 text-center">
                  Based on data from properties using BaseLayer for 90+ days
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MetricBar = ({ label, value, unit }) => (
  <div>
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm text-slate-600">{label}</span>
      <span className="font-heading font-bold text-lg text-slate-900">
        {value}
        {unit}
      </span>
    </div>
    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-accent rounded-full"
      />
    </div>
  </div>
);
