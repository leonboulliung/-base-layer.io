import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "How long does it take to set up BaseLayer?",
    answer:
      "Most operators are up and running within a day. You add your properties, define your responsibility rules, and invite your residents. The system handles everything else automatically.",
  },
  {
    question: "Do my residents need to download an app?",
    answer:
      "Residents access BaseLayer through a simple web interface. No app download required. They receive notifications via email or SMS based on your preferences.",
  },
  {
    question: "What happens when a resident doesn't complete their task?",
    answer:
      "The system tracks completion status and can send automatic reminders. As an operator, you get full visibility into compliance across all properties and can intervene when needed.",
  },
  {
    question: "Can I customize the responsibility rules?",
    answer:
      "Yes. You define what tasks exist, how often they rotate, and how they're assigned. The system is flexible enough to handle different property types and resident arrangements.",
  },
  {
    question: "How does BaseLayer handle new residents moving in?",
    answer:
      "When a new resident joins, they're automatically added to the rotation. They get a clear overview of house rules, their responsibilities, and what's expected. No manual onboarding needed.",
  },
  {
    question: "What kind of properties is BaseLayer designed for?",
    answer:
      "BaseLayer works for any shared living arrangement: coliving spaces, student housing, co-housing communities, or any multi-unit property with shared responsibilities.",
  },
  {
    question: "How much does BaseLayer cost?",
    answer:
      "Pricing depends on your portfolio size and needs. Book a demo call and we'll give you a custom quote based on your specific situation.",
  },
  {
    question: "Can I try BaseLayer before committing?",
    answer:
      "Yes. We offer a pilot program where you can test BaseLayer on a few properties before rolling it out across your portfolio. No long-term commitment required to get started.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-white grid-pattern">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-mono text-xs tracking-widest uppercase text-slate-500 mb-4">
            FAQ
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            Common questions
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Everything you need to know about getting started with BaseLayer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger
                  className="text-left font-heading font-semibold text-slate-900 hover:no-underline py-5"
                  data-testid={`faq-trigger-${index}`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
