'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

const signature = [
  { num: '01', name: 'Signature Waffle', desc: 'Crispy, golden, unforgettable.', price: '₹180' },
  { num: '02', name: 'Cold Brew', desc: 'Slow-steeped, perfectly balanced.', price: '₹140' },
  { num: '03', name: 'Dessert of the Day', desc: 'Ask us what\'s fresh today.', price: '₹120' },
];

const instagram = [
  { label: 'Waffle art', bg: 'bg-highlight' },
  { label: 'Coffee pour', bg: 'bg-border/50' },
  { label: 'Dessert close-up', bg: 'bg-highlight' },
  { label: 'Cafe corner', bg: 'bg-border/50' },
];

const easeArr: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Home() {
  const prefersReduced = useReducedMotion();
  const fadeUp = prefersReduced
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: i * 0.12, ease: easeArr },
        }),
      };
  const h1From = prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 };
  const pFrom = prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 };
  const fadeFrom = prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 };
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden bg-bg pt-16">
        <span
          className="absolute select-none pointer-events-none font-display text-[280px] md:text-[400px] leading-none text-watermark"
          style={{ fontStyle: 'italic', fontWeight: 300 }}
          aria-hidden="true"
        >
          1224
        </span>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.h1
            initial={h1From}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeArr }}
            className="font-display text-5xl sm:text-[72px] md:text-[96px] leading-[0.95] text-ink"
            style={{ fontStyle: 'italic', fontWeight: 300 }}
          >
            Desserts
            <br />
            Reimagined.
          </motion.h1>
          <motion.p
            initial={pFrom}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 font-nav text-[13px] tracking-[3px] uppercase text-muted"
          >
            GIDC Ankleshwar · Open from 11:00 AM · 4.7 ★
          </motion.p>
          <motion.div
            initial={pFrom}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/menu"
              className="inline-block px-8 py-3 border border-ink text-ink font-nav text-[12px] tracking-[3px] uppercase no-underline hover:bg-ink hover:text-white transition-all duration-300"
            >
              Explore our menu →
            </Link>
            <a
              href="https://wa.me/919099058602?text=Hi%201224%20Dessert%20Cafe!%20I%20want%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-ink text-white font-nav text-[12px] tracking-[3px] uppercase no-underline hover:bg-red transition-colors duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Order on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* SIGNATURE ITEMS */}
      <section className="py-24 md:py-32 bg-bg">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {signature.map((item, i) => (
              <motion.div
                key={item.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                className="border-t border-border pt-6"
              >
                <span className="font-display text-4xl text-muted/30" style={{ fontStyle: 'italic' }}>
                  {item.num}
                </span>
                <h2 className="mt-3 font-display text-3xl md:text-4xl text-ink leading-tight" style={{ fontStyle: 'italic', fontWeight: 400 }}>
                  {item.name}
                </h2>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
                <span className="mt-3 block font-mono text-sm text-red">{item.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="py-20 md:py-28 bg-highlight">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <motion.div
            initial={fadeFrom}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="font-display text-3xl md:text-4xl text-ink leading-snug" style={{ fontStyle: 'italic', fontWeight: 400 }}>
              &ldquo;We opened 1224 because Ankleshwar deserved something special.&rdquo;
            </blockquote>
            <div className="mt-6 w-12 h-[1px] bg-red mx-auto" />
            <p className="mt-6 font-nav text-[12px] tracking-[3px] uppercase text-muted">
              Rated 4.7 · GIDC · Open daily from 11AM
            </p>
          </motion.div>
        </div>
      </section>

      {/* INSTAGRAM STRIP */}
      <section className="py-20 bg-bg">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="font-nav text-[12px] tracking-[4px] uppercase text-muted">Follow us for daily dessert drops</p>
            <a
              href="https://instagram.com/1224_delights_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 font-nav text-[11px] tracking-[3px] uppercase text-ink hover:text-red transition-colors no-underline"
            >
              @1224_delights_
            </a>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {instagram.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`aspect-square ${item.bg} flex items-center justify-center border border-border group cursor-pointer relative overflow-hidden`}
              >
                <span className="text-xs text-muted font-nav tracking-[2px] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
