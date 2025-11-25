import PropTypes from 'prop-types';
import { Heading, Image } from '@components';

const BrowseImageCards = ({ cards }) => {
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
};

BrowseImageCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BrowseImageCards;
