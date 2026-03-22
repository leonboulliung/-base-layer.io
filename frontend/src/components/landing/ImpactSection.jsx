import { motion } from "framer-motion";
import {
  CurrencyCircleDollar,
  Timer,
  Wrench,
  SmileyMeh,
  TrendDown,
} from "@phosphor-icons/react";

const impacts = [
  {
    icon: <CurrencyCircleDollar size={28} />,
    title: "Higher operational cost per unit",
    description:
      "Every manual coordination, every follow-up call, every unresolved issue adds to your cost base.",
  },
  {
    icon: <Timer size={28} />,
    title: "More time spent per property",
    description:
      "Your team spends hours each week on tasks that could be automated or eliminated entirely.",
  },
  {
    icon: <Wrench size={28} />,
    title: "Increased maintenance costs",
    description:
      "Small issues unreported become big repairs. Unclear responsibility means delayed action.",
  },
  {
    icon: <SmileyMeh size={28} />,
    title: "Lower resident satisfaction",
    description:
      "Friction in daily life leads to frustration. Frustrated residents leave bad reviews.",
  },
  {
    icon: <TrendDown size={28} />,
    title: "Higher churn and vacancy risk",
    description:
      "Unhappy residents don't renew. High turnover means more work, more cost, more vacancy.",
  },
];

export const ImpactSection = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-block font-mono text-xs tracking-widest uppercase text-slate-400 mb-4">
            Business Impact
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            And they directly impact your business
          </h2>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed">
            Every friction point has a cost. Most operators underestimate how
            much these small issues drain their margins.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:bg-slate-800/70 transition-colors"
            >
              <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mb-4">
                <span className="text-slate-300">{impact.icon}</span>
              </div>
              <h3 className="font-heading font-semibold text-lg text-white mb-2">
                {impact.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {impact.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
