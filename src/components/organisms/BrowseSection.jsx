import PropTypes from 'prop-types';
import { BrowseImageCards, CentralHeading } from '@/components';

function BrowseSection({ title, description }) {
  const cards = [
    {
      title: 'Dining',
      src: '/images/Dining.png',
    },
    {
      title: 'Living',
      src: '/images/Living.png',
    },
    {
      title: 'Bedroom',
      src: '/images/Bedroom.png',
    },
  ];

  return (
    <div className="flex flex-col items-center text-center gap-4 py-14 px-14 border-b-2 border-gray-200">
      <CentralHeading title={title} description={description} />
      <BrowseImageCards cards={cards} />
    </div>
  );
}

BrowseSection.propTypes = {
  title: PropTypes.string.isRequired, // title for the central heading
  description: PropTypes.string.isRequired, // description for the central heading
};

export default BrowseSection;
