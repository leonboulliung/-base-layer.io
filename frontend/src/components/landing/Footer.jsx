import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-12 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Top Row - Logo and Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
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
        </div>

        {/* Legal Text */}
        <div className="pt-8 space-y-4 text-xs text-slate-500 leading-relaxed">
          <p>
            © 2026 BaseLayer – a product by BOULLIUNG SASU, 60 rue François 1er, 75008 Paris, France
          </p>
          <p>
            BaseLayer is an early-stage software product providing operational tools for shared living and coliving operators.
          </p>
          <p>
            This website is for informational purposes only and does not constitute a binding offer. Any services are subject to individual agreement.
          </p>
          <p>
            We respect your privacy. Personal data submitted through this website (e.g. via contact forms) will only be used to respond to your inquiry and will not be shared with third parties.
          </p>
          <p>
            This website may use essential cookies required for technical functionality.
          </p>
        </div>
      </div>
    </footer>
  );
};
