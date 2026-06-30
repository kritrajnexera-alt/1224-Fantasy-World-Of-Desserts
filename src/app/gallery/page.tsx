'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

const images = [
  { label: 'Signature Waffle', src: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&h=800&fit=crop', h: 'h-[280px] md:h-[280px]' },
  { label: 'Cold Brew Pour', src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=800&fit=crop', h: 'h-[200px] md:h-[200px]' },
  { label: 'Chocolate Mousse', src: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=600&h=800&fit=crop', h: 'h-[340px] md:h-[340px]' },
  { label: 'Cafe Counter', src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=800&fit=crop', h: 'h-[220px] md:h-[220px]' },
  { label: 'Berry Tartlet', src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=800&fit=crop', h: 'h-[260px] md:h-[260px]' },
  { label: 'Latte Art', src: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=800&fit=crop', h: 'h-[300px] md:h-[300px]' },
  { label: 'Dessert of the Day', src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=800&fit=crop', h: 'h-[240px] md:h-[240px]' },
  { label: 'Espresso Shot', src: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&h=800&fit=crop', h: 'h-[200px] md:h-[200px]' },
  { label: 'Cheesecake Slice', src: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&h=800&fit=crop', h: 'h-[320px] md:h-[320px]' },
];

const easeArr: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function GalleryPage() {
  const prefersReduced = useReducedMotion();
  const [selected, setSelected] = useState<typeof images[number] | null>(null);
  const fadeUp = prefersReduced
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 16, scale: 0.97 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          scale: 1,
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
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              onClick={() => setSelected(img)}
              className={`${img.h} col-span-1 border border-border group cursor-pointer relative overflow-hidden bg-highlight`}
            >
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs text-white font-nav tracking-[2px] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  {img.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8" onClick={() => setSelected(null)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: easeArr }}
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src.replace('w=600&h=800', 'w=1200&h=1600')}
              alt={selected.label}
              className="w-full h-auto max-h-[80dvh] object-contain border border-border"
            />
            <div className="absolute -bottom-12 left-0 right-0 flex justify-between items-center">
              <p className="font-display text-lg text-white" style={{ fontStyle: 'italic' }}>{selected.label}</p>
              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 border border-white/40 text-white font-nav text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-ink transition-all duration-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
