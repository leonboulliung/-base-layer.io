import { motion } from "framer-motion";
import { Warning } from "@phosphor-icons/react";

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

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
              {/* Friction visual */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl border border-slate-200 p-4">
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
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-4">
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
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Warning size={16} className="text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium text-slate-900">
                          Common area dispute
                        </p>
                        <span className="text-xs text-slate-500">1d ago</span>
                      </div>
                      <p className="text-xs text-slate-500">
                        "Rules need to be clearer"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow indicator */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-center text-sm text-slate-500">
                  Without structure, small issues become daily friction
                </p>
              </div>
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
