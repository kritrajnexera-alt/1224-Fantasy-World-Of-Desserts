'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  const prefersReduced = useReducedMotion();
  const fadeIn = prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 };

  return (
    <div className="pt-24 pb-20 bg-bg">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="relative">
          <span
            className="absolute -top-8 right-0 select-none pointer-events-none font-display text-[160px] md:text-[240px] leading-none text-watermark"
            style={{ fontStyle: 'italic', fontWeight: 300 }}
            aria-hidden="true"
          >
            1224
          </span>

          <motion.div
            initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h1 className="font-display text-5xl md:text-6xl text-ink leading-tight mb-8" style={{ fontStyle: 'italic', fontWeight: 300 }}>
              A new kind of<br />dessert experience
            </h1>
          </motion.div>
        </div>

        <div className="space-y-6 text-base md:text-lg leading-[1.9] text-ink/80">
          <motion.p
            initial={fadeIn}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            1224 Dessert Cafe opened its doors in Ankleshwar&apos;s GIDC with a simple belief — that great desserts and coffee shouldn&apos;t require a trip to a big city. They should be right here, in your neighbourhood, made fresh every day.
          </motion.p>

          <motion.p
            initial={fadeIn}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Located at Orange Height Residency, opposite Kamlam Garden, we&apos;ve created a space where quality meets simplicity. No fuss, no pretence — just carefully made food and drink, served in a clean, modern setting.
          </motion.p>

          <motion.p
            initial={fadeIn}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            We&apos;re new, we&apos;re growing, and we&apos;re proud to be part of Ankleshwar&apos;s food scene. Every item on our menu is made with attention, from our signature waffles to our slow-steeped cold brew.
          </motion.p>
        </div>

        <motion.div
          initial={fadeIn}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 p-6 bg-highlight"
        >
          <p className="font-nav text-[11px] tracking-[3px] uppercase text-muted mb-2">Location</p>
          <address className="not-italic text-ink leading-relaxed">
            G7, Orange Height Residency, GIDC,<br />
            Opposite Kamlam Garden,<br />
            Ankleshwar - 393001
          </address>
          <p className="mt-3 font-nav text-[11px] tracking-[3px] uppercase text-muted">Hours</p>
          <p className="text-ink">Open daily from 11:00 AM</p>
        </motion.div>

        <motion.div
          initial={fadeIn}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-3 border border-ink text-ink font-nav text-[12px] tracking-[3px] uppercase no-underline hover:bg-ink hover:text-white transition-all duration-300"
          >
            Visit us →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
