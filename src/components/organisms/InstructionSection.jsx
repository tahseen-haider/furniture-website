import PropTypes from 'prop-types';
import { CentralHeading, InstructionImageCards } from '@/components';

function InstructionSection({ title, description }) {
  const cards = [
    {
      title: 'Purchase Securely',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      src: '/images/Purchase.png',
    },
    {
      title: 'Ships From Warehouse',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      src: '/images/Ship.png',
    },
    {
      title: 'Style Your Room',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      src: '/images/Style.png',
    },
  ];

  return (
    <div className="flex flex-col items-center text-center gap-4 py-14 px-14 pb-28">
      <CentralHeading title={title} description={description} />
      <InstructionImageCards cards={cards} />
    </div>
  );
}

InstructionSection.propTypes = {
  title: PropTypes.string.isRequired, // heading text
  description: PropTypes.string.isRequired, // paragraph text
};

export default InstructionSection;
