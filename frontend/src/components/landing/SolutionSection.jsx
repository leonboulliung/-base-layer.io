import { motion } from "framer-motion";
import {
  ArrowsClockwise,
  Eye,
  Megaphone,
  UserCircleCheck,
  Buildings,
} from "@phosphor-icons/react";

const features = [
  {
    icon: <ArrowsClockwise size={24} />,
    title: "Automatic responsibility assignment",
    description:
      "Define rules once. The system assigns and rotates responsibilities automatically. No manual tracking needed.",
  },
  {
    icon: <UserCircleCheck size={24} />,
    title: "Clear resident expectations",
    description:
      "Every resident knows exactly what they're responsible for and when. No ambiguity, no excuses.",
  },
  {
    icon: <Buildings size={24} />,
    title: "Structured shared spaces",
    description:
      "Common areas have clear rules and schedules. Everyone knows what's expected.",
  },
  {
    icon: <Megaphone size={24} />,
    title: "Centralized communication",
    description:
      "Announcements, rules, and important information in one place. No more scattered WhatsApp groups.",
  },
  {
    icon: <Eye size={24} />,
    title: "Full visibility for operators",
    description:
      "See what's happening across all your properties. Track compliance and identify issues before they escalate.",
  },
];

export const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-block font-mono text-xs tracking-widest uppercase text-slate-500 mb-4">
            The Solution
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            A simple operational layer between you and your residents
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            BaseLayer brings structure to your operations without adding
            complexity. Define rules, and let the system handle the rest.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bento-card bg-white border border-slate-200 rounded-2xl p-6 ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 bg-accent-subtle rounded-xl flex items-center justify-center mb-4">
                <span className="text-accent">{feature.icon}</span>
              </div>
              <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
