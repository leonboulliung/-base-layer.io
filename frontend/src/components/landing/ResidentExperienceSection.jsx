import { motion } from "framer-motion";
import { Warning } from "@phosphor-icons/react";

// Real photo of coliving common space
const COLIVING_IMAGE = "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export const ResidentExperienceSection = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block font-mono text-xs tracking-widest uppercase text-slate-500 mb-4">
              Core Insight
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-6">
              Coliving only works if it feels effortless
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8">
              When responsibilities are unclear, residents experience friction.
              This directly affects satisfaction, reviews, and ultimately your
              business.
            </p>

            <div className="space-y-4">
              <FrictionPoint text="Shared spaces become messy and tensions rise" />
              <FrictionPoint text="Expectations are not aligned between residents" />
              <FrictionPoint text="Communication becomes reactive instead of proactive" />
            </div>
          </motion.div>

          {/* Right Visual - Image with overlay cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={COLIVING_IMAGE}
                alt="Modern coliving shared living space"
                className="w-full h-80 object-cover"
              />
            </div>
            
            {/* Floating friction cards */}
            <div className="absolute -bottom-6 -left-6 right-6 space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-white rounded-xl border border-slate-200 p-4 shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Warning size={16} className="text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-slate-900">
                        Kitchen not cleaned
                      </p>
                      <span className="text-xs text-slate-500">2h ago</span>
                    </div>
                    <p className="text-xs text-slate-500">
                      "Whose turn was it today?"
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="bg-white rounded-xl border border-slate-200 p-4 shadow-lg ml-8"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Warning size={16} className="text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-slate-900">
                        Trash not taken out
                      </p>
                      <span className="text-xs text-slate-500">5h ago</span>
                    </div>
                    <p className="text-xs text-slate-500">
                      "I thought someone else would do it"
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FrictionPoint = ({ text }) => (
  <div className="flex items-center gap-3">
    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></div>
    <p className="text-slate-600">{text}</p>
  </div>
);
