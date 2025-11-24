import Heading from '../atoms/Heading';
import Image from '../atoms/Image';
import Paragraph from '../atoms/Paragraph';

export default function InstructionImageCards({ cards }) {
  return (
    <div className="flex gap-4 mt-8">
      {cards.map((card, i) => (
        <div key={i} className="flex flex-col gap-6">
          <Image src={card?.src} alt={card?.title} />
          <Heading variant="tertiary" className="text-(--text-secondary)">
            {card?.title}
          </Heading>
          <Paragraph variant="D" className="text-(--text-tertiary)">
            {card?.desc}
          </Paragraph>
        </div>
      ))}
    </div>
  );
}
