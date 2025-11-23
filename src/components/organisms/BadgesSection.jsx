import Badge from '../molecules/Badge';

export default function BadgeSection() {
  const badges = [
    {
      icon: '/icons/Truck.svg',
      title: 'Free Delivery',
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      icon: '/icons/24.svg',
      title: 'Support 24/7',
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      icon: '/icons/Shield.svg',
      title: '100% Authentic',
      description: 'Lorem ipsum dolor sit amet.',
    },
  ];

  return (
    <div className="flex justify-between gap-8 h-[150px] px-12 max-w-[1440px] mx-auto bg-(--color-bg-secondary)">
      {badges.map((b, i) => (
        <Badge key={i} icon={b.icon} title={b.title} description={b.description} />
      ))}
    </div>
  );
}
