import { motion } from "framer-motion";
import {
  ChatCircleDots,
  ClipboardText,
  Broom,
  Question,
  Clock,
} from "@phosphor-icons/react";

const problems = [
  {
    icon: <ClipboardText size={24} />,
    title: "Unclear responsibilities",
    description:
      "No one knows who should clean what, or when. Shared spaces become everyone's problem and no one's responsibility.",
  },
  {
    icon: <ChatCircleDots size={24} />,
    title: "Constant coordination",
    description:
      "WhatsApp messages, emails, phone calls. Every small issue requires manual follow-up between residents and operators.",
  },
  {
    icon: <Broom size={24} />,
    title: "Repeated small issues",
    description:
      "The same problems keep coming back: dirty kitchens, missing supplies, broken appliances waiting to be reported.",
  },
  {
    icon: <Question size={24} />,
    title: "Confused residents",
    description:
      "New residents don't know house rules. Existing residents forget expectations. Everyone interprets things differently.",
  },
  {
    icon: <Clock size={24} />,
    title: "Time lost in communication",
    description:
      "Operators spend hours each week answering the same questions and coordinating the same basic tasks.",
  },
];

export const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-block font-mono text-xs tracking-widest uppercase text-slate-500 mb-4">
            The Reality
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            Small frictions add up
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            When there's no structure, even simple things become complicated.
            Every unclear responsibility creates work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bento-card bg-white border border-slate-200 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-slate-600">{problem.icon}</span>
              </div>
              <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
