import { Image, Paragraph } from '@components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CollectionCard = ({ collection }) => {
  return (
    <Link to={collection?.link} className="w-full group">
      <div className="overflow-hidden">
        <Image
          src={collection?.image}
          alt={collection?.title}
          className="group-hover:scale-110 w-full object-cover aspect-square transition-transform duration-400"
        />
      </div>
      <Paragraph underline="center" variant="G" className="leading-none mt-2">
        {collection?.title}
      </Paragraph>
    </Link>
  );
};

CollectionCard.propTypes = {
  collection: PropTypes.shape({
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default CollectionCard;
