import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

// Placeholder images - will be replaced with actual before/after images
const BEFORE_IMAGE = "https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const AFTER_IMAGE = "https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export const BeforeAfterSection = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block font-mono text-xs tracking-widest uppercase text-slate-500 mb-4">
            The Difference
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            From chaos to clarity
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            See how clear responsibility structures transform shared spaces from
            daily friction points into well-maintained environments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -top-3 left-4 z-10">
              <span className="inline-block bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Before BaseLayer
              </span>
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-red-200 shadow-lg">
              <img
                src={BEFORE_IMAGE}
                alt="Shared kitchen without clear responsibilities - messy and disorganized"
                className="w-full h-64 md:h-80 object-cover"
                data-testid="before-image"
              />
            </div>
            <div className="mt-4 p-4 bg-red-50 rounded-xl border border-red-100">
              <p className="text-sm text-red-800 font-medium mb-2">
                Unclear responsibilities lead to:
              </p>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Dishes piling up for days</li>
                <li>• Tensions between residents</li>
                <li>• Constant operator intervention</li>
              </ul>
            </div>
          </motion.div>

          {/* Arrow indicator for desktop */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20">
            <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
              <ArrowRight size={24} className="text-white" />
            </div>
          </div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-3 left-4 z-10">
              <span className="inline-block bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                After BaseLayer
              </span>
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-emerald-200 shadow-lg">
              <img
                src={AFTER_IMAGE}
                alt="Shared kitchen with clear responsibilities - clean and organized"
                className="w-full h-64 md:h-80 object-cover"
                data-testid="after-image"
              />
            </div>
            <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <p className="text-sm text-emerald-800 font-medium mb-2">
                Clear structure delivers:
              </p>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>• Everyone knows their turn</li>
                <li>• Spaces stay clean daily</li>
                <li>• Zero coordination needed</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
