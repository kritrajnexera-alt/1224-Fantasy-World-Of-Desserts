import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — 1224 Dessert Cafe',
  description: '1224 Dessert Cafe in Ankleshwar — a space where dessert becomes art. Built for quiet moments and sweet conversations.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
