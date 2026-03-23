import { motion } from "framer-motion";
import { Star, Quotes } from "@phosphor-icons/react";

const testimonials = [
  {
    name: "Maria K.",
    role: "Resident, Berlin Coliving Hub",
    quote:
      "Before BaseLayer, the kitchen was always a mess and nobody knew whose turn it was. Now I get a simple notification, I do my part, and everything stays clean. No more awkward group chats about dirty dishes!",
    rating: 5,
  },
  {
    name: "Jonas T.",
    role: "Resident, Munich Shared Living",
    quote:
      "I used to dread the constant WhatsApp messages about cleaning schedules. Now it's automatic – I know exactly when it's my responsibility. The apartment has never been this organized.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    role: "Resident, Hamburg Co-Living Space",
    quote:
      "The best part is the fairness. Everyone does their share, and there's no more finger-pointing. It actually improved the atmosphere in our house. We focus on living together, not arguing about chores.",
    rating: 5,
  },
  {
    name: "Alex M.",
    role: "Resident, Frankfurt Coliving",
    quote:
      "As someone who travels a lot for work, I always worried about missing my cleaning duties. BaseLayer adjusts automatically and keeps me accountable without stress. Game changer.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block font-mono text-xs tracking-widest uppercase text-slate-500 mb-4">
            Resident Voices
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            What residents say
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Hear from people who experience the difference every day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              data-testid={`testimonial-${index}`}
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quotes size={32} className="text-accent/20" weight="fill" />
              </div>

              {/* Quote text */}
              <p className="text-slate-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-amber-400"
                    weight="fill"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                  <span className="text-slate-600 font-medium text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
