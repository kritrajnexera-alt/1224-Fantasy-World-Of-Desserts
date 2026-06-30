'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

const images = [
  { label: 'Signature Waffle', bg: 'bg-highlight', h: 'h-[280px]' },
  { label: 'Cold Brew Pour', bg: 'bg-border/50', h: 'h-[200px]' },
  { label: 'Chocolate Mousse', bg: 'bg-highlight', h: 'h-[340px]' },
  { label: 'Cafe Counter', bg: 'bg-border/50', h: 'h-[220px]' },
  { label: 'Berry Tartlet', bg: 'bg-highlight', h: 'h-[260px]' },
  { label: 'Latte Art', bg: 'bg-border/50', h: 'h-[300px]' },
  { label: 'Dessert of the Day', bg: 'bg-highlight', h: 'h-[240px]' },
  { label: 'Espresso Shot', bg: 'bg-border/50', h: 'h-[200px]' },
  { label: 'Cheesecake Slice', bg: 'bg-highlight', h: 'h-[320px]' },
];

const easeArr: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function GalleryPage() {
  const prefersReduced = useReducedMotion();
  const [selected, setSelected] = useState<string | null>(null);
  const fadeUp = prefersReduced
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: i * 0.06, ease: easeArr },
        }),
      };
  const h1From = prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 };

  return (
    <div className="pt-24 pb-20 bg-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.h1
          initial={h1From}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl md:text-6xl text-ink mb-16"
          style={{ fontStyle: 'italic', fontWeight: 300 }}
        >
          Gallery
        </motion.h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.button
              key={img.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              onClick={() => setSelected(img.label)}
              className={`${img.h} md:${img.h} col-span-1 ${img.bg} border border-border group cursor-pointer relative overflow-hidden`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs text-muted font-nav tracking-[2px] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105">
                  {img.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-6" onClick={() => setSelected(null)}>
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-surface p-8 max-w-md w-full text-center border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-display text-2xl text-ink mb-2" style={{ fontStyle: 'italic' }}>{selected}</p>
            <p className="font-nav text-[11px] tracking-[3px] uppercase text-muted">1224 Dessert Cafe</p>
            <button onClick={() => setSelected(null)} className="mt-6 px-6 py-2 border border-ink text-ink font-nav text-[11px] tracking-[3px] uppercase hover:bg-ink hover:text-white transition-colors">
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
