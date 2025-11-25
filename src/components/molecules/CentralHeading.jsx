import PropTypes from 'prop-types';
import { Heading, Paragraph } from '@components';

const CentralHeading = ({ title, description }) => {
  return (
    <>
      <Heading level={2} variant="secondary" className="text-(--text-secondary)">
        {title}
      </Heading>
      <Paragraph variant="B" className="text-(--text-tertiary)">
        {description}
      </Paragraph>
    </>
  );
};

CentralHeading.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CentralHeading;
