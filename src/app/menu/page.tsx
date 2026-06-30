'use client';

import { motion, useReducedMotion } from 'framer-motion';

const categories = [
  {
    label: 'DESSERTS',
    items: [
      { name: 'Signature Waffle', price: '₹180' },
      { name: 'Dessert of the Day', price: '₹120' },
      { name: 'Chocolate Mousse', price: '₹160' },
      { name: 'Berry Tartlet', price: '₹190' },
      { name: 'Classic Cheesecake', price: '₹210' },
    ],
  },
  {
    label: 'COFFEE',
    items: [
      { name: 'Espresso', price: '₹100' },
      { name: 'Americano', price: '₹120' },
      { name: 'Latte', price: '₹140' },
      { name: 'Cappuccino', price: '₹140' },
      { name: 'Cold Brew', price: '₹140' },
    ],
  },
  {
    label: 'COLD DRINKS',
    items: [
      { name: 'Iced Latte', price: '₹160' },
      { name: 'Frappé', price: '₹180' },
      { name: 'Milkshake', price: '₹150' },
      { name: 'Fresh Lemonade', price: '₹120' },
    ],
  },
  {
    label: 'BITES',
    items: [
      { name: 'Butter Croissant', price: '₹90' },
      { name: 'Almond Biscotti', price: '₹70' },
      { name: 'Brownie', price: '₹110' },
    ],
  },
];

const easeArr: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function MenuPage() {
  const prefersReduced = useReducedMotion();
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
  return (
    <div className="pt-24 pb-20 bg-bg">
      <div className="max-w-[800px] mx-auto px-6">
        <motion.h1
          initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl md:text-6xl text-ink mb-16"
          style={{ fontStyle: 'italic', fontWeight: 300 }}
        >
          The Menu
        </motion.h1>

        {categories.map((cat, ci) => (
          <motion.section
            key={cat.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
            className="mb-14"
          >
            <h2 className="font-nav text-[11px] tracking-[4px] uppercase text-muted mb-6">{cat.label}</h2>
            <div>
              {cat.items.map((item, ii) => (
                <motion.div
                  key={item.name}
                  custom={ii}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group flex items-baseline justify-between py-3 border-b border-border hover:border-red/30 transition-colors duration-200"
                >
                  <span className="font-display text-xl md:text-2xl text-ink group-hover:text-red transition-colors duration-200" style={{ fontStyle: 'italic' }}>
                    {item.name}
                  </span>
                  <span className="font-mono text-sm text-muted group-hover:text-red transition-colors duration-200">{item.price}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
