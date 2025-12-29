import { LayoutDashboard, Package, LucideSwatchBook, Users, BedDouble } from 'lucide-react';
export const mainNavLinks = [
  { title: 'Shop', link: '/collections' },
  { title: 'Spaces', link: '#' },
  { title: 'Our Services', link: '#' },
  { title: 'Our Projects', link: '#' },
  { title: 'Contact', link: '#' },
];

export const adminNavLinks = [
  { title: 'Dashboard', link: '/admin/dashboard', icon: LayoutDashboard },
  { title: 'Products', link: '/admin/products', icon: BedDouble },
  { title: 'Collections', link: '/admin/collections', icon: LucideSwatchBook },
  { title: 'Users', link: '/admin/users', icon: Users },
  { title: 'Orders', link: '/admin/orders', icon: Package },
];
