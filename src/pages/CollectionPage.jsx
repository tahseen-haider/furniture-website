import { CollectionPageTemplate } from '@templates';

const CollectionPage = () => {
  const collections = [
    { id: 1, title: 'Bed Sets', link: '/collections', image: '/images/placeholder.jpg' },
    { id: 2, title: 'Dining Tables', link: '/collections', image: '/images/placeholder.jpg' },
    { id: 3, title: 'Sofa and Chairs', link: '/collections', image: '/images/placeholder.jpg' },
    { id: 4, title: 'Cushions', link: '/collections', image: '/images/placeholder.jpg' },
    { id: 5, title: 'Consoles & Frames', link: '/collections', image: '/images/placeholder.jpg' },
    { id: 6, title: 'Planters', link: '/collections', image: '/images/placeholder.jpg' },
    { id: 7, title: 'Home Accessories', link: '/collections', image: '/images/placeholder.jpg' },
    { id: 8, title: 'Chests & Sideboards', link: '/collections', image: '/images/placeholder.jpg' },
    { id: 9, title: 'Mirror Frames', link: '/collections', image: '/images/placeholder.jpg' },
    { id: 10, title: 'Table Decor', link: '/collections', image: '/images/placeholder.jpg' },
    { id: 11, title: 'Lamps & Lights', link: '/collections', image: '/images/placeholder.jpg' },
    {
      id: 12,
      title: 'Table Lamps and Lights',
      link: '/collections',
      image: '/images/placeholder.jpg',
    },
    {
      id: 13,
      title: 'Coffee and Center Tables',
      link: '/collections',
      image: '/images/placeholder.jpg',
    },
    { id: 14, title: 'Writing Desks', link: '/collections', image: '/images/placeholder.jpg' },
    { id: 15, title: 'Swings', link: '/collections', image: '/images/placeholder.jpg' },
    { id: 16, title: 'Sculptures', link: '/collections', image: '/images/placeholder.jpg' },
  ];

  return <CollectionPageTemplate collections={collections} />;
};

export default CollectionPage;
