import { motion } from "framer-motion";
import { Button } from "../ui/button";
import {
  Buildings,
  UsersThree,
  CalendarCheck,
  ChartLineUp,
} from "@phosphor-icons/react";

// Real photo of modern apartment building
const BUILDING_IMAGE = "https://images.pexels.com/photos/36294220/pexels-photo-36294220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-20 md:pt-24 pb-16 md:pb-24 grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-120px)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl"
          >
            <span className="inline-block font-mono text-xs tracking-widest uppercase text-slate-500 mb-6">
              Operational system for coliving
            </span>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1] mb-6">
              Reduce friction.
              <br />
              Control cost per unit.
            </h1>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
              Bring structure into your shared apartments and eliminate the
              small daily issues that drive operational cost and resident
              frustration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("cta")}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 rounded-full font-medium text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
                data-testid="hero-book-demo-button"
              >
                Book a demo
              </Button>
              <Button
                onClick={() => scrollToSection("how-it-works")}
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 rounded-full font-medium text-base transition-all"
                data-testid="hero-how-it-works-button"
              >
                See how it works
              </Button>
            </div>
          </motion.div>

          {/* Right - Dashboard Mockup with Background Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Background building image */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-20">
              <img 
                src={BUILDING_IMAGE} 
                alt="Modern apartment building" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="dashboard-mockup rounded-2xl p-6 shadow-lg relative z-10">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-mono text-xs text-slate-500 uppercase tracking-wider">
                    Property Overview
                  </p>
                  <h3 className="font-heading font-bold text-lg text-slate-900">
                    Friedrichshain Hub
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  <span className="text-xs text-slate-600">All systems ok</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <DashboardStat
                  icon={<Buildings size={20} />}
                  label="Units"
                  value="24"
                  trend="+2 this month"
                />
                <DashboardStat
                  icon={<UsersThree size={20} />}
                  label="Residents"
                  value="68"
                  trend="94% occupancy"
                />
                <DashboardStat
                  icon={<CalendarCheck size={20} />}
                  label="Tasks Today"
                  value="12"
                  trend="3 pending"
                />
                <DashboardStat
                  icon={<ChartLineUp size={20} />}
                  label="Compliance"
                  value="96%"
                  trend="+4% vs last week"
                />
              </div>

              {/* Responsibility List */}
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <p className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-3">
                  Today's Responsibilities
                </p>
                <div className="space-y-3">
                  <ResponsibilityRow
                    task="Kitchen cleaning"
                    assignee="Unit 4B"
                    status="completed"
                  />
                  <ResponsibilityRow
                    task="Common area check"
                    assignee="Unit 2A"
                    status="pending"
                  />
                  <ResponsibilityRow
                    task="Trash collection"
                    assignee="Unit 6C"
                    status="in-progress"
                  />
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-4 -right-4 bg-white rounded-xl border border-slate-200 p-3 shadow-md"
            >
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <ChartLineUp size={16} className="text-emerald-600" />
                </span>
                <div>
                  <p className="text-xs text-slate-500">Cost reduction</p>
                  <p className="font-heading font-bold text-slate-900">-23%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const DashboardStat = ({ icon, label, value, trend }) => (
  <div className="bg-white rounded-xl border border-slate-200 p-4">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-slate-400">{icon}</span>
      <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">
        {label}
      </span>
    </div>
    <p className="font-heading font-bold text-2xl text-slate-900 mb-1">
      {value}
    </p>
    <p className="text-xs text-slate-500">{trend}</p>
  </div>
);

const ResponsibilityRow = ({ task, assignee, status }) => {
  const statusStyles = {
    completed: "bg-emerald-100 text-emerald-700",
    pending: "bg-amber-100 text-amber-700",
    "in-progress": "bg-blue-100 text-blue-700",
  };

  const statusLabels = {
    completed: "Done",
    pending: "Pending",
    "in-progress": "In Progress",
  };

  return (
    <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
      <div>
        <p className="text-sm font-medium text-slate-900">{task}</p>
        <p className="text-xs text-slate-500">{assignee}</p>
      </div>
      <span
        className={`text-xs font-medium px-2 py-1 rounded-full ${statusStyles[status]}`}
      >
        {statusLabels[status]}
      </span>
    </div>
  );
};
