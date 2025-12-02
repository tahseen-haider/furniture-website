import { CollectionCard, Heading } from '@components';
import PropTypes from 'prop-types';

const CollectionPageTemplate = ({ collections = [] }) => {
  return (
    <div className="products-page mx-auto flex flex-col gap-4 items-center">
      <Heading level={2} variant="secondary">
        Collections
      </Heading>
      <div className="w-full bg-(--color-bg-secondary)">
        <div className="max-w-[1440px] grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-8 p-6">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </div>
  );
};

CollectionPageTemplate.propTypes = {
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default CollectionPageTemplate;
