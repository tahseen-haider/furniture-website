import PropTypes from 'prop-types';
import { CentralHeading, InstructionImageCards } from '@components';

const InstructionSection = ({ title, description }) => {
  const cards = [
    {
      title: 'Purchase Securely',
      desc: 'Shop with confidence using our safe and trusted payment method.',
      src: '/images/Purchase.png',
    },
    {
      title: 'Ships From Warehouse',
      desc: 'Your order is carefully packed and shipped directly from our warehouse.',
      src: '/images/Ship.png',
    },
    {
      title: 'Style Your Room',
      desc: 'Enjoy your new furniture and transform your space effortlessly.',
      src: '/images/Style.png',
    },
  ];

  return (
    <div className="flex flex-col items-center text-center gap-4 py-14 px-4 md:px-14 pb-28">
      <CentralHeading title={title} description={description} />
      <InstructionImageCards cards={cards} />
    </div>
  );
};

InstructionSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default InstructionSection;
