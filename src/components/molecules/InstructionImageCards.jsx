import PropTypes from 'prop-types';
import { Heading, Image, Paragraph } from '@components';

const InstructionImageCards = ({ cards }) => {
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
};

InstructionImageCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default InstructionImageCards;
