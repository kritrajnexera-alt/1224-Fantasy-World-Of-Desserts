import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery — 1224 Dessert Cafe',
  description: 'View the visual story of 1224 Dessert Cafe — where every dessert is presented as art.',
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
