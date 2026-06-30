'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-border bg-bg"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <span className="font-nav text-xs tracking-[4px] uppercase font-bold">1224</span>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-xs">
              Premium desserts and coffee in Ankleshwar GIDC. Open daily from 11:00 AM.
            </p>
          </div>
          <div>
            <span className="font-nav text-[10px] tracking-[3px] uppercase text-muted">Visit</span>
            <address className="not-italic mt-2 text-sm text-ink leading-relaxed">
              G7, Orange Height Residency, GIDC,<br />
              Opposite Kamlam Garden,<br />
              Ankleshwar - 393001
            </address>
          </div>
          <div>
            <span className="font-nav text-[10px] tracking-[3px] uppercase text-muted">Follow</span>
            <a
              href="https://instagram.com/1224_delights_"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-sm text-ink hover:text-red transition-colors no-underline"
            >
              @1224_delights_
            </a>
            <p className="mt-1 text-sm text-muted">Open from 11:00 AM daily</p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted">
          <p>© {new Date().getFullYear()} 1224 Dessert Cafe.</p>
          <p>Ankleshwar, Gujarat.</p>
        </div>
      </div>
    </motion.footer>
  );
}
