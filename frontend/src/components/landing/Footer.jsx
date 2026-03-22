import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-heading font-bold text-sm">
                B
              </span>
            </div>
            <span className="font-heading font-bold text-lg text-white">
              BaseLayer
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href="https://base-layer.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-white transition-colors"
              data-testid="footer-website-link"
            >
              base-layer.io
            </a>
            <a
              href="mailto:leon@base-layer.io"
              className="text-sm text-slate-400 hover:text-white transition-colors"
              data-testid="footer-email-link"
            >
              leon@base-layer.io
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-500">
            &copy; {currentYear} BaseLayer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
