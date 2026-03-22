import { motion } from "framer-motion";
import { Buildings, Gear, ArrowsClockwise, Users } from "@phosphor-icons/react";

const steps = [
  {
    number: "01",
    icon: <Buildings size={28} />,
    title: "Set up your property",
    description:
      "Add your properties and define shared areas: kitchens, bathrooms, common rooms, outdoor spaces.",
  },
  {
    number: "02",
    icon: <Gear size={28} />,
    title: "Define responsibility rules",
    description:
      "Set up what needs to happen and how often: cleaning schedules, maintenance checks, trash rotation.",
  },
  {
    number: "03",
    icon: <ArrowsClockwise size={28} />,
    title: "System assigns automatically",
    description:
      "BaseLayer distributes and rotates responsibilities fairly. Residents get notified automatically.",
  },
  {
    number: "04",
    icon: <Users size={28} />,
    title: "Residents follow structure",
    description:
      "Everyone knows what they're responsible for. No coordination needed. Operations run smoothly.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block font-mono text-xs tracking-widest uppercase text-slate-500 mb-4">
            How It Works
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            From setup to structured operations
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Get started in minutes. See results from day one.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-40px)] h-[2px] bg-slate-200"></div>
              )}

              <div className="text-center">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-slate-50 border border-slate-200 rounded-2xl mb-6 relative z-10">
                  <div className="text-center">
                    <span className="font-mono text-xs text-slate-400 block mb-1">
                      {step.number}
                    </span>
                    <span className="text-slate-600">{step.icon}</span>
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
