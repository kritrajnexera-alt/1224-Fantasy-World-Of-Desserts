import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu — 1224 Dessert Cafe',
  description: 'Explore our menu of signature waffles, espresso drinks, cold beverages, and fresh-baked bites at 1224 Dessert Cafe in Ankleshwar.',
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
