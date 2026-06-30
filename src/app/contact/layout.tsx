import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — 1224 Dessert Cafe',
  description: 'Visit 1224 Dessert Cafe at G7, Orange Height Residency, GIDC, Ankleshwar. Open daily from 11:00 AM. Call or WhatsApp to order.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
