'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function ContactPage() {
  const prefersReduced = useReducedMotion();
  const fadeIn = prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 };

  return (
    <div className="pt-24 pb-20 bg-bg">
      <div className="max-w-[800px] mx-auto px-6">
        <motion.h1
          initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl md:text-6xl text-ink mb-6"
          style={{ fontStyle: 'italic', fontWeight: 300 }}
        >
          Come find us.
        </motion.h1>

        <motion.div
          initial={fadeIn}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-10 mt-12"
        >
          <div>
            <h2 className="font-nav text-[11px] tracking-[4px] uppercase text-muted mb-3">Address</h2>
            <address className="not-italic text-ink leading-relaxed text-base">
              G7, Orange Height Residency, GIDC,<br />
              Opposite Kamlam Garden,<br />
              Ankleshwar - 393001
            </address>

            <h2 className="font-nav text-[11px] tracking-[4px] uppercase text-muted mt-8 mb-3">Hours</h2>
            <p className="text-ink">Open from 11:00 AM daily</p>

            <h2 className="font-nav text-[11px] tracking-[4px] uppercase text-muted mt-8 mb-3">Contact</h2>
            <a
              href="tel:+919099058602"
              className="block text-ink hover:text-red transition-colors no-underline text-base"
            >
              +91 90990 58602
            </a>

            <h2 className="font-nav text-[11px] tracking-[4px] uppercase text-muted mt-8 mb-3">Follow</h2>
            <a
              href="https://instagram.com/1224_delights_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-red transition-colors no-underline text-base"
            >
              @1224_delights_
            </a>

            <motion.div
              initial={fadeIn}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
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

          <motion.div
            initial={fadeIn}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <h2 className="font-nav text-[11px] tracking-[4px] uppercase text-muted mb-3">Find us on the map</h2>
            <div className="w-full aspect-[4/3] border border-border bg-highlight flex items-center justify-center relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1000!2d72.9971!3d21.6267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="1224 Dessert Cafe location"
                className="absolute inset-0"
              />
              <span className="absolute bottom-2 left-2 text-[11px] font-nav tracking-[2px] uppercase text-muted pointer-events-none">
                G7, Orange Height, GIDC, Ankleshwar
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
