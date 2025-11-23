import Heading from '../atoms/Heading';
import Image from '../atoms/Image';

export default function BrowseImageCards({ cards }) {
  return (
    <div className="flex gap-4 mt-8">
      {cards.map((card, i) => (
        <div key={i} className="flex flex-col gap-6">
          <Image src={card?.src} alt={card?.title} />
          <Heading className="text-(--text-secondary)" variant="tertiary">
            {card?.title}
          </Heading>
        </div>
      ))}
    </div>
  );
}
